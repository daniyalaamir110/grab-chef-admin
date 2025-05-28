import api from '@/common/api';
import { URL } from '@/common/api-base-urls';
import {
  VerifyOtpPayload,
  VerifyOtpResponse,
} from '@/common/types/interfaces/services/auth/auth.interface';
import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { toast } from 'sonner';

export const useVerifyOtp = (): UseMutationResult<
  VerifyOtpResponse,
  AxiosError<{ message: string }>,
  VerifyOtpPayload
> => {
  const verifyOtp = async (
    payload: VerifyOtpPayload,
  ): Promise<VerifyOtpResponse> => {
    const response = await api.post(URL.VERIFY_OTP, payload);
    return response.data;
  };
  return useMutation({
    mutationFn: verifyOtp,
    mutationKey: ['verify-otp'],
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
