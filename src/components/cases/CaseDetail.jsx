import { useRecoilValue } from "recoil"
import { currentView } from "src/settings/atoms"
import ViewHeading from '../core/ViewHeading'
import ListBase from '../core/ListBase'
import Defendant from '../defendants/defendant'
import { Container, Box, Heading, Icon } from '@chakra-ui/react'
import { PiGavel } from 'react-icons/pi'
import { IoPersonOutline } from "react-icons/io5"
import useCase from "./useCase"
import pluralize from "src/library/pluralise"

const CaseDetail = (props) => {
    const view = useRecoilValue(currentView)
    const caseID = view.id
    const caseController = useCase(caseID)

    const response = caseController.response.data
    if(!response) return "Loading"
    const {title} = response.data.attributes
    const defendants = response.data.attributes.defendants.data
    console.log(response)

    const getDefendantIcon = () => {
        return <Icon as = {IoPersonOutline} boxSize = '0.75em'/>
    }

    const getDefendantListItemComponent = (props) => {
        return <Defendant {...props} />
    }

    return (
        <Container p = {2}>
            <ViewHeading 
                text = {title}
                icon = {PiGavel}
            />
            <Box>
                <Heading size = 'md' >
                    <Icon as = {IoPersonOutline} boxSize = '0.80em' />
                    {pluralize("Defendant", defendants)}
                </Heading>
                <ListBase
                    listItems = {defendants}
                    listClickHandler = {null}
                    getListItemComponent = {getDefendantListItemComponent}
                    noItemsText = "No defendants"
                />
            </Box>
        </Container>
    )

}

export default CaseDetail