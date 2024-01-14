
import useCases from "./useCases"
import useView from "src/library/useView"
import Case from "./Case"
import ListBase from "../core/ListBase"
import Uploader from "../uploader/Uploader"
import ViewHeading from "../core/ViewHeading"
import PageMoreButton from '../core/PageMoreButton'
import { Container, Icon, Box } from '@chakra-ui/react'
import { PiGavel } from 'react-icons/pi'

const CaseList = () => {
    
    const casesResponse = useCases()
    const { pages, pageParams, fetchNextPage, hasNextPage, isSuccess } = casesResponse
    const viewHistory = useView()   
    if(!isSuccess) return "Loading"

    const getIcon = () => <Icon as = {PiGavel} boxSize = '0.75em'/>
    const getListItemComponent = (caseObj) => <Case id = {caseObj.id} {...caseObj.attributes} />
    const handleListClick = (selectedCase) => {
        viewHistory.moveForward({
            name: "case", 
            modelType: "case",
            id: selectedCase.id,
            itemTitle: selectedCase.attributes.title
        })
    }

    return (
            <Container p = {4}>
                <Box mt = '5px' mb = '30px'>
                    <Uploader />
                </Box>
                <ViewHeading 
                    icon = {PiGavel}
                    text = "Cases"
                    iconSize = "2em"
                    textSize = "3xl"
                />     
                <Box>
                    <ListBase
                        isPageGroup = {true}
                        listItems = {pages}
                        listClickHandler = {handleListClick}
                        getIcon = {getIcon}
                        getListItemComponent = {getListItemComponent}
                        noItemsText = "No cases."
                        hasClickableItems = {true}
                    />
                </Box>
                {hasNextPage &&
                    <PageMoreButton
                        pageParams = {pageParams}
                        fetchNextPage = {fetchNextPage}
                    />
                }
            </Container>
    )
}   

export default CaseList