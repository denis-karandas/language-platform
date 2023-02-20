import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api',
});

axios.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error),
);

export default api;
