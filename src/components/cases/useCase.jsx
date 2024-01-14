import useController from '../../library/useController'


const useCase = (id) => {

    const controller = useController()
    
    const response = controller.get({
        type: 'cases',
        requestType: 'byID',
        params: { id }
    })
    
    return {
        response
    }
    
}

export default useCase

// const { listInactive = false } = props || {}
//     //Provide atom value for current ids - ids of the currently selected list items
//     const currentIDs = useRecoilValue(currentStoryIDsAtom)
//     const currentID = currentIDs[0]?.id
//     const { 
//         filterController, 
//         orderController, 
//         getListParams 
//     } = useListArrangement({type: 'stories', filterField: 'title'})
//     const errorController = useErrors()

//     //Get list data - includes filter
//     const request = {
//         type: 'stories',
//         requestType: 'storiesListWithParams'
//     }
//     const listRequest = getListParams(request)
//     const response = useInfiniteGet({...listRequest, errorController})  
//     const { isFetching } = response
//     //Add the updated fetchNextPage function from useInfiniteGet to pageController
//     const {fetchNextPage, hasNextPage, hasPreviousPage} = response
//     const pageController = {fetchNextPage, hasNextPage, hasPreviousPage}
//     const storyPages = response.data ? response.data.pages : []
//     /**
//      * Returns a story for an id from within paginated stories
//      * @param {integer} id 
//      * @returns story object
//      */
//     const getStory = (id) => {
//         let matchingStory
//         storyPages.forEach((page) => {
//             matchingStory = page.data.find(story => story.id === id)
//         })
//         return matchingStory
//     }
