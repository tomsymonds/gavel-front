import CaseList from '../cases/CaseList'
import CaseDetail from '../cases/CaseDetail'
import NavBanner from './NavBanner'
import LoginButton from '../auth/LoginButton'
import LogoutButton from '../auth/LogoutButton'
import SignupButton from '../auth/SignupButton'
import { Box, Container } from '@chakra-ui/react'
import ItemNavBar from './ItemNavBar'
import useView from '../../library/useView'
import { useAuth0 } from "@auth0/auth0-react";
import useToken from '../../library/useToken'

const MainUI = () => {

    const view = useView()
    const { isAuthenticated, user } = useAuth0()
    const tokenProvider = useToken()

    const mainContent = () => {
        console.log('main content', tokenProvider.token)
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
                {!isAuthenticated && (
                        <>
                            <LoginButton />
                            <SignupButton />
                        </>
                    )
                }
                {!isAuthenticated && !tokenProvider.token && (
                    <>No token</>
                )}
                {isAuthenticated && tokenProvider.token && (
                        <>
                            <LogoutButton/>
                            {user && <p>{user.email}</p>}
                            <ItemNavBar />
                            {mainContent()} 
                        </>
                    )
                }
            </Box>
        </Container>

    )


    
}

export default MainUI