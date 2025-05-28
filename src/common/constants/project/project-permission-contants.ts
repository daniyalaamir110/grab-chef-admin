import { PermissionsConfig } from '@/common/types/interfaces/project/permission';

interface RadioField {
  title: string;
  value: string;
  subText: string;
}

interface PermissionField {
  title: string;
  subText: string;
  type: 'switch' | 'radio';
  inputField: {
    title: string;
    subText: string;
  } | null;
  radioFields: RadioField[];
}

export const initialValues: PermissionsConfig = {
  guest_user: {
    session_access: {
      select_type: 'view_all',
      is_enabled: null,
      value: null,
      taxonomies: null,
    },
    user_list_access: {
      select_type: 'view_all',
      is_enabled: null,
      value: null,
      taxonomies: null,
    },
    exhibitor_list_access: {
      select_type: 'view_all',
      is_enabled: null,
      value: null,
      taxonomies: null,
    },
  },
  attendee: {
    session_access: {
      select_type: 'view_all',
      is_enabled: null,
      value: null,
      taxonomies: null,
    },
    user_list_access: {
      select_type: 'view_all',
      is_enabled: null,
      value: null,
      taxonomies: null,
    },
    exhibitor_list_access: {
      select_type: 'view_all',
      is_enabled: null,
      value: null,
      taxonomies: null,
    },
    allow_chat: {
      select_type: null,
      is_enabled: false,
      value: null,
      taxonomies: null,
    },
    allow_meeting_requests: {
      select_type: null,
      is_enabled: false,
      value: null,
      taxonomies: null,
    },
    create_survey_and_communications: {
      select_type: null,
      is_enabled: false,
      value: null,
      taxonomies: null,
    },
    receive_in_app_support: {
      select_type: null,
      is_enabled: false,
      value: null,
      taxonomies: null,
    },
    show_qr_code: {
      select_type: null,
      is_enabled: false,
      value: null,
      taxonomies: null,
    },
    scan_qr_code: {
      select_type: null,
      is_enabled: false,
      value: null,
      taxonomies: null,
    },
    post_creation: {
      select_type: null,
      is_enabled: false,
      value: null,
      taxonomies: null,
    },
    limit_meeting_slots: {
      select_type: null,
      is_enabled: false,
      value: 0,
      taxonomies: null,
    },
  },
  exhibitor_manager: {
    session_access: {
      select_type: 'view_all',
      is_enabled: null,
      value: null,
      taxonomies: null,
    },
    user_list_access: {
      select_type: 'view_all',
      is_enabled: null,
      value: null,
      taxonomies: null,
    },
    exhibitor_list_access: {
      select_type: 'view_all',
      is_enabled: null,
      value: null,
      taxonomies: null,
    },
    allow_chat: {
      select_type: null,
      is_enabled: false,
      value: null,
      taxonomies: null,
    },
    allow_meeting_requests: {
      select_type: null,
      is_enabled: false,
      value: null,
      taxonomies: null,
    },
    create_survey_and_communications: {
      select_type: null,
      is_enabled: false,
      value: null,
      taxonomies: null,
    },
    receive_in_app_support: {
      select_type: null,
      is_enabled: false,
      value: null,
      taxonomies: null,
    },
    show_qr_code: {
      select_type: null,
      is_enabled: false,
      value: null,
      taxonomies: null,
    },
    scan_qr_code: {
      select_type: null,
      is_enabled: false,
      value: null,
      taxonomies: null,
    },
    post_creation: {
      select_type: null,
      is_enabled: false,
      value: null,
      taxonomies: null,
    },
    limit_meeting_slots: {
      select_type: null,
      is_enabled: false,
      value: 0,
      taxonomies: null,
    },
    enable_agenda: {
      select_type: null,
      is_enabled: false,
      value: null,
      taxonomies: null,
    },
    allow_exhibitor_manager: {
      select_type: null,
      is_enabled: false,
      value: null,
      taxonomies: null,
    },
    enable_product_listing: {
      select_type: null,
      is_enabled: false,
      value: null,
      taxonomies: null,
    },
    can_manage_agenda: {
      select_type: null,
      is_enabled: true,
      value: null,
      taxonomies: null,
    },
    can_invite_managers: {
      select_type: null,
      is_enabled: true,
      value: null,
      taxonomies: null,
    },
    can_edit_other_manager_permission: {
      select_type: null,
      is_enabled: true,
      value: null,
      taxonomies: null,
    },
    simultaneous_agenda_limit: {
      select_type: null,
      is_enabled: false,
      value: 0,
      taxonomies: null,
    },
    total_meeting_slots: {
      select_type: null,
      is_enabled: false,
      value: 0,
      taxonomies: null,
    },
    max_managers_allowed: {
      select_type: null,
      is_enabled: false,
      value: 0,
      taxonomies: null,
    },
    product_limit: {
      select_type: null,
      is_enabled: false,
      value: 0,
      taxonomies: null,
    },
  },
  are_preset_permissions_enabled: false,
};

