import { useRecoilValue } from "recoil"
import { currentView } from "src/settings/atoms"
import ViewHeading from '../core/ViewHeading'
import ListBase from '../core/ListBase'
import Defendant from '../defendants/defendant'
import CrimeTagList from "../events/CrimeTagList"
import CourtEvent from "../events/CourtEvent"
import { Container, Box } from '@chakra-ui/react'
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
    const {title} = response.data.attributes
    const defendants = response.data.attributes.defendants.data
    const offence_tags = response.data.attributes.offence_tags.data
    const events = response.data.attributes.date_sorted_events.data

    const getDefendantListItemComponent = (props) => {
        return <Defendant {...props} />
    }

    const getEventListItemComponent = (event) => {
        return <CourtEvent {...event.attributes} />
    }

    return (
        <Container>
            <Box ml = "-15px">
                <ViewHeading 
                    text = {title}
                    textSize = "lg"
                    icon = {PiGavel}
                    iconSize = "2em"
                />
            </Box>
            <Box mt = "5px" mb = "30px" ml = "45px">
            <CrimeTagList tags = {offence_tags} />
            </Box>
            <Box mb = '20px'>
                <ViewHeading
                    textSize = 'md'
                    text = {pluralize("Defendant", defendants)}
                    icon = {IoPersonOutline}
                    iconSize = "1.5em"
                />
                <Box ml = "23px">
                    <ListBase
                        listItems = {defendants}
                        listClickHandler = {() => {}}
                        getListItemComponent = {getDefendantListItemComponent}
                        noItemsText = "No defendants"
                    />
                </Box>
            </Box>
            <Box mb = '20px'>
                <ViewHeading
                    textSize = 'md'
                    text = {pluralize("Event", events)}
                    icon = {RiCalendarEventLine}
                    iconSize = "1.5em"
                />
                <Box ml = "33px">
                    <ListBase
                        isDateGroup = {true}
                        listItems = {events}
                        listClickHandler = {() => {}}
                        groupClickHandler = {() => {}}
                        getListItemComponent = {getEventListItemComponent}
                        noItemsText = "No events"
                    />
                </Box>
            </Box>
        </Container>
    )

}

export default CaseDetail