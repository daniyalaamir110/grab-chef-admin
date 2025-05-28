import api from '@/common/api';
import { URL } from '@/common/api-base-urls';
import { CreateBasicInfoResponse } from '@/common/types/interfaces/project/project';
import { ProjectFeatureSettingsPayload } from '@/common/types/interfaces/project/settings';
import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { toast } from 'sonner';

export const useCreateSettings = (
  contractId: string,
  projectId: string,
  isEdit?: boolean,
): UseMutationResult<
  CreateBasicInfoResponse,
  AxiosError<{ message: string }>,
  ProjectFeatureSettingsPayload
> => {
  const createSettings = async (
    payload: ProjectFeatureSettingsPayload,
  ): Promise<CreateBasicInfoResponse> => {
    if (projectId) {
      const response = await api.patch(
        URL.UPDATE_SETTINGS(contractId, projectId),
        payload,
      );
      return response.data;
    } else {
      const response = await api.post(URL.CREATE_SETTINGS(contractId), payload);
      return response.data;
    }
  };
  return useMutation({
    mutationFn: createSettings,
    mutationKey: [isEdit && projectId ? 'edit-settings' : 'create-settings'],
    onSuccess() {
      if (isEdit && projectId) {
        toast.success('Settings edited successfully');
      } else {
        toast.success('Settings created successfully');
      }
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
