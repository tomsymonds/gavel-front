import { useState } from 'react'
import { appSettings } from 'src/settings/appSettings'
import { Box } from '@chakra-ui/react'


const Uploader = () => {

    const [selectedFile, setSelectedFile] = useState()
    const [uploadReport, setUploadReport] = useState()


    const handleFormSubmit = () => {
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
         })
    }

    return (
        <Box>
            {!uploadReport ? 
                <>
                    <input 
                        type="file" 
                        onChange={(e) => setSelectedFile(e.target.files[0])}
                    />
                    <button onClick = {() => handleFormSubmit()}>Upload</button>
                </>
                :
                <>
                    <p>
                        <b>uploaded records </b>{uploadReport.rows_imported_count}
                    </p>
                    <p>
                        <b>new records </b>{uploadReport.created_records_count}
                    </p>
                </>
            }
        </Box>

    )
}

export default Uploader
