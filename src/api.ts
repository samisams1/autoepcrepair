import axios, { AxiosInstance } from 'axios';

const api: AxiosInstance = axios.create({
 // baseURL: 'http://localhost:4000',
  baseURL:'https://test2.nilesoftdemo.com'
});

export default api;