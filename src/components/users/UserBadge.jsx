import { Avatar, HStack, Text } from '@chakra-ui/react'
import { useAuth0 } from '@auth0/auth0-react';

const UserBadge = () => {

    const { isAuthenticated, logout } = useAuth0()

    const handleLogout = () => {
        logout({
          logoutParams: {
            returnTo: window.location.origin,
          },
        });
      };

    if(!isAuthenticated) return null

    return (
        <HStack>
            <Avatar size = 'sm' bg='blue.500' onClick = {() => logout()} />
            <Text 
                onClick = {() => handleLogout()}
                _hover= {{cursor: 'pointer'}}
            >
                Log Out
            </Text>
        </HStack>

    )

}

export default UserBadge