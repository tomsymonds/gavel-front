import { useRecoilState } from "recoil"
import { apiToken } from "src/settings/atoms"
import { useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios'

//Handles the process of obtaining and using API tokens from Auth0.
//These are used to authenticate the front end client when accessing the API
const useToken = () => {

    const [token, setToken] = useRecoilState(apiToken)

    const clearToken = () => setToken(null)

    //Get a valid API token from Auth0
    const { getAccessTokenSilently } = useAuth0()

    useEffect(() => {
        //Fetch a token
        const fetchToken = async () => {
            await getAccessTokenSilently().then((response) => {
                const newToken = response
                //Store the token in app state
                setToken(newToken)
                //Adds the token to outgoing requests sent by Axios
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