import PropTypes from 'prop-types'
import CrimeTag from './CrimeTag'
import { HStack, Badge } from '@chakra-ui/react'

const CrimeTagList = (props) => {

    const { tags } = props

    return (
        <HStack>
            {
                tags.map((tag) => {
                    return (
                        <Badge key = {tag.id}>
                            <CrimeTag {...tag}/>
                        </Badge>                
                    )
                })
            }
        </HStack>

    )

}

export default CrimeTagList

CrimeTagList.propTypes = {
    tags: PropTypes.array
}
