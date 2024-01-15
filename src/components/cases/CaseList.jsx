
import useCases from "./useCases"
import useView from "src/library/useView"
import { useIsFetching } from "@tanstack/react-query"
import Case from "./Case"
import ListBase from "../core/ListBase"
import Uploader from "../uploader/Uploader"
import ViewHeading from "../core/ViewHeading"
import PageMoreButton from '../core/PageMoreButton'
import { Container, Icon, Box } from '@chakra-ui/react'
import { PiGavel } from 'react-icons/pi'

const CaseList = () => {
    
    const casesResponse = useCases()
    const { pages, fetchNextPage } = casesResponse
    const viewHistory = useView()   
    //Get the current fetching status for cases to show loading indicators
    const isFetchingCases = useIsFetching({ queryKey: [['cases']] })

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
                    <PageMoreButton
                        fetchNextPage = {fetchNextPage}
                        //Show loading if there are cases being fetched
                        showLoading = {isFetchingCases > 0}
                    />
            </Container>
    )
}   

export default CaseList