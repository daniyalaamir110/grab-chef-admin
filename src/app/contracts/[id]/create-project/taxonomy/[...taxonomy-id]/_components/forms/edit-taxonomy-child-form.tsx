import { useGetLanguages } from '@/common/services/queries/get-languages.query';
import { EditChildTaxonomyModalProps } from '@/common/types/interfaces/project/taxonomies';
import React, { FC, useEffect } from 'react';
import { getCreateChildTaxonomySchema } from '../../_schema/create-taxonomy-child-schema';
import { useFormik } from 'formik';
import { Button } from '@/components/ui/button';
import Input from '@/common/components/form-components/input-field';
import DataLoader from '@/common/components/common/data-loader';
import { useEditTaxonomyChild } from '../../_mutations/edit-taxonomy-child.mutation';
import { useParams } from 'next/navigation';

const EditTaxonomyChild: FC<EditChildTaxonomyModalProps> = ({
  taxonomy,
  setOpenModal,
}) => {
  // Fetch all languages
  const { data, isLoading } = useGetLanguages();

  const params = useParams();

  // Edit taxonomy child mutation
  const { mutate, isPending } = useEditTaxonomyChild(
    params.id as string,
    params['project-id'] as string,
  );

  const initialValues = {
    labels: Object.fromEntries(
      (data?.languages ?? []).map(lang => [lang.contract_name, '']),
    ),
    portingCode: '',
  };

  const validationSchema =
    data?.languages && getCreateChildTaxonomySchema(data?.languages);

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: values => {
      console.log(values);
      const langArray = Object.entries(values.labels)
        .map(([langName, value]) => {
          const lang = data?.languages.find(l => l.contract_name === langName);
          return {
            language_id: lang?.contract_id ?? null,
            value,
          };
        })
        .filter(item => item.language_id !== null);
      mutate(
        {
          taxonomy_id: taxonomy?.id?.toString() || '',
          values: langArray,
          portingCode: values.portingCode.toUpperCase(),
        },
        {
          onSuccess() {
            setOpenModal(false);
          },
        },
      );
    },
  });

  useEffect(() => {
    if (data) {
      formik.setValues({
        labels: Object.fromEntries(
          (data?.languages ?? []).map(lang => [
            lang.contract_name,
            taxonomy?.values?.find(l => l.language_name === lang.contract_name)
              ?.value || '',
          ]),
        ),
        portingCode: taxonomy?.porting_code || '',
      });
    }
  }, [taxonomy, data]);

  return (
    <>
      {isLoading || !taxonomy ? (
        <DataLoader />
      ) : (
        <form
          onSubmit={formik.handleSubmit}
          className='space-y-4'
        >
          <Input
            label='Enter Porting Code'
            value={formik.values.portingCode || ''}
            required={true}
            name='portingCode'
            placeholder='TECH-001'
            className='uppercase'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.portingCode && Boolean(formik.errors.portingCode)
            }
            helperText={
              formik.touched.portingCode ? formik.errors.portingCode : ''
            }
          />
          {data?.languages.map((input, index) => (
            <Input
              key={index}
              label={`Enter Taxonomy Title (in ${input.contract_name})`}
              value={formik.values.labels[input.contract_name] || ''}
              required={true}
              name={`labels.${input.contract_name}`} // important for Formik to track the field
              placeholder='Technology'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.labels?.[input.contract_name] &&
                Boolean(formik.errors.labels?.[input.contract_name])
              }
              helperText={
                formik.touched.labels?.[input.contract_name]
                  ? formik.errors.labels?.[input.contract_name]
                  : ''
              }
            />
          ))}
          <div className='flex justify-end'>
            <div className='flex items-center gap-2'>
              <Button
                type='button'
                className='bg-white hover:bg-white border border-primary-hex text-primary-hex'
                onClick={() => setOpenModal(false)}
              >
                Cancel
              </Button>
              <Button
                type='submit'
                disabled={isPending}
              >
                Update
              </Button>
            </div>
          </div>
        </form>
      )}
    </>
  );
};

export default EditTaxonomyChild;
