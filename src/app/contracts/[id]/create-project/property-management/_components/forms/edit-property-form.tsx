import Input from '@/common/components/form-components/input-field';
import RadioButtonInput from '@/common/components/form-components/radio-btn-input';
import SelectInput from '@/common/components/form-components/select';
import {
  PropertyFieldEnum,
  PropertyVisibilityEnum,
} from '@/common/types/enums/project/property-management';
import { EditPropertyFormProps } from '@/common/types/interfaces/project/property-management';
import { Button } from '@/components/ui/button';
import { enumToOptions } from '@/lib/convert-enum-into-key-value-pair';
import { useFormik } from 'formik';
import { useParams, useSearchParams } from 'next/navigation';
import { FC } from 'react';
import { useEditCustomProperty } from '../../_mutations/edit-property.mutation';
import { CreatePropertySchema } from '../../_schema/create-property-schema';

const EditPropertyForm: FC<EditPropertyFormProps> = ({
  setOpenModal,
  property,
}) => {
  const fieldOptions = enumToOptions(PropertyFieldEnum);

  const visibilityOptions = enumToOptions(PropertyVisibilityEnum);

  const params = useParams();
  const searchParams = useSearchParams();
  const type = Array.from(searchParams.keys())[0];

  const { mutate, isPending } = useEditCustomProperty(
    params.id as string,
    params['project-id'] as string,
    property?.id as string,
  );

  const initialValues = {
    field: property?.field_type,
    label: property?.label,
    placeholder: property?.placeholder,
    visibility: property?.visibility,
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: CreatePropertySchema,
    onSubmit: values => {
      mutate(
        {
          fieldType: values.field as string,
          label: values.label as string,
          placeholder: values.placeholder as string,
          visibility: values.visibility as string,
          type: type,
        },
        {
          onSuccess() {
            formik.resetForm();
            setOpenModal(false);
          },
        },
      );
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className='space-y-4'
    >
      <SelectInput
        name='field'
        options={fieldOptions}
        className='w-full cursor-pointer py-6'
        label='Select Field'
        required={true}
        value={formik.values.field}
        onChange={value => formik.setFieldValue('field', value)}
        error={formik.touched.field && Boolean(formik.errors.field)}
        helperText={formik.touched.field ? formik.errors.field : ''}
      />
      <Input
        label='Email Field Label'
        required={true}
        name='label'
        value={formik.values.label}
        placeholder='Job Title'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.label && Boolean(formik.errors.label)}
        helperText={formik.touched.label ? formik.errors.label : ''}
      />
      <Input
        label='Email Placeholder'
        required={true}
        name='placeholder'
        value={formik.values.placeholder}
        placeholder='Enter your job title'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.placeholder && Boolean(formik.errors.placeholder)}
        helperText={formik.touched.placeholder ? formik.errors.placeholder : ''}
      />
      <RadioButtonInput
        options={visibilityOptions}
        label='Visibility'
        name='visibility'
        required={true}
        className='grid grid-cols-2 gap-2'
        value={formik.values.visibility}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.visibility && Boolean(formik.errors.visibility)}
        helperText={formik.touched.visibility ? formik.errors.visibility : ''}
      />
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
            disabled={isPending}
            type='submit'
          >
            Update Property
          </Button>
        </div>
      </div>
    </form>
  );
};

export default EditPropertyForm;
