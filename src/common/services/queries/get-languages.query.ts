import api from '@/common/api';
import { URL } from '@/common/api-base-urls';
import { GetLanguagesResponse } from '@/common/types/interfaces/common';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { AxiosError } from 'axios';

export const useGetLanguages = (): UseQueryResult<
  GetLanguagesResponse,
  AxiosError<{ message: string }>
> => {
  const getLanguages = async (): Promise<GetLanguagesResponse> => {
    const response = await api.get(URL.GET_LANGUAGES);
    return response.data;
  };
  return useQuery({
    queryFn: getLanguages,
    queryKey: ['languages'],
  });
};
