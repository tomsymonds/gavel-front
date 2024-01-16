import CaseList from '../cases/CaseList';
import CaseDetail from '../cases/CaseDetail';
import NavBanner from '../core/NavBanner';
import LoginButton from '../auth/LoginButton';
import LogoutButton from '../auth/LogoutButton';
import SignupButton from '../auth/SignupButton';
import IntroMessage from './IntroMessage';
import { Flex, Center, VStack, HStack, Box } from '@chakra-ui/react';
import ItemNavBar from '../core/ItemNavBar';
import useView from '../../library/useView';
import { useAuth0 } from "@auth0/auth0-react";
import useToken from '../../library/useToken';
import User from '../users/UserSummary';
import './mainUI.css'

export const MainUI = () => {

    const view = useView();
    const { isAuthenticated } = useAuth0();
    const tokenProvider = useToken();

    const mainContent = () => {
        switch (view.current().name) {
            case "cases":
                return <CaseList />;
            case "case":
                return <CaseDetail />;
            default:
                return "No view set";
        }
    };

    return (
        <div className = 'main-ui'>
            <NavBanner />
            <Flex mt="63px" ml="0px"  width="100vw" height="100vh" pt = "200px"
                alignContent={"center"} 
                justifyContent={"center"}
            >
                    <VStack spacing='24px'>
                        {!isAuthenticated && !tokenProvider.hasToken() && 
                            <IntroMessage 
                                text = "Log in or Sign Up"
                            />
                        }
                        {!isAuthenticated && (
                        <HStack spacing='24px'>
                            <LoginButton />
                            <SignupButton />
                        </HStack>
                        )}
                    </VStack>
                {isAuthenticated && tokenProvider.hasToken() && (
                    <>
                        <LogoutButton />
                        <ItemNavBar />
                        {mainContent()}
                    </>
                )}
            </Flex>
        </div>

    )
}

export default MainUI
