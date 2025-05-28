import { Dispatch, SetStateAction } from 'react';
import { ProjectStatus } from '../../enums/project/project';
import { Pagination } from '../common';

export interface Project {
  id: string;
  name: string;
  start_date: string;
  end_date: string;
  location: string;
  status: ProjectStatus;
}

export interface ProjectTableProps {
  data: Project[];
  rowsPerPage: number;
  setRowsPerPage: Dispatch<SetStateAction<number>>;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  total: number;
  rowsOption: number[];
  totalPages: number;
  isLoading?: boolean;
  fallback?: React.ReactNode;
}

export interface ProjectCreationResponse {
  basic_project_info: boolean;
  project_settings: boolean;
  custom_properties: boolean;
  taxonomies: boolean;
  choose_registration: boolean;
  attendee_form: boolean;
  exhibitor_form: boolean;
  add_permissions: boolean;
}

export interface GetAllProjectsResponse {
  projects: Project[];
  pagination: Pagination;
}

export interface CreateBasicInfoPayload {
  name: string;
  description: string;
  start_date: string | null;
  end_date: string | null;
  location: string;
  banner_image_url: string | null;
}

export interface CreateBasicInfoResponse {
  id: number;
  name: string;
  description: string;
  location: string;
  banner_image_url: string;
  start_date: string;
  end_date: string;
  created_by: number;
  last_updated_by: number | null;
  deleted_by: number | null;
  access_rule: string | null;
  form_type: string | null;
  contract_id: number;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  is_visible: boolean;
  status: string;
}
