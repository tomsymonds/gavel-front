import { Heading, Icon, HStack } from '@chakra-ui/react'
import PropTypes from 'prop-types'

const ViewHeading = (props) => {

    const { icon, text, iconSize, textSize, iconColor } = props
    return (
        <HStack>
            { icon && <Icon as = {icon} boxSize = {iconSize} color = {iconColor || "#63B3ED"}/>  }     
            <Heading fontSize = {textSize}>
                {text}
            </Heading>
        </HStack>
    )
}

export default ViewHeading

ViewHeading.propTypes = {
    //Icon component
    icon: PropTypes.func,
    //Heading text
    text: PropTypes.string,
    //Icon size in em
    iconSize: PropTypes.string,
    //Text size in Chakra format
    textSize: PropTypes.string,
    //Color of icon
    iconColor: PropTypes.string
};