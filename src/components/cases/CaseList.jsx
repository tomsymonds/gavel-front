import useCases from "./useCases"
import Case from "./Case"
import { List, Header, Icon, Container } from 'semantic-ui-react'


const CaseList = () => {
    const caseController = useCases()
    const response = caseController.response.data

    if(!response) return "Loading"

    const cases = response.data

    console.log(response.data)

    return (
        <>
            <Container>
            <Header as='h1'>
                <Icon name = 'gavel' />
                <Header.Content>
                    Cases
                </Header.Content>
            </Header>
            </Container>
            {
                cases.length > 0 ? 
                    <List relaxed selection>
                        { 
                            cases.map((c) => {
                                return (
                                    <List.Item key = {c.id}>
                                        <Case 
                                            {...c.attributes}
                                        />
                                    </List.Item>
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