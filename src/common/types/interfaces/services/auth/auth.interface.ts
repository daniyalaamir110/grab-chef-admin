export interface LoginResponse {
  role: string;
  accessToken: string;
  refreshToken: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface ForgotPasswordResponse {
  message: string;
}

export interface ForgotPasswordPayload {
  email: string;
}

export interface VerifyOtpResponse {
  message: string;
}

export interface VerifyOtpPayload {
  email: string | null;
  otp: string;
}

export interface ResetPasswordResponse {
  message: string;
}

export interface ResetPasswordPayload {
  email: string;
  password: string;
  otp: string;
}
