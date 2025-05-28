import api from '@/common/api';
import { URL } from '@/common/api-base-urls';
import {
  LoginPayload,
  LoginResponse,
} from '@/common/types/interfaces/services/auth/auth.interface';
import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { setCookie } from 'cookies-next';
import { toast } from 'sonner';

export const useLogin = (): UseMutationResult<
  LoginResponse,
  AxiosError<{ message: string }>,
  LoginPayload
> => {
  const login = async (payload: LoginPayload): Promise<LoginResponse> => {
    const response = await api.post(URL.LOGIN, payload);
    return response.data;
  };
  return useMutation({
    mutationFn: login,
    mutationKey: ['login'],
    onSuccess(data) {
      toast.success('Logged in successfully');
      setCookie('accessToken', data.accessToken);
    },
    onError(error) {
      toast.error(error.response?.data.message, {
        style: {
          borderColor: '#d96a46',
          color: '#d96a46',
        },
      });
    },
  });
};
