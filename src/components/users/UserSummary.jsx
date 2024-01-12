import { Box } from '@chakra-ui/react'
import { useAuth0 } from '@auth0/auth0-react';

const UserSummary = () => {

    const { user } = useAuth0()

    return (
        <Box>
            {user.given_name}
        </Box>
    )

}

export default UserSummary