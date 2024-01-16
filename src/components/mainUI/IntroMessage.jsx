import PropTypes from 'prop-types'
import { Text } from '@chakra-ui/react'

const IntroMessage = (props) => {

    const { text } = props

    return (
        <Text fontSize = '4xl' color= "white">{text}</Text>
    )
}

export default IntroMessage

IntroMessage.propTypes = {
    text: PropTypes.string
}