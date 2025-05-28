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

export const useCreateTaxonomyChild = (
  id: string,
  projectId: string,
  taxonomyId: string,
): UseMutationResult<
  CreateTaxonomyResponse,
  AxiosError<{ message: string }>,
  Partial<TaxonomyPayload>
> => {
  const queryClient = useQueryClient();
  const createTaxonomyChild = async (
    payload: Partial<TaxonomyPayload>,
  ): Promise<CreateTaxonomyResponse> => {
    const response = await api.post(
      URL.CREATE_TAXONOMY_CHILD(id, projectId, taxonomyId),
      payload,
    );
    return response.data;
  };
  return useMutation({
    mutationFn: createTaxonomyChild,
    mutationKey: ['create-taxonomy-child'],
    onSuccess() {
      toast.success('Taxonomy child created successfully');
      queryClient.invalidateQueries({
        predicate: query => query.queryKey[0] === 'child-taxonomies',
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
