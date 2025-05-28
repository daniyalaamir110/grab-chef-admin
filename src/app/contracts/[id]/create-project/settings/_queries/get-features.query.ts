import api from '@/common/api';
import { URL } from '@/common/api-base-urls';
import { FeaturesResponse } from '@/common/types/interfaces/project/settings';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { AxiosError } from 'axios';

export const useGetFeatures = (
  contractId: string,
): UseQueryResult<FeaturesResponse, AxiosError<{ message: string }>> => {
  const getAvailableFeatures = async (): Promise<FeaturesResponse> => {
    const response = await api.get(
      URL.GET_AVAILABLE_PROJECT_FEATURES(contractId),
    );
    return response.data;
  };
  return useQuery({
    queryFn: getAvailableFeatures,
    queryKey: ['available-features'],
  });
};
