// api.ts
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

// Axios instance
const axiosInstance = axios.create({
  baseURL: 'http://51.21.231.42:3000/api/', // Change this
  headers: {
    'Content-Type': 'application/json',
  },
});

// Optional: define a custom error type
interface ApiError {
  status?: number;
  message: string;
}

// Generic GET request
export function getData<T = any>(url: string, params: Record<string, any> = {}): Promise<T> {
  return new Promise((resolve, reject) => {
    axiosInstance
      .get<T>(url, { params })
      .then((response: AxiosResponse<T>) => resolve(response.data))
      .catch(error => reject(handleError(error)));
  });
}

// Generic POST request
export function postData<T = any>(url: string, data: any): Promise<T> {
  return new Promise((resolve, reject) => {
    axiosInstance
      .post<T>(url, data)
      .then((response: AxiosResponse<T>) => resolve(response.data))
      .catch(error => reject(handleError(error)));
  });
}

// Generic PATCH request
export function patchData<T = any>(url: string, data: any): Promise<T> {
  return new Promise((resolve, reject) => {
    axiosInstance
      .patch<T>(url, data)
      .then((response: AxiosResponse<T>) => resolve(response.data))
      .catch(error => reject(handleError(error)));
  });
}

// Generic DELETE request
export function deleteData<T = any>(url: string): Promise<T> {
  return new Promise((resolve, reject) => {
    axiosInstance
      .delete<T>(url)
      .then((response: AxiosResponse<T>) => resolve(response.data))
      .catch(error => reject(handleError(error)));
  });
}

// Error handler
function handleError(error: any): ApiError {
  if (error.response) {
    return {
      status: error.response.status,
      message: error.response.data?.message || 'Server Error',
    };
  } else if (error.request) {
    return { message: 'No response received from server' };
  } else {
    return { message: error.message };
  }
}
