import useController from '../../library/useController'
//To implement useList
// import { casesListState } from '../../settings/atoms'
// import useList from '../../library/useList'

//Turn this into a generic controller with comments at some point
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
    //Minimum: isSuccess, data
    const { isSuccess, data, fetchNextPage, hasNextPage  } = response

    //If request has yet to return data return only the isSuccess flag to keep components informed
    if(!isSuccess) return {isSuccess}

    //Handling pages. Extract the pages data into an array of pages containing an array of items.
    //
    const { pages, pageParams } = data
    const pagesData = pages.map((p) => {
        //Customise this line for the specific API response format.
        return p.data.data
    })

    //Return params and data. 
    //Minimum: isSuccess, data (for non-paginated data), or pages (for paginated data)
    //Return pageParams, fetchNextPage and hasNextPage if using infiniteGet to enable page controls. 
    return {
        isSuccess,
        pages: pagesData,
        pageParams,
        fetchNextPage,
        hasNextPage
    }
    
}

export default useCases


