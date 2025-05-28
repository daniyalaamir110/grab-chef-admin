import axios from 'axios';
import { getCookie } from 'cookies-next';

// Safely cast the cookies object
const token = getCookie('accessToken');
const accessToken = token ? `Bearer ${token}` : '';

// Define API base URL
const baseURL = process.env.NEXT_PUBLIC_API_URL as string;

// Define default headers
const headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
  Authorization: accessToken,
  'ngrok-skip-browser-warning': '69420',
};

// Create Axios instance
const api = axios.create({
  baseURL,
  headers,
});

// Add a request interceptor
api.interceptors.request.use(
  config => {
    const token = getCookie('accessToken');
    const accessToken = token ? `Bearer ${token}` : '';

    if (accessToken) {
      config.headers.Authorization = accessToken;
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

// Export the Axios instance
export default api;
