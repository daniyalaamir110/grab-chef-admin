import axios, { AxiosError } from 'axios';
import { clsx, type ClassValue } from 'clsx';
import { getCookie } from 'cookies-next/client';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const fetcher = () => {
  const token = getCookie('accessToken');

  const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return axiosInstance;
};

export const getErrorMessage = (error: AxiosError) => {
  const apiResponse = error?.response?.data as unknown as { message?: string };
  const message = apiResponse?.message || error?.message;

  return message;
};
