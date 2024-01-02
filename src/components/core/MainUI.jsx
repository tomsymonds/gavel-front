import { useRecoilValue } from 'recoil'
import { currentView } from '../../settings/atoms'
import CaseList from '../cases/CaseList'
import CaseDetail from '../cases/CaseDetail'
import FixedBanner from './FixedBanner'

const MainUI = () => {

    const view = useRecoilValue(currentView)

    const mainContent = () => {
        switch(view.name) {
            case "cases":
                return <CaseList />
            case "case":
                return <CaseDetail />
            default:
                return "No view set"
        }
    }

    return (
        <>
            <FixedBanner />
            {mainContent()}
        </>

    )


    
}

export default MainUI