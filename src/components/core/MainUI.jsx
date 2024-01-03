import CaseList from '../cases/CaseList'
import CaseDetail from '../cases/CaseDetail'
import NavBanner from './NavBanner'
import { Box, Container } from '@chakra-ui/react'
import ItemNavBar from './ItemNavBar'
import useView from '../../library/useView'

const MainUI = () => {

    const view = useView()


    const mainContent = () => {
        switch(view.current().name) {
            case "cases":
                return <CaseList />
            case "case":
                return <CaseDetail />
            default:
                return "No view set"
        }
    }

    return (
        <Container>
            <NavBanner />
            <Box mt = "50px">
                <ItemNavBar />
                {mainContent()} 
            </Box>
        </Container>

    )


    
}

export default MainUI