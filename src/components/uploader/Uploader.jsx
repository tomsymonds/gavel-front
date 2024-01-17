import { useState } from 'react'
import { appSettings } from 'src/settings/appSettings'
import { Box, Button, Spinner, Text, Center, Card } from '@chakra-ui/react'
import useView from 'src/library/useView'


const Uploader = () => {

    const [selectedFile, setSelectedFile] = useState()
    const [uploadReport, setUploadReport] = useState()
    const [spinner, setSpinner] = useState()
    const viewHistory = useView()

    const handleFormSubmit = () => {
        setSpinner(true)
        const postURL = appSettings.api.domain + "/add_update"
        let formData = new FormData()
        formData.append("file", selectedFile);
        fetch(postURL, {
            method: "POST",
            body: formData
         })
         .then((res) => {
            return res.json()
         })
         .then((data) => {
            console.log(data)
            setUploadReport(data)
            setSpinner(false)
         })
    }

    const handleUploadDone = () => {
        viewHistory.replaceHistoryWith({
            name: "cases", 
            itemTitle: "Cases"
        })
    }

    return (
        <Center w = "100vw">
        <Card p = "50px" w = "30vw">
            {!uploadReport ? 
                spinner ? 
                    <Box>
                        <Text fontSize = 'xl'>Uploading</Text>
                        <Box p = '20px'><Spinner size = 'xl'/></Box>
                    </Box>
                    :
                    <Box>
                        <Box>
                            <input 
                                type="file" 
                                onChange={(e) => setSelectedFile(e.target.files[0])}
                            />
                        </Box>
                        <Box mt = '40px'>
                            <Button onClick = {() => handleFormSubmit()}>Upload</Button>
                        </Box>
                    </Box>
                    :
                    <Box p = '20px'>
                        <Box>
                            <Text fontSize = 'xl'>Upload Finished.</Text>
                            <b>uploaded data rows </b>{uploadReport.rows_imported_count}
                        </Box>
                        <Box>
                            <b>new records </b>{uploadReport.created_records_count}
                        </Box>
                        <Box p ='20px'>
                            <Button 
                                onClick = {() => handleUploadDone()}
                                _hover={{cursor: 'pointer'}}
                            >
                                Done
                            </Button>
                        </Box>
                    </Box>
            }
        </Card>
        </Center>
    )
}

export default Uploader
