import axios from 'axios';

axios.interceptors.response.use((config) => {
    config.headers.Authorization = localStorage.getItem('token')
    return config
  }, e => Promise.reject(e))

export default axios;