export const CreateProject = [
  {
    title: 'Basic Project Information',
    subText: 'Start by filling in the essential details about your project',
    btnText: 'Create',
    editText: 'Edit',
    link: '/basic-info',
    tab: 'basic_project_info',
  },
  {
    title: 'Project Settings',
    subText:
      'Configure project visibility, access rules, and additional settings.',
    btnText: 'Add Setting',
    editText: 'Edit',
    link: '/settings',
    tab: 'project_settings',
  },
  {
    title: 'Create Custom Property (optional)',
    subText: 'Create custom properties to collect specific details ',
    btnText: 'Create Property',
    editText: 'Edit',
    link: '/property-management?attendee=true',
    tab: 'custom_properties',
  },
  {
    title: 'Create Taxonomies (optional)',
    subText: 'Create custom properties to collect specific details ',
    btnText: 'Create Property',
    editText: 'Edit',
    link: '/taxonomy',
    tab: 'taxonomies',
  },
  {
    title: 'Choose Registration Forms',
    subText: 'Select the type of registration forms you need for this project',
    btnText: 'Select Type',
    editText: 'Edit',
    link: '',
    tab: 'choose_registration',
  },
  {
    title: 'Add Permissions',
    subText: 'Manage Access and  Roles for attendee, exhibitor and guest users',
    btnText: 'Add Permission',
    editText: 'Edit',
    link: '/add-permissions?attendee=true',
    tab: 'add_permissions',
  },
];

export const ProjectAccessRoles = [
  {
    title: 'Free Access',
    subText: 'Anyone can join without restrictions.',
    value: 'free_access',
  },
  {
    title: 'Project Access',
    subText: 'Only users manually added by the admin can join.',
    value: 'project_access',
  },
  {
    title: 'With Admin Approval',
    subText:
      'Users can request to join, but require admin approval before accessing the project dashboard.',
    value: 'admin_approval',
  },
];

export const NetworkingFeatures = [
  {
    title: 'Private Chat ',
    subText: 'Enable direct messaging between attendees.',
  },
  {
    title: 'Call One-to-One',
    subText: 'Provide voice calling options',
  },
  {
    title: 'Matchmaking Algorithm',
    subText: 'Suggest relevant connections based on attendee preferences',
  },
  {
    title: 'Video Call Support ',
    subText: 'Allow video call for networking and sessions',
  },
  {
    title: 'Affinity Rate',
    subText: 'Match users based on shared interests or affinity levels',
  },
];

export const BadgeFeature = [
  {
    title: 'Enable Badge',
    subText: 'Generate digital or printable badges for participants',
  },
  {
    title: 'Enable QR Badge Scan ',
    subText: 'Allow badge scanning for attendance or verification',
  },
];

export const Communication = [
  {
    title: 'Email and Survey System',
    subText: 'Send emails and collect feedback through surveys',
  },
  {
    title: 'Enable Social Wall',
    subText:
      'Allow users to post and interact in a social feed within the project',
  },
];

export const PropertyManagementTabs = [
  { title: 'Attendee Property', query: 'attendee' },
  { title: 'Exhibitor Property', query: 'exhibitor_manager' },
  { title: 'Session Property', query: 'session' },
];

export const AttendeePropertyTableHeaders = [
  'Property Name',
  'Property Type',
  'Visibility',
  'Actions',
];

export const PermissionTabs = [
  { title: 'Attendee', query: 'attendee' },
  { title: 'Exhibitor', query: 'exhibitor_manager' },
  { title: 'Guest User', query: 'guest_user' },
];
