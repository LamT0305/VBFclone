import axios from 'axios';
import {session} from '.';

const ENDPOINT = 'https://d31mp7dmwh32b5.cloudfront.net/api';

const axiosInstance = axios.create({
  baseURL: ENDPOINT,
  headers: {
    'content-type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  async response => {
    const token = await session.getData('jwt');
    response.headers.authorization = token ? `bearer ${token}` : '';
    return response;
  },
  error => Promise.reject(error?.response),
);

axios.interceptors.request.use(
  response => response,
  error => Promise.reject(error),
);

export default axiosInstance;
