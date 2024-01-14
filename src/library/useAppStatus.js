import { useRecoilState } from 'recoil'
import { appStatus } from 'src/settings/atoms'

//Controls states for loading data, internet status etc. 
const useAppStatus = () => {

    const [status, setStatus] = useRecoilState(appStatus)

    //Set the current list state settings for the list. 
    //Pass a setting object and the name of the setting - eg 'filter' or 'sort'
    const set = (props) => {
        console.log(props)
        const { statusName, status } = props
        const newStatus = {
            ...appStatus,
            [statusName]: status
        }
        setStatus(newStatus)
    }

    return {
        current: status,
        set
    }
}

export default useAppStatus