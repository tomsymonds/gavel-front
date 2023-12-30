import { useRecoilState } from "recoil"
import { currentView } from "src/settings/atoms"

const useView = () => {

    const [current, setView] = useRecoilState(currentView)

    const set = (newView) => {
        setView(newView)
    }

    const setID = (id) => {
        setView({...current, id})
    }

    const setModelType = (type) => {
        setView({...current, modelType:type})
    }

    return {
        set, setID, setModelType,
        current
    }

}

export default useView