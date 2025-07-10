import axios from 'axios';

const API_URL = import.meta.env.VITE_URL_API;

const apiService = axios.create({
  baseURL: API_URL,
  headers:{
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }

})

apiService.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiService;