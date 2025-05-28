import api from '@/common/api';
import { URL } from '@/common/api-base-urls';
import { CreateBasicInfoPayload } from '@/common/types/interfaces/project/project';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { AxiosError } from 'axios';

export const useGetBasicInfo = (
  contractId: string,
  projectId: string,
): UseQueryResult<CreateBasicInfoPayload, AxiosError<{ message: string }>> => {
  const getBasicInfo = async (): Promise<CreateBasicInfoPayload> => {
    const response = await api.get(URL.GET_BASIC_INFO(contractId, projectId));
    return response.data;
  };
  return useQuery({
    queryFn: getBasicInfo,
    queryKey: ['basic-info', contractId, projectId],
    enabled: !!projectId,
  });
};
