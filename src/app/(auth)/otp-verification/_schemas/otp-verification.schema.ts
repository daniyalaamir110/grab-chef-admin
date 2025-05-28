import * as Yup from 'yup';

export const otpVerificationSchema = Yup.object().shape({
  otp: Yup.string()
    .matches(/^\d{6}$/, 'OTP must be a 6-digit number') // Ensures exactly 6 digits
    .required('OTP is required'),
});

export type OtpVerificationPayload = Yup.InferType<
  typeof otpVerificationSchema
>;
