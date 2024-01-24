import { useRecoilState } from "recoil"
import { alertState } from "src/settings/atoms"

const emptyAlert = {
    active: false,
    title: null,
    description: null,
    type: null
}

const useAlert = () => {
    const [alert, setAlert] = useRecoilState(alertState)
    const set = (props) => {
        setAlert({
            ...props,
            active: true
        })
    }

    const clear = () => {
        setAlert(emptyAlert)
    }

    return {
        ...alert,
        set,
        clear
    }


}

export default useAlert