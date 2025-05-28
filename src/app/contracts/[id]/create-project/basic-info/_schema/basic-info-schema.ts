import * as yup from 'yup';

export const basicInfoSchema = yup.object({
  name: yup
    .string()
    .max(100, 'Must be at most 100 characters')
    .matches(/^\S.*\S$|^\S$/, 'Cannot start or end with spaces')
    .required('Name is required'),
  description: yup
    .string()
    .max(1500, 'Must be at most 1500 characters')
    .matches(/^\S.*\S$|^\S$/, 'Cannot start or end with spaces')
    .required('Description is required'),
  start_date: yup
    .date()
    .typeError('Start date must be a valid date')
    .required('Start date is required'),
  end_date: yup
    .date()
    .typeError('End date must be a valid date')
    .required('End date is required')
    .min(yup.ref('start_date'), 'End date cannot be before start date'),
  location: yup
    .string()
    .max(100, 'Must be at most 100 characters')
    .matches(/^\S.*\S$|^\S$/, 'Cannot start or end with spaces')
    .required('Location is required'),
  banner_image_url: yup.string().required('Banner is required'),
});
