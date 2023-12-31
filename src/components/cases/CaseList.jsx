import useCases from "./useCases"
import useView from "src/library/useView"
import Case from "./Case"
import ListBase from "../core/ListBase"
import ViewHeading from "../core/ViewHeading"
import { Container, Icon } from '@chakra-ui/react'
import { PiGavel } from 'react-icons/pi'

const CaseList = () => {
    const caseController = useCases()
    const response = caseController.response.data
    const view = useView()
    if(!response) return "Loading"

    const cases = response.data

    const getIcon = () => <Icon as = {PiGavel} boxSize = '0.75em'/>
    const getListItemComponent = (props) => <Case {...props} />
    const handleListClick = (selectedCase) => {
        view.set({
            name: "case",
            modelType: "case",
            id: selectedCase.id
        })
    }

    return (
        <>
            <Container p = {4}>
                <ViewHeading 
                    icon = {PiGavel}
                    text = "Cases"
                />     
                <ListBase
                    listItems = {cases}
                    listClickHandler = {handleListClick}
                    getIcon = {getIcon}
                    getListItemComponent = {getListItemComponent}
                    noItemsText = "No cases."
                />
            </Container>
        </>
    )
}

export default CaseList