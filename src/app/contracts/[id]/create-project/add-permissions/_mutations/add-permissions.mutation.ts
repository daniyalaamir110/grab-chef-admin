import api from '@/common/api';
import { URL } from '@/common/api-base-urls';
import { PermissionsConfig } from '@/common/types/interfaces/project/permission';
import { CreateBasicInfoResponse } from '@/common/types/interfaces/project/project';
import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { toast } from 'sonner';

export const useAddPermissions = (
  contractId: string,
  projectId?: string,
): UseMutationResult<
  CreateBasicInfoResponse,
  AxiosError<{ message: string }>,
  PermissionsConfig
> => {
  const addPermissions = async (
    payload: PermissionsConfig,
  ): Promise<CreateBasicInfoResponse> => {
    const response = await api.post(
      URL.CREATE_PERMISSION_GROUPS(contractId),
      payload,
      {
        params: {
          projectId,
        },
      },
    );
    return response.data;
  };
  return useMutation({
    mutationFn: addPermissions,
    mutationKey: ['add-permission'],
    onSuccess() {
      toast.success('Permissions created successfully');
    },
    onError(error) {
      console.log(error);
      toast.error(error.response?.data.message, {
        style: {
          borderColor: '#d96a46',
          color: '#d96a46',
        },
      });
    },
  });
};
