import useController from '../../library/useController'
import useErrors from '../errors/useError'

const useCase = (id) => {

    const controller = useController()
    const errorController = useErrors()
    
    const response = controller.get({
        type: 'cases',
        requestType: 'byID',
        params: { id }
    })

    const { isSuccess, isFetching, data, isError } = response

    //If request has yet to return flags and has not resulted in an error keep components informed
    if(!isSuccess && !isError) return {
        isSuccess,  
        isFetching
    }

    //Error handling section
    //If useController has attempted to fetch (default = three times)
    if(isError){
        errorController.set({
            alert: {
                title: "Sorry there's a problem.",
                description: "Unable to obtain cases data"
            },
            view: "cases",
            fetch: true //Error was while fetching
        })
    }

    return {
        isSuccess,
        isFetching,
        data: data.data //targets data component of response
    }
    
}

export default useCase

