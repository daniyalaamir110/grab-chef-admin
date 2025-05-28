import api from '@/common/api';
import { URL } from '@/common/api-base-urls';
import { ForgotPasswordResponse } from '@/common/types/interfaces/services/auth/auth.interface';
import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { toast } from 'sonner';
import { ForgotPasswordPayload } from '../_schemas/forgot-password.schema';

export const useForgotPassword = (): UseMutationResult<
  ForgotPasswordResponse,
  AxiosError<{ message: string }>,
  ForgotPasswordPayload
> => {
  const forgotPassword = async (
    payload: ForgotPasswordPayload,
  ): Promise<ForgotPasswordResponse> => {
    const response = await api.post(URL.FORGOT_PASSWORD, payload);
    return response.data;
  };
  return useMutation({
    mutationFn: forgotPassword,
    mutationKey: ['forgot-password'],
    onSuccess(data) {
      toast.success(data.message);
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
