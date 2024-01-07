import axios from 'axios'

const axiosClientProvider = (token) => {
  return axios.create(
    { 
        withCredentials: true,
        params: {},
        Authorization: `Bearer ${token}`
    }
  )
}

export default axiosClientProvider
