import api from '@/common/api';
import { URL } from '@/common/api-base-urls';
import { GetChildTaxonomiesResponse } from '@/common/types/interfaces/project/taxonomies';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { AxiosError } from 'axios';

export const useGetAllChildTaxonomies = (
  contractId: string,
  projectId: string,
  taxonomyId: string,
  limit: number,
  page: number,
  search?: string | null,
): UseQueryResult<
  GetChildTaxonomiesResponse,
  AxiosError<{ message: string }>
> => {
  const getChildTaxonomies = async (): Promise<GetChildTaxonomiesResponse> => {
    const response = await api.get(
      URL.GET_CHILD_TAXONOMIES(contractId, projectId, taxonomyId),
      {
        params: {
          limit,
          search,
          page,
        },
      },
    );
    return response.data;
  };
  return useQuery({
    queryFn: getChildTaxonomies,
    queryKey: ['child-taxonomies', contractId, taxonomyId, limit, page, search],
  });
};
