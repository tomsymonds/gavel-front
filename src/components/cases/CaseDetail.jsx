import ViewHeading from '../core/ViewHeading'
import ListBase from '../core/ListBase'
import Defendant from '../defendants/defendant'
import CrimeTagList from "../events/CrimeTagList"
import CourtEvent from "../events/CourtEvent"
import { Box, Spinner } from '@chakra-ui/react'
import { PiGavel } from 'react-icons/pi'
import { IoPersonOutline } from "react-icons/io5"
import { RiCalendarEventLine } from "react-icons/ri";
import useCase from "./useCase"
import useView from "../../library/useView"
import pluralize from "src/library/pluralise"

const CaseDetail = () => {
    const view = useView()
    const caseID = view.current().id
    const caseController = useCase(caseID)

    const response = caseController
    const { data, isSuccess } = response
    if(!isSuccess) {
        return <Box><Spinner /></Box>
    }
    const {title} = data.attributes
    const defendants = data.attributes.defendants.data
    const offence_tags = data.attributes.offence_tags.data
    const events = data.attributes.date_sorted_events.data
    
    const getDefendantListItemComponent = (props) => {
        return <Defendant {...props} />
    }

    const getEventListItemComponent = (event) => {
        return <CourtEvent {...event.attributes} />
    }

    return (
        <Box>
            <Box>
                <ViewHeading 
                    text = {title}
                    textSize = "3xl"
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
                <Box>
                    <ListBase
                        listItems = {defendants}
                        listClickHandler = {() => {}}
                        getListItemComponent = {getDefendantListItemComponent}
                        noItemsText = "No defendants"
                        hasClickableItems = {false}
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
            </Box>
            <Box>
                <ListBase
                    isDateGroup = {true}
                    listItems = {events}
                    listClickHandler = {() => {}}
                    groupClickHandler = {() => {}}
                    getListItemComponent = {getEventListItemComponent}
                    noItemsText = "No events"
                    hasClickableItems = {false}
                />
            </Box>

        </Box>
    )

}

export default CaseDetail