export const AccessControlConstants: Record<
  string,
  {
    mainSubText: string;
    key: string;
    fields: PermissionField[];
  }
> = {
  'Access Control': {
    mainSubText: 'Manage visibility of sessions, users, and exhibitors',
    key: 'attendee',
    fields: [
      {
        title: 'Session Access',
        subText:
          'Choose whether this user can see all sessions or only specific ones based on assigned categories.',
        type: 'radio',
        inputField: null,
        radioFields: [
          {
            title: 'View All Sessions',
            subText: 'User will see every session available in the project.',
            value: 'view_all',
          },
          {
            title: 'View Specific Sessions',
            subText:
              'User will only see sessions tagged with selected taxonomy.',
            value: 'taxonomy',
          },
        ],
      },
      {
        title: 'Users List Access',
        subText:
          'Define if this user can browse all participants or only those within selected taxonomy.',
        type: 'radio',
        inputField: null,
        radioFields: [
          {
            title: 'View All Users',
            subText: 'User will see every session available in the project.',
            value: 'view_all',
          },
          {
            title: 'View Specific Users',
            subText:
              'Limit visibility to users belonging to specific taxonomies.',
            value: 'taxonomy',
          },
        ],
      },
      {
        title: 'Exhibitor List Access',
        subText:
          'Manage whether this user can view all exhibitors or only those assigned to specific categories.',
        type: 'radio',
        inputField: null,
        radioFields: [
          {
            title: 'View All Exhibitors',
            subText: 'User will see all exhibitor and profiles.',
            value: 'view_all',
          },
          {
            title: 'View Specific Exhibitors',
            subText:
              'Limit visibility to exhibitors based on selected taxonomy.',
            value: 'taxonomy',
          },
        ],
      },
    ],
  },
  'Communication and Networking': {
    mainSubText: 'Allow users to connect and manage meeting related features.',
    key: 'attendee',
    fields: [
      {
        title: 'Allow Chat',
        subText: 'Enable in-app messaging with other users.',
        type: 'switch',
        inputField: null,
        radioFields: [],
      },
      {
        title: 'Allow Meeting Requests',
        subText: 'Enable user to send and receive meeting request',
        type: 'switch',
        inputField: null,
        radioFields: [],
      },
      {
        title: 'Limit Meeting Slots',
        subText: 'Restrict the number of meetings the user can have',
        type: 'switch',
        inputField: {
          title: 'Max Meeting Slots',
          subText: 'How many meetings this user can have.',
        },
        radioFields: [],
      },
    ],
  },
  'Communication Tools': {
    mainSubText: 'Enable this user to create content and receive support.',
    key: 'attendee',
    fields: [
      {
        title: 'Create Surveys and Communications',
        subText: 'Can create messages, polls, or surveys.',
        type: 'switch',
        inputField: null,
        radioFields: [],
      },
      {
        title: 'Receive In-App Support',
        subText: 'Get help from AI or admin directly in app.',
        type: 'switch',
        inputField: null,
        radioFields: [],
      },
    ],
  },
  'QR Code Access': {
    mainSubText: 'Give the user access to QR-based features.',
    key: 'attendee',
    fields: [
      {
        title: 'Show QR Code',
        subText: 'User can display their project QR for others to scan.',
        type: 'switch',
        inputField: null,
        radioFields: [],
      },
      {
        title: 'Scan QR Code',
        subText: 'Enable the user to scan other users QRs.',
        type: 'switch',
        inputField: null,
        radioFields: [],
      },
    ],
  },
  'Post Creation Access': {
    mainSubText:
      'Manage the users ability to create and share posts within the platform.',
    key: 'attendee',
    fields: [
      {
        title: 'Post Creation',
        subText: 'Allow the user to create and publish posts',
        type: 'switch',
        inputField: null,
        radioFields: [],
      },
    ],
  },
};

export const ExhibitorConfigurations: Record<
  string,
  {
    mainSubText: string;
    key: string;
    fields: PermissionField[];
  }
