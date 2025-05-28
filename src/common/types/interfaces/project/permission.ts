import { FormikProps } from 'formik';
import { Dispatch, SetStateAction } from 'react';

export interface AccessControl {
  id?: number;
  select_type: 'view_all' | string | null;
  is_enabled: boolean | null;
  value: null | number | string;
  taxonomies: null | number[];
}

export interface UserRolePermissions {
  session_access: AccessControl;
  user_list_access: AccessControl;
  exhibitor_list_access: AccessControl;
  allow_chat?: AccessControl;
  allow_meeting_requests?: AccessControl;
  create_survey_and_communications?: AccessControl;
  receive_in_app_support?: AccessControl;
  show_qr_code?: AccessControl;
  scan_qr_code?: AccessControl;
  post_creation?: AccessControl;
  limit_meeting_slots?: AccessControl;
  enable_agenda?: AccessControl;
  allow_exhibitor_manager?: AccessControl;
  enable_product_listing?: AccessControl;
  can_manage_agenda?: AccessControl;
  can_invite_managers?: AccessControl;
  can_edit_other_manager_permission?: AccessControl;
  simultaneous_agenda_limit?: AccessControl;
  total_meeting_slots?: AccessControl;
  max_managers_allowed?: AccessControl;
  product_limit?: AccessControl;
}

export interface PermissionsConfig {
  guest_user: UserRolePermissions;
  attendee: UserRolePermissions;
  exhibitor_manager: UserRolePermissions;
  are_preset_permissions_enabled: boolean;
}

export interface PermissionKey {
  parent_key: string;
  permission_key: string;
}

export interface PermissionProps {
  formik: FormikProps<PermissionsConfig>;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  setPermissionKey: Dispatch<SetStateAction<PermissionKey>>;
  type?: string;
}
