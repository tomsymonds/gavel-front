import { useEffect } from 'react';
import useAlert from '../../library/useAlert'
import useError from '../errors/useError'
import { useToast } from "@chakra-ui/react"
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
    const toast = useToast()
    const alert = useAlert()
    const errors = useError()
    const { isAuthenticated } = useAuth0()

    //Scroll view to top in case user scrolled down on previous view.
    useEffect(() => {
        window.scrollTo(0, view.current().scroll)
    }, [view])

    //Show notifications
    useEffect(() => {
       //If there's an active alert, display a Toast, and then clear the alert
       if(alert.active){
        const { title, description, type } = alert;
        toast({
          title,
          description,
          duration: 5000,
          position: "top",
          isClosable: true,
          status: type
        });
        alert.clear()
       }
    }, [alert, toast])

    const mainContent = () => {
        //Fetch errors will stop app rendering
        if(errors.fetch) return false

        //Show the view
        switch (view.current().name) {
            case "cases":
                return <CaseList />;
            case "case":
                return <CaseDetail />;
            case "uploader":
                return <Uploader />
            default:
                return "No view set";
        }
    };

    return (
        <div className = 'main-ui'>
            <NavBanner loggedIn = {isAuthenticated}/>

            {/* Loading */}
            {/* Awaiting token check */}
            {!tokenProvider.checked &&
                    <Flex mt="63px" ml="0px"  width="100vw" height="100vh" pt = "200px"
                        alignContent={"center"} 
                        justifyContent={"center"}
                    >
                        <Spinner size = 'xl'/>
                    </Flex>
            }
            
            {/* Show main content */}
            {/* token received and user is authenticated */}
            {/* user not authenticated show login screen */}
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
