import * as yup from 'yup';

export const CreatePropertySchema = yup.object().shape({
  field: yup
    .string()
    .max(100, 'Must be at most 100 characters')
    .matches(/^\S.*\S$|^\S$/, 'Cannot start or end with spaces')
    .required('Field is required'),
  label: yup
    .string()
    .max(100, 'Must be at most 100 characters')
    .matches(/^\S.*\S$|^\S$/, 'Cannot start or end with spaces')
    .required('Label is required'),
  placeholder: yup
    .string()
    .max(100, 'Must be at most 100 characters')
    .matches(/^\S.*\S$|^\S$/, 'Cannot start or end with spaces')
    .required('Placeholder is required'),
  visibility: yup.string().required('Visibility is required'),
});
