import PropTypes from 'prop-types'
import { Badge } from '@chakra-ui/react'

const CrimeTag = (props) => {

    const { name } = props.attributes

    return (
        <Badge>{name}</Badge>
    )

}

export default CrimeTag

CrimeTag.propTypes = {
    attributes: PropTypes.object
}

