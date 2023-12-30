import { Heading, Icon } from '@chakra-ui/react'
import PropTypes from 'prop-types'

const ViewHeading = (props) => {

    const { icon, text } = props

    return (
    <Heading size = 'md'>
        <Icon as = {icon} boxSize = '0.75em'/>
        {text}
    </Heading>
    )
}

export default ViewHeading

ViewHeading.propTypes = {
    icon: PropTypes.func,
    text: PropTypes.string
};