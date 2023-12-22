import { useState } from 'react'
import { appSettings } from 'src/settings/appSettings'


const Uploader = () => {

    const [selectedFile, setSelectedFile] = useState()


    const handleFormSubmit = () => {
        const postURL = appSettings.api.domain + "/add_update"
        let formData = new FormData()
        formData.append("file", selectedFile);
        fetch(postURL, {
            method: "POST",
            body: formData
         })
         .then(res => res.json())
         //.then(data => rest of frontend logic);
    }

    return (
        <>
            <input 
                type="file" 
                onChange={(e) => setSelectedFile(e.target.files[0])}
            />
            <button onClick = {() => handleFormSubmit()}>Upload</button>
        </>
    )
}

export default Uploader