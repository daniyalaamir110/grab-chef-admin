import api from '@/common/api';
import { URL } from '@/common/api-base-urls';
import { GetAllProjectsResponse } from '@/common/types/interfaces/project/project';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { AxiosError } from 'axios';

export const useGetAllProjects = (
  id: string,
  limit: number,
  page: number,
  start_date?: string,
  end_date?: string,
  search?: string | null,
  status?: string | null,
): UseQueryResult<GetAllProjectsResponse, AxiosError<{ message: string }>> => {
  console.log({ limit });
  const getProjects = async (): Promise<GetAllProjectsResponse> => {
    const response = await api.get(URL.GET_PROJECTS(id), {
      params: {
        limit,
        start_date,
        end_date,
        search,
        status,
        page,
      },
    });
    return response.data;
  };
  return useQuery({
    queryFn: getProjects,
    queryKey: [
      'projects',
      id,
      limit,
      page,
      start_date,
      end_date,
      search,
      status,
    ],
  });
};
