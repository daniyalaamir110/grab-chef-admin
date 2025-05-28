import api from '@/common/api';
import { URL } from '@/common/api-base-urls';
import { ProjectCreationResponse } from '@/common/types/interfaces/project/project';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { AxiosError } from 'axios';

export const useGetProjectCreationStatus = (
  contractId: string,
  projectId: string,
): UseQueryResult<ProjectCreationResponse, AxiosError<{ message: string }>> => {
  const getProjectCreationStatus =
    async (): Promise<ProjectCreationResponse> => {
      const response = await api.get(
        URL.GET_CREATION_STATUS(contractId, projectId),
      );
      return response.data;
    };
  return useQuery({
    queryFn: getProjectCreationStatus,
    queryKey: ['project-creation-status', contractId, projectId],
    enabled: !!projectId,
  });
};
