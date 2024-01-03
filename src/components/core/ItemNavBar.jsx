import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Text } from '@chakra-ui/react'
import useView from '../../library/useView'

const ItemNavBar = () => {

    const views = useView()
    const currentIndex = views.currentIndex
    const breadcrumbClickHandler = (newIndex) => {
        views.moveToIndex(newIndex)
    }
    return (
        <Box mb = '25px'>
            <Breadcrumb separator = " > ">
                {views.history().map((view, index) => {
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
    )

}

export default ItemNavBar