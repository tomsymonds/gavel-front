import { useRecoilState } from "recoil"
import { currentView } from "src/settings/atoms"

const useView = () => {

    const [current, setView] = useRecoilState(currentView)

    const set = (newView) => {
        setView(newView)
    }

    return {
        set,
        current
    }

}

export default useView