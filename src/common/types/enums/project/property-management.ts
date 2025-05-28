export enum PropertyFieldEnum {
  'Short Text Field' = 'short_text',
  'Long Text Field' = 'long_text',
  Gallery = 'gallery',
  Image = 'image',
  File = 'file',
  Link = 'link',
  Number = 'number',
}

export enum PropertyVisibilityEnum {
  'Public (Visible to all users)' = 'public',
  'Private (Visible only to the admin)' = 'private',
}

export enum Visibility {
  'User' = 'public',
  'Admin' = 'private',
}

export enum PropertyTypeEnum {
  'Attendee' = 'attendee',
  'Exhibitor Manager' = 'exhibitor_manager',
  'Session' = 'session',
}