> = {
  'Agenda Management and Access': {
    mainSubText:
      'Manage how this exhibitor handles agenda-based meetings and capacity for attendee interactions.',
    key: 'exhibitor_manager',
    fields: [
      {
        title: 'Enable Agenda',
        subText:
          'Allow this exhibitor to appear in the agenda and accept meeting invites via exhibitor managers.',
        type: 'switch',
        inputField: null,
        radioFields: [],
      },
      {
        title: 'Simultaneous Agenda Limit',
        subText:
          'Limit how many simultaneous attendee meeting requests can be handled at once.',
        type: 'switch',
        inputField: {
          title: 'Max Meeting Slots',
          subText: 'How many meetings this exhibitor can have.',
        },
        radioFields: [],
      },
      {
        title: 'Total Meeting Slots',
        subText:
          'Set the maximum number of meeting slots available for this exhibitor across the project duration.',
        type: 'switch',
        inputField: {
          title: 'Max Meeting Slots',
          subText: 'How many meetings this exhibitor can have.',
        },
        radioFields: [],
      },
    ],
  },
  'Chat Permission': {
    mainSubText:
      'Control exhibitor’s ability to engage with attendees and other users via chat.',
    key: 'exhibitor_manager',
    fields: [
      {
        title: 'Allow Chat',
        subText: 'Allow exhibitor managers to communicate through in-app chat.',
        type: 'switch',
        inputField: null,
        radioFields: [],
      },
    ],
  },
  'Exhibitor Manager Access': {
    mainSubText: 'Control how many managers this exhibitor can assign.',
    key: 'exhibitor_manager',
    fields: [
      {
        title: 'Allow Exhibitor Managers',
        subText:
          'Allow this exhibitor to assign managers for managing their stand.',
        type: 'switch',
        inputField: null,
        radioFields: [],
      },
      {
        title: 'Max Number of Managers Allow',
        subText: 'Restrict the number of managers that exhibitor can have',
        type: 'switch',
        inputField: {
          title: 'Max Manager Limit',
          subText: 'Enter no of managers',
        },
        radioFields: [],
      },
    ],
  },
  'Products Management Access': {
    mainSubText: 'Control product listing capability for this exhibitor.',
    key: 'exhibitor_manager',
    fields: [
      {
        title: 'Enable Product Listing',
        subText: 'Exhibitor can create and display their products.',
        type: 'switch',
        inputField: null,
        radioFields: [],
      },
      {
        title: 'Product Limit',
        subText: 'Restrict the number of products can create that exhibitor.',
        type: 'switch',
        inputField: {
          title: 'Max Product Limit',
          subText: 'Enter no of product',
        },
        radioFields: [],
      },
    ],
  },
};

export const ExhibitorManagerPermissions: Record<
  string,
  {
    mainSubText: string;
    key: string;
    fields: PermissionField[];
  }
> = {
  'Agenda Management': {
    mainSubText: 'Let managers coordinate their exhibitor’s schedule.',
    key: 'exhibitor_manager',
    fields: [
      {
        title: 'Can Manage Agenda',
        subText:
          'Allow this manager to manage meetings on behalf of the exhibitor.',
        type: 'switch',
        inputField: null,
        radioFields: [],
      },
    ],
  },
  'Exhibitor Manager Invitations': {
    mainSubText:
      'Define whether this manager can expand the exhibitor’s team by inviting more managers.',
    key: 'exhibitor_manager',
    fields: [
      {
        title: 'Can Invite Managers',
        subText:
          'Allow this manager to invite other managers for this exhibitor.',
        type: 'switch',
        inputField: null,
        radioFields: [],
      },
    ],
  },
  'Modify Manager Permissions': {
    mainSubText:
      'Define whether exhibitor managers can manage the access levels of their fellow team members.',
    key: 'exhibitor_manager',
    fields: [
      {
        title: 'Can Edit Other Manager Permissions',
        subText:
          'Enable this to allow the exhibitor manager to view and edit permission settings for other managers assigned to the same exhibitor.',
        type: 'switch',
        inputField: null,
        radioFields: [],
      },
    ],
  },
};

export const PermissionConfigurations: Record<
  string,
  {
    mainSubText: string;
    key: string;
    fields: PermissionField[];
  }
> = {
  'Access Control': {
    mainSubText: 'Manage visibility of sessions, users, and exhibitors',
    key: 'guest_user',
    fields: [
      {
        title: 'Session Access',
        subText:
          'Choose whether this user can see all sessions or only specific ones based on assigned categories.',
        type: 'radio',
        inputField: null,
        radioFields: [
          {
            title: 'View All Sessions',
            subText: 'User will see every session available in the project.',
            value: 'view_all',
          },
          {
            title: 'View Specific Sessions',
            subText:
              'User will only see sessions tagged with selected taxonomy.',
            value: 'taxonomy',
          },
        ],
      },
      {
        title: 'Users List Access',
        subText:
          'Define if this user can browse all participants or only those within selected taxonomy.',
        type: 'radio',
        inputField: null,
        radioFields: [
          {
            title: 'View All Users',
            subText: 'User will see every session available in the project.',
            value: 'view_all',
          },
          {
            title: 'View Specific Users',
            subText:
              'Limit visibility to users belonging to specific taxonomies.',
            value: 'taxonomy',
          },
        ],
      },
      {
        title: 'Exhibitor List Access',
        subText:
          'Manage whether this user can view all exhibitors or only those assigned to specific categories.',
        type: 'radio',
        inputField: null,
        radioFields: [
          {
            title: 'View All Exhibitors',
            subText: 'User will see all exhibitor and profiles.',
            value: 'view_all',
          },
          {
            title: 'View Specific Exhibitors',
            subText:
              'Limit visibility to exhibitors based on selected taxonomy.',
            value: 'taxonomy',
          },
        ],
      },
    ],
  },
};
