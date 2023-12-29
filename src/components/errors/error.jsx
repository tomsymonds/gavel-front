import { useState, useEffect } from 'react'
//import { Snackbar, Alert } from '@mui/material'
import useErrors from './useErrors'

const Error = (props) => {
    // const { hide, customError } = props 
    const errorController = useErrors()
    const { message, onClose, showError } = errorController
    const [open, setOpen] = useState(true);
    const error = { message }
    //const error = customError ? customError : {message, exists}

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpen(false);
        onclose && onClose()
    };

    if(!showError()) return null

    //if(!error.exists || hide) return null

    return (
        <Snackbar
            open={open} autoHideDuration={6000} onClose={handleClose}
             anchorOrigin = {{vertical: 'bottom', horizontal: 'center'}}
        >
            <Alert 
                severity="error"
                onClose={handleClose} 
                sx={{ width: '100%' }}
            >
                {error.message && error.message}
            </Alert>
        </Snackbar>
    )

}

export default Error