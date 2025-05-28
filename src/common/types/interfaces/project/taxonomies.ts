import { Dispatch, SetStateAction } from 'react';
import { BasicModalProps, Pagination } from '../common';

export interface TaxonomyValue {
  value: string;
  language_id: number;
  language_code: string;
  language_name: string;
}

export interface Taxonomy {
  id: number;
  porting_code: string;
  applied_to: string[];
  visibility: string;
  is_enabled_as_filter_in_search: boolean;
  is_enabled_in_matchmaking_algorithm: boolean;
  values: TaxonomyValue[];
  children_count: number;
  name?: string;
}

export interface TaxonomyGroup {
  [key: string]: Partial<Taxonomy>[];
}

export interface GetTaxonomiesResponse {
  taxonomies: Taxonomy[];
  pagination: Pagination;
}

export interface GetChildTaxonomiesResponse {
  taxonomies: Partial<Taxonomy>[];
  pagination: Pagination;
}

export interface TaxonomyTableProps {
  data: Taxonomy[];
  rowsPerPage: number;
  setRowsPerPage: Dispatch<SetStateAction<number>>;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  total: number;
  rowsOption: number[];
  totalPages: number;
  fallback?: React.ReactNode;
  setEditModal?: Dispatch<SetStateAction<boolean>>;
  isLoading?: boolean;
  setTaxonomy?: Dispatch<SetStateAction<Taxonomy | null>>;
}

export interface TaxonomyChildTableProps {
  data: Partial<Taxonomy>[];
  rowsPerPage: number;
  setRowsPerPage: Dispatch<SetStateAction<number>>;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  total: number;
  rowsOption: number[];
  totalPages: number;
  fallback?: React.ReactNode;
  setEditModal?: Dispatch<SetStateAction<boolean>>;
  isLoading?: boolean;
  setTaxonomy?: Dispatch<SetStateAction<Partial<Taxonomy> | null>>;
}

export interface TaxonomyValuePayload {
  language_id: number | null;
  value: string;
}

export interface TaxonomyPayload {
  portingCode: string;
  isEnabledAsFilterInSearch: boolean;
  isEnabledInMatchmakingAlgorithm: boolean;
  usage: string[];
  visibility: string;
  values: TaxonomyValuePayload[];
  taxonomy_id?: string;
}

export interface CreateTaxonomyResponse {
  id: number;
  project_id: number;
  porting_code: string;
  depth: number;
  path: string;
  parent_taxonomy_id: number | null;
  created_by: number;
  last_updated_by: number | null;
  deleted_by: number | null;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}

export interface EditTaxonomyModalProps extends BasicModalProps {
  taxonomy: Taxonomy | null;
}

export interface EditChildTaxonomyModalProps extends BasicModalProps {
  taxonomy: Partial<Taxonomy> | null;
}

export interface TaxonomyLanguage {
  id: number;
  created_at: string;
  created_by: number;
  updated_at: string;
  last_updated_by: number | null;
  deleted_at: string | null;
  deleted_by: number | null;
  value: string;
  taxonomy_id: number;
  language_id: number;
}

export interface TaxonomySetting extends Taxonomy {
  id: number;
  created_at: string;
  created_by: number;
  updated_at: string;
  last_updated_by: number | null;
  deleted_at: string | null;
  deleted_by: number | null;
}

export interface EditTaxonomyResponse {
  id: number;
  created_at: string;
  created_by: number;
  updated_at: string;
  last_updated_by: number | null;
  deleted_at: string | null;
  deleted_by: number | null;
  porting_code: string;
  depth: number;
  path: string;
  parent_taxonomy_id: number | null;
  project_id: number;
  taxonomy_languages: TaxonomyLanguage[];
  taxonomy_setting: TaxonomySetting | null;
}

export interface BreadcrumbItem {
  id: number;
  name: string;
}

export interface GetTaxonomyBreadcrumb {
  breadcrumb: BreadcrumbItem[];
}

export interface CreateTaxonomyChildModalProps extends BasicModalProps {
  name?: string;
}

export interface TaxonomyBreadcrumbProps {
  breadcrumb: BreadcrumbItem[] | undefined;
  isLoading: boolean;
}
