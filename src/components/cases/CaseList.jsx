import useCases from "./useCases"
import Case from "./Case"
import { Container, Heading, Icon,  List, ListItem } from '@chakra-ui/react'
import { PiGavel} from 'react-icons/pi'

const CaseList = () => {
    const caseController = useCases()
    const response = caseController.response.data

    if(!response) return "Loading"

    const cases = response.data

    console.log(response.data)

    return (
        <>
            <Container p = {4}>
            <Heading size='xl'>
                <Icon as = {PiGavel} boxSize = '0.75em'/>
                Cases
            </Heading>
            </Container>
            {
                cases.length > 0 ? 
                    <List>
                        { 
                            cases.map((c) => {
                                return (
                                    <ListItem key = {c.id}>
                                        <Case 
                                            {...c.attributes}
                                        />
                                    </ListItem>
                                )
                            }) 
                        }
                    </List>
                : "No cases"
            }
        </>
    )
}

export default CaseList