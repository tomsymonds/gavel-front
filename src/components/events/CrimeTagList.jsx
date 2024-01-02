import PropTypes from 'prop-types'
import CrimeTag from './CrimeTag'
import { HStack } from '@chakra-ui/react'

const CrimeTagList = (props) => {
    const { tags } = props

    return (
        <HStack>
            {
                tags.map((tag, index) => {
                    if(typeof tag === "string") tag = {id:index, attributes: {name: tag}}
                    return (
                        <CrimeTag id = {tag.id} {...tag.attributes} key = {tag.id}/>            
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
