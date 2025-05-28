import api from '@/common/api';
import { URL } from '@/common/api-base-urls';
import { ProjectSettingsResponse } from '@/common/types/interfaces/project/settings';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { AxiosError } from 'axios';

export const useGetSettings = (
  contractId: string,
  projectId: string,
): UseQueryResult<ProjectSettingsResponse, AxiosError<{ message: string }>> => {
  const getSettings = async (): Promise<ProjectSettingsResponse> => {
    const response = await api.get(
      URL.GET_PROJECT_SETTINGS(contractId, projectId),
    );
    return response.data;
  };
  return useQuery({
    queryFn: getSettings,
    queryKey: ['settings', projectId],
    enabled: !!projectId,
  });
};
