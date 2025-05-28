import api from '@/common/api';
import { URL } from '@/common/api-base-urls';
import { FileUploadResponse } from '@/common/types/interfaces/common';
import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { toast } from 'sonner';

export const useUploadFile = (): UseMutationResult<
  FileUploadResponse,
  AxiosError<{ message: string }>,
  FormData
> => {
  const uploadFile = async (file: FormData) => {
    const response = await api.postForm(URL.UPLOAD_FILE, file);
    return response.data;
  };
  return useMutation({
    mutationFn: uploadFile,
    mutationKey: ['upload-file'],
    onSuccess(data) {
      console.log(data);
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
