import { useEffect } from 'react';
import CaseList from '../cases/CaseList';
import CaseDetail from '../cases/CaseDetail';
import NavBanner from '../core/NavBanner';
import LoginButton from '../auth/LoginButton';
import SignupButton from '../auth/SignupButton';
import IntroMessage from './IntroMessage';
import { Box, Flex, VStack, HStack, Spinner} from '@chakra-ui/react';
import ItemNavBar from '../core/ItemNavBar';
import useView from '../../library/useView';
import useToken from '../../library/useToken';
import './mainUI.css'
import { useAuth0 } from '@auth0/auth0-react';
import Uploader from '../uploader/Uploader';
export const MainUI = () => {

    const view = useView();
    const tokenProvider = useToken();
    const { isAuthenticated } = useAuth0()

    //Scroll view to top in case user scrolled down on previous view.
    useEffect(() => {
        window.scrollTo(0, view.current().scroll)
    }, [view])
    

    const mainContent = () => {
        switch (view.current().name) {
            case "cases":
                return <CaseList />;
            case "case":
                return <CaseDetail />;
            case "upload":
                return <Uploader />
            default:
                return "No view set";
        }
    };

    return (
        <div className = 'main-ui'>
            <NavBanner loggedIn = {isAuthenticated}/>
            {!tokenProvider.checked &&
                    <Flex mt="63px" ml="0px"  width="100vw" height="100vh" pt = "200px"
                        alignContent={"center"} 
                        justifyContent={"center"}
                    >
                        <Spinner size = 'xl'/>
                    </Flex>
            }
            {tokenProvider.checked && 
                isAuthenticated ? 
                <Box mt="90px" width="65vw" height="100vh" bg = 'white' p = '30px' pl = '100px'
                >
                    <ItemNavBar />
                    {mainContent()}
                </Box>
                :
                <div className = 'landing'>
                        <Flex mt="63px" ml="0px"  width="100vw" height="100vh" pt = "200px"
                            alignContent={"center"} 
                            justifyContent={"center"}
                        >
                                <VStack spacing='24px'>
                                        <IntroMessage 
                                            text = "Log In or Sign Up"
                                        />
                                    <HStack spacing='24px'>
                                        <LoginButton />
                                        <SignupButton />
                                    </HStack>
                                </VStack>
                        </Flex>
                </div>
            }
        </div>
    )   
}

export default MainUI
