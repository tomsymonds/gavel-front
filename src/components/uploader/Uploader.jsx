const Uploader = () => {

    const setSelectedFile = () => {

    }

    const handleFormSubmit = () => {

    }

    return (
        <form onSubmit={handleFormSubmit}>
            <input 
                type="file" 
                onChange={(e) => setSelectedFile(e.target.files[0])}
            />
            <button>Upload</button>
        </form>
    )
}

export default Uploader