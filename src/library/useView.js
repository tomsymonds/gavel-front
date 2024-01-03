import { useRecoilState } from "recoil"
import { viewHistory } from "src/settings/atoms"

const useView = () => {

    const [view, setView] = useRecoilState(viewHistory)

    const addView = (newView) => {
        console.log('add', newView)
        //Add new view to history
        const newHistory = [...view.history]
        newHistory.splice(view.currentIndex, 0, newView)
        setView({
            ...view,
            history: newHistory
        })
        moveForward()
    }

    const moveForward = () => {
        let current = view.currentIndex
        current = current ++
        if(view.currentIndex < view.history.length){
            setPosition(current)
        }
    }

    const moveBackwards = () => {
        let current = view.currentIndex
        current = current --
        if(view.currentIndex > 0){
            setPosition(current)
        }

    }

    const setPosition = (newIndex) => {
        setView({...history, currentIndex: newIndex})
    }

    const current = () => {
        return view.history[view.currentIndex]
    }

    const backwardsIsPossible = () => {
        return view.currentIndex > 0
    }

    return {
        current,
        moveForward,
        moveBackwards,
        addView,
        backwardsIsPossible
    }

}

export default useView