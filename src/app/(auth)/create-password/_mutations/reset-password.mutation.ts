import api from '@/common/api';
import { URL } from '@/common/api-base-urls';
import {
  ResetPasswordPayload,
  ResetPasswordResponse,
} from '@/common/types/interfaces/services/auth/auth.interface';
import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { toast } from 'sonner';

export const useResetPassword = (): UseMutationResult<
  ResetPasswordResponse,
  AxiosError<{ message: string }>,
  ResetPasswordPayload
> => {
  const resetPassword = async (
    payload: ResetPasswordPayload,
  ): Promise<ResetPasswordResponse> => {
    const response = await api.post(URL.RESET_PASSWORD, payload);
    return response.data;
  };
  return useMutation({
    mutationFn: resetPassword,
    mutationKey: ['reset-password'],
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
