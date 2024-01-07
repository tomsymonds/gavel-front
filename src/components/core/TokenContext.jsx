import { useEffect, createContext, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import PropTypes from 'prop-types'

export const CurrentTokenContext = createContext()

export const TokenContext = ({children}) => {

    const [token, setToken] = useState(null)
    const { getAccessTokenSilently } = useAuth0()

    useEffect(() => {
        const fetchToken = async () => {
            await getAccessTokenSilently().then((response) => {
                console.log('TOKEN RESPONSE', response)
                const newToken = response
                setToken(newToken)
            })
          }
          fetchToken()
        }, [getAccessTokenSilently])

    return (
        <CurrentTokenContext.Provider value = {token}>
            {children}
        </CurrentTokenContext.Provider>
    )
}

TokenContext.propTypes = {
    children: PropTypes.object
}