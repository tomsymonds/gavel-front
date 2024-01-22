import useAlert from "src/library/useAlert"
import { errorState } from "src/settings/atoms"
import { useRecoilState } from "recoil"

//An alert for displaying an error
const errorAlert = {
    active: true,
    type: "error"
}

const noError = {
    fetch: false,
    view: null
}

//Handles the error state of the app, and creates error alerts.
//Error state contains any fatal errors which prevent the app rendering at the top level. 
//fetch: if true there was a fatal error while fetching
//view: the view where the fatal error occurred
const useError = () => {

    const alert = useAlert()
    const [state, setState] = useRecoilState(errorState)

    //Set just the alert
    const setAlert = (props) => {
        const { title, description } = props
        alert.set({...errorAlert, title, description})
    }

    //Set the whole error object in state. 
    const set = (props) => {
        const {alert, fetch, view} = props
        if(alert) setAlert(alert)
        setState({fetch, view})
    }

    //Clear the error state. Alerts are cleared automatically
    const clear = () => {
        setState(noError)
    }

    return {
        ...alert,
        ...state,
        clear,
        set
    }

}
export default useError