import * as yup from 'yup';

export const createSettingsSchema = yup.object().shape({
  is_visible: yup.boolean(),
  access_rule: yup.string().required('Access rule is required'),
});
