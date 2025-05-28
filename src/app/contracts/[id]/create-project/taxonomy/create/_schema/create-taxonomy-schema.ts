import * as yup from 'yup';

export const getCreateTaxonomySchema = (
  languages: { contract_name: string }[],
) => {
  const labelShape: Record<string, yup.StringSchema> = {};

  languages.forEach(lang => {
    labelShape[lang.contract_name] = yup
      .string()
      .max(100, 'Must be at most 100 characters')
      .matches(/^\S.*\S$|^\S$/, 'Cannot start or end with spaces')
      .required(`Taxonomy title in ${lang.contract_name} is required`);
  });

  return yup.object().shape({
    filterInSearch: yup.string().required('Filter in search is required'),
    matchMakingAlgo: yup.string().required('Match making algo is required'),
    labels: yup.object().shape(labelShape),
    portingCode: yup
      .string()
      .max(100, 'Must be at most 100 characters')
      .matches(/^\S.*\S$|^\S$/, 'Cannot start or end with spaces')
      .required('Porting Code is required'),
    usage: yup
      .array()
      .of(yup.string().required())
      .min(1, 'At least one usage must be selected')
      .required('Usage is required'),
    visibility: yup.string().required('Visibility is required'),
  });
};
