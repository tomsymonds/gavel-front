import { Box, Text } from '@chakra-ui/react'
import PropTypes from 'prop-types'
import ViewHeading from '../core/ViewHeading'
import dateHandler from "src/library/dateHandler"

const Defendant = (props) => {

    const { name, date_of_birth, address } = props.attributes
    const dateOfBirthText = dateHandler(date_of_birth, 'birthday')
    const ageText = dateHandler(date_of_birth, "age")


    return (
        <Box p = {2}>
            <ViewHeading
                text = {name} 
                textSize = "md"
            />
            <Text><b>date of birth</b> {dateOfBirthText}  <b>age</b> {ageText}</Text>
            <Text>{address}</Text>
        </Box>   
    )

}

export default Defendant

Defendant.propTypes = {
    attributes: PropTypes.object
};