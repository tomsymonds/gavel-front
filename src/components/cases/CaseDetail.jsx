import { useRecoilValue } from "recoil"
import { currentView } from "src/settings/atoms"
import ViewHeading from '../core/ViewHeading'
import { Container } from '@chakra-ui/react'
import { PiGavel } from 'react-icons/pi'

const CaseDetail = (props) => {

    const view = useRecoilValue(currentView)

    return (
        <Container p = {2}>
            <ViewHeading 
                text = "Case Detail title"
                icon = {PiGavel}
            />
            
        </Container>  
    )

}

export default CaseDetail