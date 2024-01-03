import CaseList from '../cases/CaseList'
import CaseDetail from '../cases/CaseDetail'
import NavBanner from './NavBanner'
import { Box, Container, Button } from '@chakra-ui/react'
import useNav from '../../library/useNav'
import useView from '../../library/useView'

const MainUI = () => {

    const view = useView()
    const nav = useNav()

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

    console.log(view.backwardsIsPossible())

    return (
        <Container>
            <NavBanner />
            <Box mt = "50px">
                {view.backwardsIsPossible() &&
                    <Button>
                        back
                    </Button>
                }
                {mainContent()} 
            </Box>
        </Container>

    )


    
}

export default MainUI