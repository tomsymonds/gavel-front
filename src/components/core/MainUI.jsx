import { useRecoilValue } from 'recoil'
import { currentView } from '../../settings/atoms'
import CaseList from '../cases/CaseList'

const MainUI = () => {

    const view = useRecoilValue(currentView)

    switch(view) {
        case "cases":
            return <CaseList />
        default:
            return "No view set"

    }
    
}

export default MainUI