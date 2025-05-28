import * as Yup from 'yup';

export const createPasswordSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters long')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/\d/, 'Password must contain at least one number (0-9)')
    .matches(
      /[!@#$%^&*]/,
      'Password must contain at least one special character (!@#$%^&*)',
    )
    .required('Password is required'),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Confirm password is required'),
});

export type CreatePasswordPayload = Yup.InferType<typeof createPasswordSchema>;
