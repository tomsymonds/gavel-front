import { Container, Heading, Text } from '@chakra-ui/react'
import PropTypes from 'prop-types' 
import CrimeTagList from './CrimeTagList'

const CourtEvent = (props) => {

    const { category, offence, offence_level, offence_tags  } = props
    // const ageText = dateHandler(date_of_birth, "age")
    return (
        <Container p = {2}>
            <Heading size = 'sm'>
                { category }
            </Heading>
            <CrimeTagList tags = {offence_tags} />
            <Text><b>Offence </b>{offence}</Text>
            <Text fontSize = "sm"><b>Status </b>{offence_level}</Text>
        </Container>   
    )

}

export default CourtEvent

CourtEvent.propTypes = {
    category: PropTypes.string,
    offence: PropTypes.string,
    offence_level: PropTypes.string,
    offence_tags: PropTypes.array
};