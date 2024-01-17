import { Box, Heading } from '@chakra-ui/react'
import PropTypes from 'prop-types'
import CrimeTagList from '../events/CrimeTagList'



const Case = (props) => {

    const { title, offence_tags  } = props

    return (
        <Box p = "2">
            <Heading size = 'md'>
                {title}
            </Heading>
            <CrimeTagList tags = {offence_tags.data} />
        </Box>   
    )

}

export default Case

Case.propTypes = {
    title: PropTypes.string,
    offence_tags: PropTypes.object
};