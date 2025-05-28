import { Dispatch, SetStateAction } from 'react';
import { Pagination } from '../common';

export interface ContractTableProps {
  data: Partial<Contract>[];
  rowsPerPage: number;
  setRowsPerPage: Dispatch<SetStateAction<number>>;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  total: number;
  rowsOption: number[];
  totalPages: number;
  fallback?: React.ReactNode;
  isLoading?: boolean;
}

export interface Contract {
  id: string;
  created_at: string;
  updated_at: string;
  name: string;
  start_date: string;
  end_date: string;
  projects_count: number;
}

export interface GetAllContractsResponse {
  contracts: Contract[];
  pagination: Pagination;
}
