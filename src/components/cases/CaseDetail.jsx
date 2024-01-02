import { useRecoilValue } from "recoil"
import { currentView } from "src/settings/atoms"
import ViewHeading from '../core/ViewHeading'
import ListBase from '../core/ListBase'
import Defendant from '../defendants/defendant'
import CrimeTagList from "../events/CrimeTagList"
import CourtEvent from "../events/CourtEvent"
import { Container, Box, Heading, Icon } from '@chakra-ui/react'
import { PiGavel } from 'react-icons/pi'
import { IoPersonOutline } from "react-icons/io5"
import { RiCalendarEventLine } from "react-icons/ri";
import useCase from "./useCase"
import pluralize from "src/library/pluralise"

const CaseDetail = () => {
    const view = useRecoilValue(currentView)
    const caseID = view.id
    const caseController = useCase(caseID)

    const response = caseController.response.data
    if(!response) return "Loading"
    console.log(response)
    const {title} = response.data.attributes
    const defendants = response.data.attributes.defendants.data
    const offence_tags = response.data.attributes.offence_tags.data
    const events = response.data.attributes.date_sorted_events.data
    console.log(events)

    const getDefendantListItemComponent = (props) => {
        return <Defendant {...props} />
    }

    const getEventListItemComponent = (event) => {
        return <CourtEvent {...event.attributes} />
    }

    return (
        <Container p = {2}>
            <ViewHeading 
                text = {title}
                icon = {PiGavel}
            />
            <CrimeTagList tags = {offence_tags} />
            <Box>
                <Heading size = 'md' >
                    <Icon as = {IoPersonOutline} boxSize = '0.80em' />
                    {pluralize("Defendant", defendants)}
                </Heading>
                <ListBase
                    listItems = {defendants}
                    listClickHandler = {() => {}}
                    getListItemComponent = {getDefendantListItemComponent}
                    noItemsText = "No defendants"
                />
            </Box>
            <Box>
                <Heading size = 'md' >
                    <Icon as = {RiCalendarEventLine} boxSize = '0.80em' />
                    {pluralize("Event", events)}
                </Heading>
                <ListBase
                    isDateGroup = {true}
                    listItems = {events}
                    listClickHandler = {() => {}}
                    groupClickHandler = {() => {}}
                    getListItemComponent = {getEventListItemComponent}
                    noItemsText = "No events"
                />
            </Box>
        </Container>
    )

}

export default CaseDetail