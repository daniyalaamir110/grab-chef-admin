import api from '@/common/api';
import { URL } from '@/common/api-base-urls';
import { GetTaxonomiesResponse } from '@/common/types/interfaces/project/taxonomies';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { AxiosError } from 'axios';

export const useGetAllTaxonomies = (
  contractId: string,
  projectId: string,
  limit: number,
  page: number,
  search?: string | null,
  visibility?: string[] | null,
  usage?: string[] | null,
): UseQueryResult<GetTaxonomiesResponse, AxiosError<{ message: string }>> => {
  const getTaxonomies = async (): Promise<GetTaxonomiesResponse> => {
    const response = await api.get(URL.GET_TAXONOMIES(contractId, projectId), {
      params: {
        limit,
        search,
        visibility,
        usage,
        page,
      },
    });
    return response.data;
  };
  return useQuery({
    queryFn: getTaxonomies,
    queryKey: [
      'taxonomies',
      contractId,
      projectId,
      limit,
      page,
      search,
      visibility,
      usage,
    ],
    enabled: !!projectId,
  });
};
