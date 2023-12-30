
import PropTypes from 'prop-types'
import CrimeTagList from '../events/CrimeTagList'



const Case = (props) => {

    const { title } = props
    const offence_tags = props.offence_tags.data

    return (
        <Container>
            <Header>
                {title}
            </Header>
            <Header.Subheader>
                <CrimeTagList tags = {offence_tags} />
            </Header.Subheader>
        </Container>   
    )

}

export default Case

Case.propTypes = {
    title: PropTypes.string,
    offence_tags: PropTypes.object
};