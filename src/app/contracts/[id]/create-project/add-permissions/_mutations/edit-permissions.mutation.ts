import api from '@/common/api';
import { URL } from '@/common/api-base-urls';
import { PermissionsConfig } from '@/common/types/interfaces/project/permission';
import { CreateBasicInfoResponse } from '@/common/types/interfaces/project/project';
import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { toast } from 'sonner';

export const useUpdatePermissions = (
  contractId: string,
  projectId: string,
): UseMutationResult<
  CreateBasicInfoResponse,
  AxiosError<{ message: string }>,
  PermissionsConfig
> => {
  const queryClient = useQueryClient();

  const updatePermissions = async (
    payload: PermissionsConfig,
  ): Promise<CreateBasicInfoResponse> => {
    const response = await api.patch(
      URL.UPDATE_PERMISSION_GROUPS(contractId, projectId),
      payload,
    );
    return response.data;
  };
  return useMutation({
    mutationFn: updatePermissions,
    mutationKey: ['edit-permission'],
    onSuccess() {
      toast.success('Permissions edited successfully');
      queryClient.invalidateQueries({
        queryKey: ['permission-groups', contractId, projectId],
      });
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
