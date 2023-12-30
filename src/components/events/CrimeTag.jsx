import PropTypes from 'prop-types'

const CrimeTag = (props) => {

    const { name } = props.attributes

    return name

}

export default CrimeTag

CrimeTag.propTypes = {
    name: PropTypes.string
}

