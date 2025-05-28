export interface Feature {
  id: number;
  name: string;
  description: string;
  category: string;
  updated_at: string;
  is_enabled?: boolean;
}

export interface FeaturesResponse {
  [key: string]: Feature;
}

export interface ProjectFeature {
  feature_id: number;
  is_enabled: boolean;
}

export interface ProjectFeatureSettingsPayload {
  is_visible: boolean;
  access_rule: string;
  features: ProjectFeature[];
}

export interface ProjectSettingsResponse {
  id: number;
  access_rule: string;
  is_visible: boolean;
  created_at: string;
  updated_at: string;
  features: FeaturesResponse;
}
