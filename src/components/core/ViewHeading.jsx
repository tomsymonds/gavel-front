import { Heading, Icon, HStack } from '@chakra-ui/react'
import PropTypes from 'prop-types'

const ViewHeading = (props) => {

    const { icon, text, iconSize, textSize } = props
    return (
        <HStack>
            { icon && <Icon as = {icon} boxSize = {iconSize} color = "#63B3ED"/>  }     
            <Heading size = {textSize}>
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
    textSize: PropTypes.string
};