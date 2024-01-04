import { useRecoilState } from "recoil"
import { viewHistory } from "src/settings/atoms"

//Provides a history-based navigation system which keeps in Recoil state a current path of views accessed.
//Users can backwards, forwards along the path or jump to a specific index
//Returning to an earlier index and then starting on a new path replaces the old one.
//Needs a viewHistory atom
//Works with any view object which exposes a view modelType and id.
//name: string name of the view type = eg "cases"
//modelType: string name of the type of model the view contains
//id: null: integer id of the model selected
//itemTitle: string representing the title of the view, to be shown in breadcrumbs
const useView = () => {

    const [view, setView] = useRecoilState(viewHistory)

    //Add or replace a view in the history based on props.
    //Index - the index at which to add or replace
    //NewView - the new view to add to the history
    //isReplace - if true, the existing view is replaced, if false the newView is inserted
    //currentIndex automatically moves to the new view
    const addReplaceView = (index, newView, isReplace) => {
        //Add new view to history
        const newHistory = [...view.history]
        newHistory.splice(index, isReplace ? 1 : 0, newView)
        let newIndex = view.currentIndex
        newIndex = newIndex += 1
        setView({
            currentIndex: newIndex, 
            history: newHistory
        })
    }

    //Move forward in the history with a newView
    //If at the end, newView is added unless it has already been accessed in the current path
    const moveForward = (newView) => {
        let newIndex = view.currentIndex
        newIndex = newIndex += 1
        const nextItem = next()
        if(!nextItem){
            addReplaceView(view.currentIndex + 1, newView, false)
            return
        } 
        if(itemsDoMatch(current(), next())){
            setPosition(newIndex)
        } else {
            addReplaceView(view.currentIndex + 1, newView, true)
        }
    }

    //Moves the currentIndex to newIndex
    const moveToIndex = (newIndex) => {
        setView({
            ...view,
            currentIndex: newIndex
        })
    }

    //Returns the final index in the path
    const indexAtEnd = () => {
        return view.currentIndex === view.history.length - 1
    }

    //Returns the next view after the current one, or null if at the end of the path
    const next = () => {
        return indexAtEnd() ? null : view.history[view.currentIndex + 1]
    }

    //Moves the currentIndex left one position
    const moveBackwards = () => {
        let newIndex = view.currentIndex
        newIndex -= 1
        if(view.currentIndex > 0){
            setPosition(newIndex)
        }

    }

    //Compares two items by type and id and returns true if they match
    const itemsDoMatch = (item1, item2) => {
        return item1 !== null && item2 !== null && item1.type === item2.type && item1.id === item2.id
    }

    //Sets the currentIndex
    const setPosition = (newIndex) => {
        setView({...view, currentIndex: newIndex})
    }

    //Returns the current view
    const current = () => {
        return view.history[view.currentIndex]
    }

    //Returns true if moving backwards is possible
    const backwardsIsPossible = () => {
        return view.currentIndex > 0
    }

    //Returns the entire history path
    const history = () => {
        return view.history
    }

    return {
        current, next,
        moveForward,
        moveBackwards,
        moveToIndex,
        addReplaceView,
        backwardsIsPossible,
        history
    }

}

export default useView