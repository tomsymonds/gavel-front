import PropTypes from 'prop-types'
import { Box, Button } from '@chakra-ui/react'

const PageMoreButton = (props) => {

    const { fetchNextPage } = props


    return (
        <Box p = '20px'>
            <Button
                onClick = {() => fetchNextPage()}
            >
                More
            </Button>
        </Box>
    )
}

PageMoreButton.propTypes = {
    //React-Query Function for fetching next page
    fetchNextPage: PropTypes.func
}

export default PageMoreButton