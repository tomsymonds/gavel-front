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
                const newToken = response
                setToken(newToken)
                axios.interceptors.request.use(
                    (config) => {
                      // Modify the request configuration to add header with auth token
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

    const hasToken = () => token !== null

    return {
        token,
        clearToken,
        hasToken
    }

}

export default useToken