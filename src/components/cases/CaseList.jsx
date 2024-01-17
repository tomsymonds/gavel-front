
import useCases from "./useCases"
import useView from "src/library/useView"
import { useIsFetching } from "@tanstack/react-query"
import Case from "./Case"
import ListBase from "../core/ListBase"
import ViewHeading from "../core/ViewHeading"
import PageMoreButton from '../core/PageMoreButton'
import { Icon, Box, Spinner } from '@chakra-ui/react'
import { PiGavel } from 'react-icons/pi'

const CaseList = () => {
    
    const casesResponse = useCases()
    const { pages, fetchNextPage, hasNextPage } = casesResponse
    const viewHistory = useView()   
    //Get the current fetching status for cases to show loading indicators
    const isFetchingCases = useIsFetching({ queryKey: [['cases']] }) > 0

    const getIcon = () => <Icon as = {PiGavel} boxSize = '0.75em'/>
    const getListItemComponent = (caseObj) => <Case id = {caseObj.id} {...caseObj.attributes} />
    const handleListClick = (selectedCase) => {
        viewHistory.moveForward({
            name: "case", 
            modelType: "case",
            id: selectedCase.id,
            itemTitle: selectedCase.attributes.title,
            scroll: 0
        })
    }

    return (
            <Box>
                <ViewHeading 
                    icon = {PiGavel}
                    text = "Cases"
                    iconSize = "2em"
                    textSize = "3xl"
                />          
                {pages &&
                    <Box>
                        <ListBase
                            isPageGroup = {true}
                            listItems = {pages}
                            listClickHandler = {handleListClick}
                            getIcon = {getIcon}
                            getListItemComponent = {getListItemComponent}
                            noItemsText = "No cases."
                            isFetching = {isFetchingCases > 0}
                            hasClickableItems = {true}
                        />
                    </Box>
                }
                <Box p = '20px'>
                    {isFetchingCases ?
                        <Spinner />
                        :
                        hasNextPage && 
                            <PageMoreButton
                                fetchNextPage = {fetchNextPage}
                            />
                        }
                </Box>
            </Box>
    )
}   

export default CaseList