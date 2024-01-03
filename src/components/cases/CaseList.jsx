import useCases from "./useCases"
import useView from "src/library/useView"
import Case from "./Case"
import ListBase from "../core/ListBase"
import Uploader from "../uploader/Uploader"
import ViewHeading from "../core/ViewHeading"
import { Container, Icon, Box } from '@chakra-ui/react'
import { PiGavel } from 'react-icons/pi'

const CaseList = () => {
    const caseController = useCases()
    const response = caseController.response.data
    const viewHistory = useView()
    if(!response) return "Loading"

    const cases = response.data

    const getIcon = () => <Icon as = {PiGavel} boxSize = '0.75em'/>
    const getListItemComponent = (caseObj) => <Case id = {caseObj.id} {...caseObj.attributes} />
    const handleListClick = (selectedCase) => {
        viewHistory.addView({
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
                    iconSize = "2em"
                    textSize = "3xl"
                />     
                <Box mt = '20px'>
                    <ListBase
                        listItems = {cases}
                        listClickHandler = {handleListClick}
                        getIcon = {getIcon}
                        getListItemComponent = {getListItemComponent}
                        noItemsText = "No cases."
                        hasClickableItems = {true}
                    />
                </Box>
                <Box mt = "20px">
                    <Uploader />
                </Box>
            </Container>
        </>
    )
}

export default CaseList