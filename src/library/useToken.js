import { useRecoilState } from "recoil"
import { apiToken } from "src/settings/atoms"
import { useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios'

const useToken = () => {

    const [token, setToken] = useRecoilState(apiToken)

    const clearToken = () => setToken(null)

    const { getAccessTokenSilently } = useAuth0()

    useEffect(() => {
        const fetchToken = async () => {
            await getAccessTokenSilently().then((response) => {
                if(response) console.log("GOT TOKEN")
                const newToken = response
                console.log('setting token', newToken)
                setToken(newToken)
                axios.interceptors.request.use(
                    (config) => {
                        console.log("adding token to axios request")
                      // Modify the request configuration or add headers
                      config.headers.Authorization = `Bearer ${newToken}`;
                      return config;
                    },
                    (error) => {
                      // Handle request errors
                      return Promise.reject(error);
                    }
                );
            })
        }
        if(!token) fetchToken()
        }, [getAccessTokenSilently, setToken, token])

    const current = () => {
        console.log('token in tokenProvider', token)
        return token
    }
    const hasToken = () => token !== null

    return {
        token,
        clearToken,
        hasToken
    }

}

export default useToken