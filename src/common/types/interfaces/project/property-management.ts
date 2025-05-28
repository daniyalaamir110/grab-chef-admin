import { Dispatch, InputHTMLAttributes, SetStateAction } from 'react';
import {
  PropertyFieldEnum,
  PropertyVisibilityEnum,
} from '../../enums/project/property-management';
import { BasicModalProps, Pagination } from '../common';

export interface AttendeeTableProps {
  data: Partial<CreatePropertyResponse>[];
  rowsPerPage: number;
  setRowsPerPage: Dispatch<SetStateAction<number>>;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  total: number;
  rowsOption: number[];
  totalPages: number;
  fallback?: React.ReactNode;
  setEditModal?: Dispatch<SetStateAction<boolean>>;
  setDiscardModal?: Dispatch<SetStateAction<boolean>>;
  isLoading?: boolean;
  setProperty?: Dispatch<
    SetStateAction<Partial<CreatePropertyResponse> | null>
  >;
}

export interface AttendeeProperty {
  id: string;
  property_name: string;
  property_type: string;
  visibility: string;
}

export interface Option {
  label: string;
  value: string;
}

export interface RadioButtonInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  options: Option[];
  label?: string;
  subText?: string;
  required?: boolean;
  error?: boolean;
  helperText?: string;
}

export interface CheckboxInputProps {
  label?: string;
  name: string;
  required?: boolean;
  options: Option[];
  value: string[]; // multiple selections
  onChange: (e: { target: { name: string; value: string[] } }) => void;
  onBlur?: () => void;
  error?: boolean;
  helperText?: string;
  className?: string;
}

export interface CreatePropertyPayload {
  label: string;
  placeholder: string;
  fieldType: string;
  visibility: string;
  type: string;
}

export interface CreateCustomPropertyPayload {
  label: string;
  placeholder: string;
  fieldType: PropertyFieldEnum;
  visibility: PropertyVisibilityEnum;
  type: string;
}

export interface CreatePropertyResponse {
  id: string;
  created_by: number;
  last_updated_by: number | null;
  deleted_by: number | null;
  label: string;
  placeholder: string;
  visibility: PropertyVisibilityEnum;
  type: string;
  field_type: PropertyFieldEnum;
  project_id: number;
  default_value: string | null;
  helper_text: string | null;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}

export interface GetPropertiesResponse {
  customProperties: Partial<CreatePropertyResponse>[];
  pagination: Pagination;
}

export interface AddPropertyFormProps {
  setOpenModal: Dispatch<SetStateAction<boolean>>;
}

export interface EditPropertyFormProps extends AddPropertyFormProps {
  property: Partial<CreatePropertyResponse> | null;
}

export interface EditPropertyModalProps extends BasicModalProps {
  property: Partial<CreatePropertyResponse> | null;
}
