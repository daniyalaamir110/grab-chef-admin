import { Role } from '@/common/enums';

export type User = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  country: string;
  city: string;
  zip_code: string;
  profile_url: string;
  password: string;
  google_id: string;
  role: Role;
  is_verified: boolean;
};
