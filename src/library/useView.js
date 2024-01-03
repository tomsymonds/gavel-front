import { useRecoilState } from "recoil"
import { viewHistory } from "src/settings/atoms"

const useView = () => {

    const [view, setView] = useRecoilState(viewHistory)

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

    const moveToIndex = (newIndex) => {
        setView({
            ...view,
            currentIndex: newIndex
        })
    }

    const indexAtEnd = () => {
        return view.currentIndex === view.history.length - 1
    }

    const next = () => {
        return indexAtEnd() ? null : view.history[view.currentIndex + 1]
    }

    const moveBackwards = () => {
        let newIndex = view.currentIndex
        newIndex -= 1
        if(view.currentIndex > 0){
            setPosition(newIndex)
        }

    }

    const itemsDoMatch = (item1, item2) => {
        return item1 !== null && item2 !== null && item1.type === item2.type && item1.id === item2.id
    }

    const setPosition = (newIndex) => {
        setView({...view, currentIndex: newIndex})
    }

    const current = () => {
        return view.history[view.currentIndex]
    }

    const backwardsIsPossible = () => {
        return view.currentIndex > 0
    }

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