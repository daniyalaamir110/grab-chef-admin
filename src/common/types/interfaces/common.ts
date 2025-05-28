import { ColumnDef } from '@tanstack/react-table';
import { Dispatch, SetStateAction } from 'react';

export interface DateInputProps {
  placeHolder?: string;
  label?: string;
  date: Date | null | undefined;
  error?: boolean;
  helperText?: string;
  handleDate?: (value: Date | undefined) => void;
  disableDate?: (date: Date) => boolean;
  isRequired?: boolean;
  className?: string;
}

export interface CustomSelectProps {
  label?: string;
  name?: string;
  required?: boolean;
  options: { label: string; value: string }[];
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
  error?: boolean;
  helperText?: string;
}

export interface CustomFileInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  required?: boolean;
  format?: string;
  text?: string;
  setFieldValue: (field: string, value: File | null) => void;
  setFieldError: (field: string, value: string) => void;
  formikName: string;
  acceptedFormat?: string;
  error?: boolean;
  helperText?: string;
  orientationText?: string;
}

export interface TableHeaderProps {
  headers: string[];
}

export interface TableFooterProps {
  rowsPerPage: number;
  setRowsPerPage: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  rowsOption: number[];
  total: number;
  totalPages: number;
}

export interface SearchBarProps {
  search: string | null;
  setSearch: Dispatch<SetStateAction<string | null>>;
  setCurrentPage?: Dispatch<SetStateAction<number>>;
  placeHolder?: string;
  className?: string;
}

export interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  rowsPerPage: number;
  setRowsPerPage: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  total: number;
  rowsOption: number[];
  totalPages: number;
  fallback?: React.ReactNode;
  openMOdal?: boolean;
  setOpenModal?: Dispatch<SetStateAction<boolean>>;
  isLoading?: boolean;
}

export interface PropertyResponse {
  property_name: string;
  property_type: string;
  visibility: string;
}

export interface NoDataBannerProps {
  img?: string;
  text?: string;
  subText?: string;
  isBtn?: boolean;
  onClick?: () => void;
  btnText?: string;
}

export interface DynamicModalProps {
  title?: string;
  subText?: string;
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  isRequired?: boolean;
}

export interface BasicModalProps {
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
}

export interface DiscardModalProps extends BasicModalProps {
  title?: string;
  subText?: string;
  confirmBtnText?: string;
  isPending?: boolean;
  onClick?: () => void;
}

export interface SuccessModalProps extends BasicModalProps {
  img?: string;
  text?: string;
  btnText?: string;
  onClick?: () => void;
}

export interface Pagination {
  total: number;
  limit: number;
  page: number;
  lastPage: number;
  nextPage: number | null;
  prevPage: number | null;
  totalPages: number;
}

export interface DateRangeProps {
  start_date: Date | undefined;
  end_date: Date | undefined;
  setStartDate: Dispatch<SetStateAction<Date | undefined>>;
  setEndDate: Dispatch<SetStateAction<Date | undefined>>;
  className?: string;
}

interface TabObj {
  title: string;
  query?: string;
  path?: string;
}

export interface TabsProps {
  activeTab: string | undefined;
  setActiveTab: React.Dispatch<React.SetStateAction<string | undefined>>;
  tabs: TabObj[];
}

export interface DiscardDivProps {
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  title?: string;
  subText?: string;
  confirmBtnText?: string;
  isPending?: boolean;
  onClick?: () => void;
}

export interface Language {
  contract_id: number;
  contract_created_at: string; // ISO date string
  contract_updated_at: string;
  contract_name: string;
  contract_code: string;
}

export interface GetLanguagesResponse {
  languages: Language[];
  pagination: Pagination;
}

export interface FileUploadResponse {
  urls: string[];
}
