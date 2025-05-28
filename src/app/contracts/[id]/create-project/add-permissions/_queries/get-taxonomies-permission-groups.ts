import api from '@/common/api';
import { URL } from '@/common/api-base-urls';
import { TaxonomyGroup } from '@/common/types/interfaces/project/taxonomies';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { AxiosError } from 'axios';

export const useGetTaxonomiesPermissionGroups = (
  contractId: string,
  projectId: string,
): UseQueryResult<TaxonomyGroup, AxiosError<{ message: string }>> => {
  const getTaxonomiesPermissionGroups = async (): Promise<TaxonomyGroup> => {
    const response = await api.get(
      URL.GET_TAXONOMIES_PERMISSION_GROUPS(contractId, projectId),
    );
    return response.data;
  };
  return useQuery({
    queryFn: getTaxonomiesPermissionGroups,
    queryKey: ['taxonomy-permission-groups', contractId, projectId],
    enabled: !!projectId,
  });
};
