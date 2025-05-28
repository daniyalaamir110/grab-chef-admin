import api from '@/common/api';
import { URL } from '@/common/api-base-urls';
import {
  CreateBasicInfoPayload,
  CreateBasicInfoResponse,
} from '@/common/types/interfaces/project/project';
import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { toast } from 'sonner';

export const useCreateBasicInfo = (
  contractId: string,
  projectId?: string,
  isEdit?: boolean,
): UseMutationResult<
  CreateBasicInfoResponse,
  AxiosError<{ message: string }>,
  CreateBasicInfoPayload
> => {
  const queryClient = useQueryClient();

  const createBasicInfo = async (
    payload: CreateBasicInfoPayload,
  ): Promise<CreateBasicInfoResponse> => {
    if (projectId) {
      const response = await api.patch(
        URL.UPDATE_BASIC_INFO(contractId, projectId),
        payload,
      );
      return response.data;
    } else {
      const response = await api.post(
        URL.CREATE_BASIC_INFO(contractId),
        payload,
      );
      return response.data;
    }
  };
  return useMutation({
    mutationFn: createBasicInfo,
    mutationKey: [
      !!isEdit && projectId ? 'edit-basic-info' : 'create-basic-info',
    ],
    onSuccess() {
      if (!!isEdit && projectId) {
        toast.success('Basic info edited successfully');
        queryClient.invalidateQueries({ queryKey: ['basic-info'] });
      } else {
        toast.success('Basic info created successfully');
      }
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
