import useCases from "./useCases"
import useView from "src/library/useView"
import Case from "./Case"
import ListBase from "../core/ListBase"
import { Container, Icon } from '@chakra-ui/react'
import { PiGavel } from 'react-icons/pi'

const CaseList = () => {
    const caseController = useCases()
    const response = caseController.response.data
    const view = useView()
    console.log(view.current)
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
            <ListBase
                listItems = {cases}
                listClickHandler = {handleListClick}
                title = "Cases"
                getIcon = {getIcon}
                getListItemComponent = {getListItemComponent}
                noItemsText = "No cases."
            />
            </Container>
        </>
    )
}

export default CaseList