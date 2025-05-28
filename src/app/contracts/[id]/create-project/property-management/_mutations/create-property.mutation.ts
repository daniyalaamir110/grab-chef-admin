import api from '@/common/api';
import { URL } from '@/common/api-base-urls';
import {
  CreatePropertyPayload,
  CreatePropertyResponse,
} from '@/common/types/interfaces/project/property-management';
import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { toast } from 'sonner';

export const useCreateCustomProperty = (
  id: string,
  projectId?: string,
): UseMutationResult<
  CreatePropertyResponse,
  AxiosError<{ message: string }>,
  CreatePropertyPayload
> => {
  const queryClient = useQueryClient();
  const createProperty = async (
    payload: CreatePropertyPayload,
  ): Promise<CreatePropertyResponse> => {
    const response = await api.post(URL.CREATE_PROPERTY(id), payload, {
      params: {
        projectId: projectId,
      },
    });
    return response.data;
  };
  return useMutation({
    mutationFn: createProperty,
    mutationKey: ['create-property'],
    onSuccess() {
      toast.success('Property created successfully');
      if (projectId) {
        console.log('inside invalidate');
        queryClient.invalidateQueries({
          queryKey: ['custom-properties', id],
        });
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
