import { Box, Text } from '@chakra-ui/react'
import PropTypes from 'prop-types' 
import ViewHeading from '../core/ViewHeading'
import CrimeTagList from './CrimeTagList'

const CourtEvent = (props) => {

    const { category, offence, offence_level, offence_tags  } = props

    return (
        <Box p = {2}>
            <ViewHeading
                text = {category}
                textSize = "md"
            />
            <Box mb = '5px'>
                <CrimeTagList tags = {offence_tags} />
                <Text fontSize = "sm"><b>Offence </b>{offence}</Text>
                <Text fontSize = "sm"><b>Status </b>{offence_level}</Text>
            </Box>
        </Box>   
    )

}

export default CourtEvent

CourtEvent.propTypes = {
    category: PropTypes.string,
    offence: PropTypes.string,
    offence_level: PropTypes.string,
    offence_tags: PropTypes.array
};