import * as Yup from 'yup';

export const forgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email().required('Email is required'),
});

export type ForgotPasswordPayload = Yup.InferType<typeof forgotPasswordSchema>;
