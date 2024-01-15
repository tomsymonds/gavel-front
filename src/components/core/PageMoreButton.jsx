import PropTypes from 'prop-types'
import { Box, Button, Spinner } from '@chakra-ui/react'

//A button showing that more pages can be loaded.
//Pressing calls fetchNextPage, a react-query function to get the next page
const PageMoreButton = (props) => {

    const { fetchNextPage, showSpinner } = props


    return (
        <Box p = '20px'>
            {showSpinner ?
                <Spinner />
                :
                <Button
                    onClick = {() => fetchNextPage()}
                >
                    More
                </Button>
            }
        </Box>
    )
}
PageMoreButton.propTypes = {
    //React-Query Function for fetching next page
    fetchNextPage: PropTypes.func,
    //True if the button should be replaced by a spinner
    showSpinner: PropTypes.bool
}


export default PageMoreButton