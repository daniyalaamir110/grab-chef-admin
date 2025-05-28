import api from '@/common/api';
import { URL } from '@/common/api-base-urls';
import {
  CreateTaxonomyResponse,
  TaxonomyPayload,
} from '@/common/types/interfaces/project/taxonomies';
import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { toast } from 'sonner';

export const useCreateTaxonomy = (
  id: string,
  projectId?: string,
): UseMutationResult<
  CreateTaxonomyResponse,
  AxiosError<{ message: string }>,
  TaxonomyPayload
> => {
  const queryClient = useQueryClient();
  const createTaxonomy = async (
    payload: TaxonomyPayload,
  ): Promise<CreateTaxonomyResponse> => {
    const response = await api.post(URL.CREATE_TAXONOMY(id), payload, {
      params: {
        projectId: projectId,
      },
    });
    return response.data;
  };
  return useMutation({
    mutationFn: createTaxonomy,
    mutationKey: ['create-taxonomy'],
    onSuccess() {
      toast.success('Taxonomy created successfully');
      queryClient.invalidateQueries({
        queryKey: ['taxonomies', id, projectId],
      });
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
