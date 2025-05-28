import api from '@/common/api';
import { URL } from '@/common/api-base-urls';
import { GetTaxonomyBreadcrumb } from '@/common/types/interfaces/project/taxonomies';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { AxiosError } from 'axios';

export const useGetTaxonomyBreadcrumb = (
  contractId: string,
  projectId: string,
  taxonomyId: string,
): UseQueryResult<GetTaxonomyBreadcrumb, AxiosError<{ message: string }>> => {
  const getBreadcrumb = async (): Promise<GetTaxonomyBreadcrumb> => {
    const response = await api.get(
      URL.GET_TAXONOMY_BREADCRUMB(contractId, projectId, taxonomyId),
    );
    return response.data;
  };
  return useQuery({
    queryFn: getBreadcrumb,
    queryKey: ['breadcrumb', contractId, taxonomyId],
  });
};
