import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Text } from '@chakra-ui/react'
import useView from '../../library/useView'
import './FixedNavBar.css'; // Import your CSS file for styling

const ItemNavBar = () => {

    const views = useView()
    const currentIndex = views.currentIndex
    const breadcrumbClickHandler = (newIndex) => {
        views.moveToIndex(newIndex)
    }
    return (
        <div className='fixed-nav-bar'>
            <Box p = '15px' ml = '15px'>
                <Breadcrumb separator = " > ">
                    {views.history.map((view, index) => {
                        return (
                            <BreadcrumbItem 
                                key = {index} 
                                isCurrentPage = {index === currentIndex}
                            >
                                <BreadcrumbLink 
                                    onClick = {() => breadcrumbClickHandler(index)}
                                >
                                    <Text fontSize = "lg">
                                        {view.itemTitle}
                                    </Text>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                        )
                    })}
                </Breadcrumb>
            </Box>
        </div>
    )

}

export default ItemNavBar