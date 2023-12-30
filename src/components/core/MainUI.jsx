import { useRecoilValue } from 'recoil'
import { currentView } from '../../settings/atoms'
import CaseList from '../cases/CaseList'

const MainUI = () => {

    const view = useRecoilValue(currentView)

    console.log(view)

    switch(view.name) {
        case "cases":
            return <CaseList />
        case "case":
            return "Case"
        default:
            return "No view set"

    }
    
}

export default MainUI