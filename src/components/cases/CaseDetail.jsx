import { useRecoilValue } from "recoil"
import { currentView } from "src/settings/atoms"
import ViewHeading from '../core/ViewHeading'
import { Container, Box } from '@chakra-ui/react'
import { PiGavel } from 'react-icons/pi'
import useCase from "./useCase"

const CaseDetail = (props) => {
    const view = useRecoilValue(currentView)
    const caseID = view.id
    const caseController = useCase(caseID)

    const response = caseController.response.data
    const {} = response.data.attributes
    console.log(response)

    return (
        <Container p = {2}>
            <ViewHeading 
                text = "Case Detail title"
                icon = {PiGavel}
            />
            <Box>
                Details
            </Box>
        </Container>
    )

}

export default CaseDetail