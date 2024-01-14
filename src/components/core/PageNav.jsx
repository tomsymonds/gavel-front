import PropTypes from 'prop-types'
import { Box, Button } from '@chakra-ui/react'

const PageNav = (props) => {

    const { pageParams, fetchNextPage } = props
    console.log('pageParams', pageParams)
    const currentPage = pageParams.length
    console.log('currentPage', currentPage)


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

PageNav.propTypes = {
    //Array of params for each page
    pageParams: PropTypes.array,
    //Function for fetching next page
    fetchNextPage: PropTypes.func
}

export default PageNav