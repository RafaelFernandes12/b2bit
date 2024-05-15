import axios from 'axios';

axios.interceptors.request.use((config) => {
    config.headers.Authorization = localStorage.getItem('token')
    return config
  }, e => Promise.reject(e))

export default axios;