import { List, ListItem, Text } from '@chakra-ui/react'
import PropTypes from 'prop-types'
import dateGroup from 'src/library/dateGroup'
import dateHandler  from '../../library/dateHandler'

//Generic list component allowing simple or grouped lists
const ListBase = (props) => {
    //Prop comments see PropTypes
    const { isDateGroup, isPageGroup, listItems, getListItemComponent, listClickHandler, groupClickHandler, noItemsText, hasClickableItems } = props

    //Return noItemsText for empty list
    if(!listItems || listItems.length === 0) return <Text>{noItemsText}</Text>

    //Check for presence of group
    const isGrouped = isDateGroup || isPageGroup

    //Returns either an array of items for ungrouped lists 
    //or for grouped lists an object containing data (the array of items) 
    //and groupComponentProvider - a function which returns the component to render
    //each group heading.
    const formattedListItems = () => {
        if(isDateGroup) return {
            data: dateGroupedListItems(),
            groupComponentProvider: dateGroupComponent
        }
        if(isPageGroup) return {
            data: listItems,
            groupComponentProvider: pageGroupComponent
        }
        return listItems
    }

    //Returns a list grouped by date
    const dateGroupedListItems = () => {
        return dateGroup(listItems)
    }

    //Returns component to render a group heading for dates
    //Fixed to render in 'friendlyDay' format.
    const dateGroupComponent = (groupKey) => {
        return <Text onClick = {(groupKey) => groupClickHandler(groupKey)}>{dateHandler(groupKey, 'friendlyDays')}</Text>
    }

    //Returns an invisible component to contain a page group
    const pageGroupComponent = () => {
        return <></>
    }

    //Returns a list item
    const getListItem = (l) => {
        return (
            <ListItem 
                key = {l.id} 
                onClick = {() => listClickHandler(l)} 
                _hover={hasClickableItems && { backgroundColor: '#EBF8FF', cursor: 'pointer' }
                }
            >
                {getListItemComponent(l)}
            </ListItem>
        )
    }

    //Returns an ungrouped list
    const ungroupedList = () => {
        return (        
            <List>  
                { 
                    listItems.map((l) => {
                        return getListItem(l)
                    }) 
                }
            </List>
        )
    }

    //Returns a grouped list. This is a list of group headers and item lists
    const groupedList = () => {
        const listItems = formattedListItems()
        return(
            <List>
                {
                    Object.keys(listItems.data).map((groupKey) =>{
                        return (
                            <ListItem key = {groupKey}>
                                {listItems.groupComponentProvider(groupKey)}
                                <List>
                                    {
                                        listItems.data[groupKey].map((l) => {
                                            return (
                                                getListItem(l)
                                            )
                                        })
                                    }
                                </List>
                            </ListItem>
                        )

                    })
                }
            </List>
        )
    }

    //Top level return -- return the list type based on isGrouped
    return (
        <>
            {
                isGrouped ? groupedList() : ungroupedList()
            }
        </>        
    )
}

export default ListBase

ListBase.propTypes = {
    //If true show list with date groups
    isDateGroup: PropTypes.bool,
    //If true show list with page groups
    isPageGroup: PropTypes.bool,
    //Array of data items to form the list contents
    listItems: PropTypes.array,
    //ListClickHandler - a function to handle clicks on each item
    listClickHandler: PropTypes.func,
    //Function to handle clicks on a group header
    groupClickHandler: PropTypes.func,
    //Function returning icon component
    getIcon: PropTypes.func,
    //String containing text to show in empty list
    noItemsText: PropTypes.string,
    //Function returning each list item component
    getListItemComponent: PropTypes.func,
    //If true, the items in the list can be clicked
    hasClickableItems: PropTypes.bool
};
