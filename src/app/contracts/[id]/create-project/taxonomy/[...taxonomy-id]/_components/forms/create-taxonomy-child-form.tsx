import Input from '@/common/components/form-components/input-field';
import { useGetLanguages } from '@/common/services/queries/get-languages.query';
import { useFormik } from 'formik';
import React, { FC } from 'react';
import { getCreateChildTaxonomySchema } from '../../_schema/create-taxonomy-child-schema';
import { Button } from '@/components/ui/button';
import { useCreateTaxonomyChild } from '../../_mutations/create-taxonomy-child.mutation';
import { useParams } from 'next/navigation';
import { BasicModalProps } from '@/common/types/interfaces/common';
import DataLoader from '@/common/components/common/data-loader';

const CreateTaxonomyChild: FC<Partial<BasicModalProps>> = ({
  setOpenModal,
}) => {
  // Fetch all languages
  const { data, isLoading } = useGetLanguages();

  const params = useParams();

  const taxonomyId = params['taxonomy-id']?.[
    params['taxonomy-id'].length - 1
  ] as string;

  //   Create taxonomy child mutation
  const { mutate, isPending } = useCreateTaxonomyChild(
    params.id as string,
    params['project-id'] as string,
    taxonomyId,
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
          values: langArray,
          portingCode: values.portingCode.toUpperCase(),
        },
        {
          onSuccess() {
            formik.resetForm();
            if (setOpenModal) {
              setOpenModal(false);
            }
          },
        },
      );
    },
  });
  return (
    <>
      {isLoading ? (
        <DataLoader className='h-[55vh]' />
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
                onClick={() => {
                  if (setOpenModal) {
                    setOpenModal(false);
                  }
                }}
              >
                Cancel
              </Button>
              <Button
                type='submit'
                disabled={isPending}
              >
                Add
              </Button>
            </div>
          </div>
        </form>
      )}
    </>
  );
};

export default CreateTaxonomyChild;
