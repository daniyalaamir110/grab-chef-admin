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

export const useEditCustomProperty = (
  id: string,
  projectId: string,
  customPropertyId: string,
): UseMutationResult<
  CreatePropertyResponse,
  AxiosError<{ message: string }>,
  CreatePropertyPayload
> => {
  const queryClient = useQueryClient();
  const editProperty = async (
    payload: CreatePropertyPayload,
  ): Promise<CreatePropertyResponse> => {
    const response = await api.patch(
      URL.EDIT_CUSTOM_PROPERTY(id, customPropertyId, projectId),
      payload,
    );
    return response.data;
  };
  return useMutation({
    mutationFn: editProperty,
    mutationKey: ['edit-property'],
    onSuccess() {
      toast.success('Property edited successfully');
      queryClient.invalidateQueries({ queryKey: ['custom-properties'] });
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
