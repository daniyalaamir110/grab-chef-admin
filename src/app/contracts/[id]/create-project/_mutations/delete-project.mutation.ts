import api from '@/common/api';
import { URL } from '@/common/api-base-urls';
import { CreateBasicInfoResponse } from '@/common/types/interfaces/project/project';
import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { toast } from 'sonner';

export const useDeleteProject = (
  contractId: string,
  projectId: string,
): UseMutationResult<
  CreateBasicInfoResponse,
  AxiosError<{ message: string }>
> => {
  const deleteProject = async (): Promise<CreateBasicInfoResponse> => {
    const response = await api.delete(
      URL.DELETE_PROJECT(contractId, projectId),
    );
    return response.data;
  };
  return useMutation({
    mutationFn: deleteProject,
    mutationKey: ['delete-project'],
    onSuccess() {
      toast.success('Project deleted successfully');
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
