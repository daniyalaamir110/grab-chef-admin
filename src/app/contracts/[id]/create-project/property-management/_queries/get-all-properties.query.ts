import api from '@/common/api';
import { URL } from '@/common/api-base-urls';
import { GetPropertiesResponse } from '@/common/types/interfaces/project/property-management';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { AxiosError } from 'axios';

export const useGetAllCustomProperties = (
  id: string,
  projectId: string,
  limit: number,
  page: number,
  visibility?: string[] | null,
  search?: string | null,
  type?: string | null,
): UseQueryResult<GetPropertiesResponse, AxiosError<{ message: string }>> => {
  const getProperties = async (): Promise<GetPropertiesResponse> => {
    if (projectId) {
      const response = await api.get(URL.GET_CUSTOM_PROPERTIES(id, projectId), {
        params: {
          limit,
          visibility,
          search,
          type,
          page,
        },
      });
      return response.data;
    } else {
      return {
        customProperties: [],
        pagination: {
          total: 0,
          limit: 0,
          page: 0,
          lastPage: 0,
          nextPage: 0,
          prevPage: 0,
          totalPages: 0,
        },
      };
    }
  };
  return useQuery({
    queryFn: getProperties,
    queryKey: [
      'custom-properties',
      id,
      limit,
      page,
      visibility,
      search,
      type,
      projectId,
    ],
    enabled: !!projectId,
  });
};
