import useController from '../../library/useController'
//To implement useList
// import { casesListState } from '../../settings/atoms'
// import useList from '../../library/useList'

//A data controller which defines methods of accessing an API to obtain and mutate data 
//Makes the request 
//And returns selected parameters and formatted data
const useCases = () => {
    
    //Create a controller for accessing data
    const casesController = useController()

    //Get the data.  
    //Use controller.get for non-paginated data
    //Use controlller.getInfinite for paginated data
    const response = casesController.infiniteGet({
        type: 'cases',
        requestType: 'all',
        //Include queryStringParams to add page numbers to the request
        queryStringParams: {page: 1}
    })

    //Extract params and data required for this specific type of data from the response
    //isSuccess - bool, the query is fulfilled
    //isFetching - bool, the query is still fetching
    //data - the raw data in a format provided by the api
    //fetchNextPage - a function to fetch the next page of data
    //hasNextPage - bool - true if there is a next page to fetch
    const { isSuccess, isFetching, data, fetchNextPage, hasNextPage  } = response

    //If request has yet to return flags to keep components informed
    if(!isSuccess) return {
        isSuccess,
        isFetching
    }

    //Handling pages. Extract the pages data into an array of pages containing an array of items.
    const { pages, pageParams } = data
    const pagesData = pages.map((p) => {
        //Customise this line for the specific API response format.
        return p.data.data
    })

    //Return params and data for non-paginated data. 
    //Return pageParams, fetchNextPage and hasNextPage if using infiniteGet to enable page controls. 
    return {
        isSuccess,
        isFetching,
        pages: pagesData,
        pageParams,
        fetchNextPage,
        hasNextPage
    }
    
}

export default useCases


