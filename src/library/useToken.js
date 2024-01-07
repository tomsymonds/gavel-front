import { useRecoilState } from "recoil"
import { apiToken } from "src/settings/atoms"
import { useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react';

const useToken = () => {

    const [token, setToken] = useRecoilState(apiToken)

    const clearToken = () => setToken(null)

    const { getAccessTokenSilently } = useAuth0()

    useEffect(() => {
        const fetchToken = async () => {
            await getAccessTokenSilently().then((response) => {
                setToken(response)
            })
        }
        if(!token) fetchToken()
        }, [getAccessTokenSilently, setToken, token])

    const current = () => token

    const hasToken = () => token !== null

    return {
        current,
        clearToken,
        hasToken
    }

}

export default useToken