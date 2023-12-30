import PropTypes from 'prop-types'
import CrimeTag from './CrimeTag'

const CrimeTagList = (props) => {

    const { tags } = props

    return (
        <List horizontal>
            {
                tags.map((tag) => {
                    return (
                        <List.Item key = {tag.id}>
                            <CrimeTag {...tag}/>
                        </List.Item>                
                    )
                })
            }
        </List>

    )

}

export default CrimeTagList

CrimeTagList.propTypes = {
    tags: PropTypes.array
}
