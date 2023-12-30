import PropTypes from 'prop-types'
import CrimeTag from './CrimeTag'
import { HStack } from '@chakra-ui/react'

const CrimeTagList = (props) => {

    const { tags } = props

    return (
        <HStack>
            {
                tags.map((tag) => {
                    return (
                        <CrimeTag {...tag} key = {tag.id}/>            
                    )
                })
            }
        </HStack>

    )

}

export default CrimeTagList

CrimeTagList.propTypes = {
    tags: PropTypes.array,
}
