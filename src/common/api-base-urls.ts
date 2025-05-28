/**
 * Live URL that checks if the app is in production or development.
 */
const IS_LIVE = true;

/**
 * Production URL that will be treated as global start-point and is connected to production backend API.
 */
const PRODUCTION_URL = process.env.NEXT_PUBLIC_API_URL as string;

/**
 * Local URL that will be treated as global start-point and is connected to local backend or AWS Elastic API.
 */
const LOCAL_URL = '192.168.1.195:3000' as string;

/**
 * Base URL that will be treated as global start-point.
 */
export const BASE_URL = IS_LIVE ? PRODUCTION_URL : LOCAL_URL;

export const URL = {
  // ========================== User ========================
  ME: `${BASE_URL}/api/v1/users/me`,

  // ======================== Auth endpoints ========================
  LOGIN: `${BASE_URL}/api/v1/auth/login`,
  FORGOT_PASSWORD: `${BASE_URL}/api/v1/auth/forgot-password`,
  VERIFY_OTP: `${BASE_URL}/api/v1/auth/verify-otp`,
  RESET_PASSWORD: `${BASE_URL}/api/v1/auth/reset-password`,

  // ======================= Upload file endpoints ========================
  // UPLOAD_FILE: `${BASE_URL}/api/v1/upload/files`,
  UPLOAD_FILE: 'https://staging-api.flowbills.com/api/v1/upload/files',

  // ======================== Contracts endpoints ========================
  GET_CONTRACTS: `${BASE_URL}/api/v1/contracts`,

  // ======================== Project endpoints ========================
  //Project
  GET_PROJECTS: (id: string) => `${BASE_URL}/api/v1/contracts/${id}/projects`,

  // Delete Project
  DELETE_PROJECT: (contractId: string, projectId: string) =>
    `${BASE_URL}/api/v1/contracts/${contractId}/projects/${projectId}/cancel`,

  // Project Creation Status
  GET_CREATION_STATUS: (contractId: string, projectId: string) =>
    `${BASE_URL}/api/v1/contracts/${contractId}/projects/${projectId}/creation-status`,

  // Basic Info
  CREATE_BASIC_INFO: (contractId: string) =>
    `${BASE_URL}/api/v1/contracts/${contractId}/projects`,

  UPDATE_BASIC_INFO: (contractId: string, projectId?: string) =>
    `${BASE_URL}/api/v1/contracts/${contractId}/projects/${projectId}/basic-info`,

  GET_BASIC_INFO: (contractId: string, projectId: string) =>
    `${BASE_URL}/api/v1/contracts/${contractId}/projects/${projectId}/basic-info`,

  // Settings
  GET_AVAILABLE_PROJECT_FEATURES: (contractId: string) =>
    `${BASE_URL}/api/v1/contracts/${contractId}/contract-features/available`,

  GET_PROJECT_SETTINGS: (contractId: string, projectId: string) =>
    `${BASE_URL}/api/v1/contracts/${contractId}/projects/${projectId}/settings`,

  CREATE_SETTINGS: (contractId: string) =>
    `${BASE_URL}/api/v1/contracts/${contractId}/projects/settings`,

  UPDATE_SETTINGS: (contractId: string, projectId: string) =>
    `${BASE_URL}/api/v1/contracts/${contractId}/projects/${projectId}/settings`,

  //Custom Property
  CREATE_PROPERTY: (id: string | undefined) =>
    `${BASE_URL}/api/v1/contracts/${id}/custom-properties`,

  EDIT_CUSTOM_PROPERTY: (
    id: string | undefined,
    customPropertyId: string,
    projectId: string,
  ) =>
    `${BASE_URL}/api/v1/contracts/${id}/projects/${projectId}/custom-properties/${customPropertyId}`,

  GET_CUSTOM_PROPERTIES: (contractId: string, projectId: string) =>
    `${BASE_URL}/api/v1/contracts/${contractId}/projects/${projectId}/custom-properties`,

  //Taxonomy
  GET_TAXONOMY_BREADCRUMB: (
    contractId: string,
    projectId: string,
    taxonomyId: string,
  ) =>
    `${BASE_URL}/api/v1/contracts/${contractId}/projects/${projectId}/taxonomies/${taxonomyId}/breadcrumb`,

  GET_TAXONOMIES: (contractId: string, projectId: string) =>
    `${BASE_URL}/api/v1/contracts/${contractId}/projects/${projectId}/taxonomies`,

  GET_TAXONOMIES_PERMISSION_GROUPS: (contractId: string, projectId: string) =>
    `${BASE_URL}/api/v1/contracts/${contractId}/projects/${projectId}/taxonomies/permission-groups`,

  CREATE_TAXONOMY: (contractId: string) =>
    `${BASE_URL}/api/v1/contracts/${contractId}/taxonomies`,

  EDIT_TAXONOMY: (
    contractId: string,
    projectId: string | undefined,
    taxonomyId: string | undefined,
  ) =>
    `${BASE_URL}/api/v1/contracts/${contractId}/projects/${projectId}/taxonomies/${taxonomyId}`,

  GET_CHILD_TAXONOMIES: (
    contractId: string,
    projectId: string,
    taxonomyId: string,
  ) =>
    `${BASE_URL}/api/v1/contracts/${contractId}/projects/${projectId}/taxonomies/${taxonomyId}`,

  CREATE_TAXONOMY_CHILD: (
    contractId: string,
    projectId: string,
    taxonomyId: string,
  ) =>
    `${BASE_URL}/api/v1/contracts/${contractId}/projects/${projectId}/taxonomies/${taxonomyId}`,

  EDIT_TAXONOMY_CHILD: (
    contractId: string,
    projectId: string,
    taxonomyId: string | undefined,
  ) =>
    `${BASE_URL}/api/v1/contracts/${contractId}/projects/${projectId}/taxonomies/${taxonomyId}/subchildren`,

  // ======================== Permission Groups endpoints ========================
  CREATE_PERMISSION_GROUPS: (contractId: string) =>
    `${BASE_URL}/api/v1/contracts/${contractId}/permission-groups/default`,

  UPDATE_PERMISSION_GROUPS: (contractId: string, projectId: string) =>
    `${BASE_URL}/api/v1/contracts/${contractId}/projects/${projectId}/permission-groups/default`,

  GET_PERMISSION_GROUPS: (contractId: string, projectId: string) =>
    `${BASE_URL}/api/v1/contracts/${contractId}/projects/${projectId}/permission-groups/default`,

  // ======================== Language endpoint ========================
  GET_LANGUAGES: `${BASE_URL}/api/v1/languages`,
};
