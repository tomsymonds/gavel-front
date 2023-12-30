import { Container, Heading, List, ListItem } from '@chakra-ui/react'
import PropTypes from 'prop-types'

const ListBase = (props) => {

    const { listItems, getListItemComponent, listClickHandler, title, getIcon, noItemsText } = props

    return (
        <>
            <Container p = {4}>
            <Heading size='xl'>
                {getIcon()}
                {title}
            </Heading>
            </Container>
            {
                listItems.length > 0 ? 
                    <List>  
                        { 
                            listItems.map((l) => {
                                return (
                                    <ListItem key = {l.id} onClick = {() => listClickHandler(l)}>
                                        {getListItemComponent(l)}
                                    </ListItem>
                                )
                            }) 
                        }
                    </List>
                : {noItemsText}
            }
        </>        
    )
}

export default ListBase

ListBase.propTypes = {
    //Array of data items to form the list contents
    listItems: PropTypes.array,
    //ListClickHandler - a function to handle clicks on each item
    listClickHandler: PropTypes.func,
    //Title of the list
    title: PropTypes.string,
    //Function returning icon component
    getIcon: PropTypes.func,
    //String containing text to show in empty list
    noItemsText: PropTypes.string,
    //Function returning each list item component
    getListItemComponent: PropTypes.func
};
