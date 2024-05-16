import axios from 'axios';

axios.interceptors.response.use((config) => {
  config.headers.Authorization = localStorage.getItem('token')
  config.headers['Content-Type'] = "application/json"
  config.headers.Accept = "application/json;version=v1_web"
    return config
  }, e => Promise.reject(e))

export default axios;