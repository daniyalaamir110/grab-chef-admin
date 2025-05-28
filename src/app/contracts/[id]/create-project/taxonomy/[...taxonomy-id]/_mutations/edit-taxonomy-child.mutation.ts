import api from '@/common/api';
import { URL } from '@/common/api-base-urls';
import {
  EditTaxonomyResponse,
  TaxonomyPayload,
} from '@/common/types/interfaces/project/taxonomies';
import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { toast } from 'sonner';

export const useEditTaxonomyChild = (
  id: string,
  projectId: string,
): UseMutationResult<
  EditTaxonomyResponse,
  AxiosError<{ message: string }>,
  Partial<TaxonomyPayload>
> => {
  const queryClient = useQueryClient();
  const editTaxonomyChild = async (
    payload: Partial<TaxonomyPayload>,
  ): Promise<EditTaxonomyResponse> => {
    const { taxonomy_id, ...rest } = payload;
    const response = await api.patch(
      URL.EDIT_TAXONOMY_CHILD(id, projectId, taxonomy_id),
      rest,
    );
    return response.data;
  };
  return useMutation({
    mutationFn: editTaxonomyChild,
    mutationKey: ['edit-taxonomy-child'],
    onSuccess() {
      toast.success('Taxonomy child edited successfully');
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
