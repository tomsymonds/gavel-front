import PropTypes from 'prop-types'
import { Button } from '@chakra-ui/react'

//A button showing that more pages can be loaded.
//Pressing calls fetchNextPage, a react-query function to get the next page
const PageMoreButton = (props) => {

    const { fetchNextPage } = props


    return (
        <Button
            onClick = {() => fetchNextPage()}
        >
            More
        </Button>
    )
}
PageMoreButton.propTypes = {
    //React-Query Function for fetching next page
    fetchNextPage: PropTypes.func
}


export default PageMoreButton