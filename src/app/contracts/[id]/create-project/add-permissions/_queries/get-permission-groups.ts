import api from '@/common/api';
import { URL } from '@/common/api-base-urls';
import { PermissionsConfig } from '@/common/types/interfaces/project/permission';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { AxiosError } from 'axios';

export const useGetPermissionGroups = (
  contractId: string,
  projectId: string,
): UseQueryResult<PermissionsConfig, AxiosError<{ message: string }>> => {
  const getTaxonomiesPermissionGroups =
    async (): Promise<PermissionsConfig> => {
      const response = await api.get(
        URL.GET_PERMISSION_GROUPS(contractId, projectId),
      );
      return response.data;
    };
  return useQuery({
    queryFn: getTaxonomiesPermissionGroups,
    queryKey: ['permission-groups', contractId, projectId],
    enabled: !!projectId,
  });
};
