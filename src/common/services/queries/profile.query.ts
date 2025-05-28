import api from '@/common/api';
import { URL } from '@/common/api-base-urls';
import { User } from '@/common/types/user';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { AxiosError } from 'axios';

export const useGetUser = (): UseQueryResult<
  User,
  AxiosError<{ message: string }>
> => {
  const getUser = async (): Promise<User> => {
    const response = await api.get(URL.ME);
    return response.data;
  };
  return useQuery({
    queryFn: getUser,
    queryKey: ['user'],
  });
};
