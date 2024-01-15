import { useQuery, useMutation, useQueryClient, useInfiniteQuery } from '@tanstack/react-query'
import { useEffect } from  'react'
import useAppStatus from './useAppStatus'
import { appStatus } from 'src/settings/atoms'
import { appSettings } from '../settings/appSettings'
import useErrors from '../components/errors/useErrors'
import models from '../settings/stateDefinitions'
//import tokenController from '../helpers/tokenController'
import objectToURLString from './objectToURLString'
import axios from 'axios'


const api = appSettings.api
const requestsGlobalSettings = appSettings.requests

const useController = () => {

    const errorController = useErrors()
    const getQuery = useQuery
    const doMutation = useMutation
    const getQueryClient = useQueryClient
    const getInfiniteQuery = useInfiniteQuery
    const status = useAppStatus(appStatus)
    console.log(status)

    //Get a standard React-Query request
    const get = (props) => {
        const queryParams = getQueryParams({...props, errorController})
        const response = getQuery({...queryParams})
        const formattedResponse = responseFormat(response)
        return formattedResponse
    }

    //Returns an object containing selected params from the response object
    const responseFormat = (response) => {
        const { fetchStatus, isSuccess} = response
        const data = response.data ? response.data.data.data : null
        return {data, fetchStatus, isSuccess}
    }

    //Get an infinite React-Query request
    const infiniteGet = (props) => {
        //Get queryParams - merge in getNextPageParam
        console.log("new get request")
        const queryParams = getQueryParams({...props, errorController, options: {...props.options, getNextPageParam}})
        console.log("sending request")
        const response = getInfiniteQuery(queryParams)  
        console.log('new response')
        return response
    }

      /**
     * Updates data on the server using React-Query useMutation
     * @param {*} props 
     * @returns 
     */
      const update = (props) => {
        const { type, requestType, params, callbacks = {}, options = {} } = props
        const {routeProvider, queryProvider, method} = getRequest({type, requestType})
        const route = getRouteURL(routeProvider, params)
        const queryKeys = queryProvider(params)
        const queryClient = getQueryClient()
        const token = "1234" // tokenProvider.get()
        const mutationFn = async (data) => {
            return axios({
                method,
                url: route,
                headers: {
                    "Content-Type": "application/json",
                    Authorization : token ? token : ""
                },
                data
            })
        }
        const mutation = doMutation({
            mutationFn,
            onSuccess: (response) => {
                if(!options.skipInvalidate) invalidateQueries(options, queryClient)
                callbacks.onSuccess && callbacks.onSuccess(response)
            },
            onError: (error) => {
                callbacks.onError && callbacks.onError(error)
                errorController.set({
                    message: error.response.data,
                    status: error.response.status
                })
            }  
        })

        return {
            do: (data) => mutation.mutate(data),
            ...mutation,
            queryKeys,
            route: route,
            method: method
        }
    }

    /**
     * Validates requests relating to models
     * @param {string} the type of item to control. 
     * @returns 
     */
    const getModel = (type) => {
        if(!type) throw Error(`useModel: no type provided`)
        const model = models[type]
        if(!model) throw Error(`useModel: no model found for type ${type}`)
        return model
    }

    /**
     * Handles the invalidation of queries enabling data to be updated after a mutation
     * Options:
     * queryKeys - an array of queryKeys to invalidate
     * @param {*} options 
     * @param {*} queryClient 
     */
    const invalidateQueries = (options, queryClient) => {
        const { queryKeys, invalidateQueryKeys } = options
        queryKeys && queryClient.invalidateQueries({queryKey: queryKeys})
        invalidateQueryKeys && invalidateQueryKeys.forEach(queryKey => {
            queryClient.invalidateQueries(queryKey)
        });
    }

    /**
     * Gets the details of a request from the model and checks for errors
     * @param {object} props 
     * @returns 
     */
    const getRequest = (props) => {
        const { type, requestType } = props
        if(!requestType) throw Error(`useModel:getRequest no requestType`)
        const model = getModel(type)
        const requests = model.requests
        if(!requests) throw Error(`useModel:getRequest no requests found for ${model}`)
        const request = model.requests[requestType]
        if(!request) throw Error(`useModel:getRequest no request found for model ${type} with requestType ${requestType}`)
        const routeProvider = requests[requestType].routeProvider
        if(!routeProvider) throw Error(`useController:getRequest: no routeProvider function found for model ${model} and requestType ${requestType}`)
        const queryProvider = model.requests[requestType].queryProvider
        if(!queryProvider) throw Error(`useController:getRequest: no queryProvider function found for model ${model} and requestType ${requestType}`)
        const method = model.requests[requestType].method
        if(!method) throw Error(`useController:getRequest: no method found for model ${model} and requestType ${requestType}`)
        const idRequired = model.requests[requestType].idRequired
        return {method, queryProvider, routeProvider, idRequired}
    }

    const getRouteURL = (routeProvider, params = {}, queryStringParams = {}, pageParam) => {
        const baseRoute = routeProvider(params)
        const queryString = getQueryString(queryStringParams)
        const pageParamDelimiter = queryString ? "&" : "?"
        const pageParamString = pageParam ? `${pageParamDelimiter}page=${pageParam}` : ""
        const route = baseRoute + queryString + pageParamString
        return`${api.domain}${route}`
    }

    const getQueryString = (queryStringParams) => {
        if(Object.keys(queryStringParams).length === 0) return ""
        return "?" + objectToURLString(queryStringParams)
    }

    /**
     * Gets params for a React-Query request
     * @param {object} props:
     * type - the record type as per stateDefinitions - eg story
     * requestType - the basic request to be sent as per stateDefinitions - eg storiesList
     * params - object containing params to be used to construct route in stateDefinitions - eg id
     * queryStringParams - object containing additional params to be passed in the query string
     * callbacks - object containing callbacks to be sent after request is sent
     * options - object containing options to configure the ReactQuery request
     * @returns 
     */
    const getQueryParams = (props) => {
        const { type, requestType, params = {}, queryStringParams = {}, callbacks = {}, options = {}, errorController} = props
        const {routeProvider, queryProvider, idRequired} = getRequest({type, requestType})
        const combinedParams = {...params, ...queryStringParams}
        const queryKey = [queryProvider(combinedParams)]
        //Set the query function which react-query will call 
        const queryFn = (props) => {
            const { pageParam } = props //Current page for infinite queries. Can be null.
            const routeURL = getRouteURL(routeProvider, params, queryStringParams, pageParam)
            return axios.get(
                routeURL
            )
            .then((response) => {
                callbacks.onSuccess && callbacks.onSuccess(response)
                return response
            })
            .catch(error => {
                // Handle errors
                errorController.set({
                    message: error.response.statusText,
                    status: error.response.status
                })
                return null
            });
        };
        return {
            queryKey, queryFn,
            ...options,
            //Do not retry if error is a failure to authenticate
            //retry: (failureCount, error) => {
                // return appSettings.requests.noRetryErrorCodes.includes(error.response.status) ? 0 : 3
            //}, 
            //add other options to control enabled here
            //Only fetch when an id is needed, if there is an id.
            enabled: !idRequired || !!params.id,
            //Only update components if props or data change
            notifyOnChangeProps: ['data', 'error'],
            staleTime: requestsGlobalSettings.globalStaleTime,
            //Ensure previous data is maintained while fetching even if queryKey has changed. 
            keepPreviousData: true
        }
    }

    //Returns the number of the next page. Requires API to explose total_pages with results
    const getNextPageParam = (lastPage, allPages) => {
        const endPageNumber = lastPage.total_pages
        return allPages.length !== endPageNumber ? allPages.length + 1 : undefined
    }

    return { get, infiniteGet, update }
}

export default useController

export const permittedProps = (data, unpermittedProps) => {
    let newData = {...data}
    unpermittedProps.forEach((prop) => {
        delete newData[prop]
    })
    return newData
}