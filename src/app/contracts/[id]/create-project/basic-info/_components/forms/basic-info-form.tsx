import DateInput from '@/common/components/form-components/date-input';
import FileInput from '@/common/components/form-components/file-input';
import Input from '@/common/components/form-components/input-field';
import TextArea from '@/common/components/form-components/text-area-input';
import { useUploadFile } from '@/common/services/mutations/upload-file.mutation';
import { CreateBasicInfoPayload } from '@/common/types/interfaces/project/project';
import { Button } from '@/components/ui/button';
import { useFormik } from 'formik';
import moment from 'moment';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import { FC, useEffect } from 'react';
import { RxCross1 } from 'react-icons/rx';
import { useCreateBasicInfo } from '../../_mutations/create-basic-info.mutation';
import { basicInfoSchema } from '../../_schema/basic-info-schema';
import { disableDate } from '@/lib/disableDate';

export interface BasicInfoFormProps {
  basicInfoObj: CreateBasicInfoPayload | undefined;
}

const BasicInfoForm: FC<BasicInfoFormProps> = ({ basicInfoObj }) => {
  const params = useParams();

  // Create basic info
  const { mutate, isPending } = useCreateBasicInfo(
    params.id as string,
    params['project-id'] as string,
    basicInfoObj?.name ? true : false,
  );

  //   Upload file
  const { mutate: uploadFile, isPending: isFileUploadPending } =
    useUploadFile();

  const initialValues = {
    name: '',
    description: '',
    start_date: null as Date | null,
    end_date: null as Date | null,
    location: '',
    banner_image_url: null as File | null | string,
  };

  const router = useRouter();

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: basicInfoSchema,
    onSubmit: values => {
      const formData = new FormData();
      formData.append('files', values.banner_image_url || '');
      if (values.banner_image_url instanceof File) {
        uploadFile(formData, {
          async onSuccess(data) {
            const payload = {
              ...values,
              start_date: moment(values.start_date).format('YYYY-MM-DD'),
              end_date: moment(values.end_date).format('YYYY-MM-DD'),
              banner_image_url: data.urls[0],
            };

            mutate(payload, {
              onSuccess(data) {
                formik.resetForm();
                router.push(
                  `/contracts/${params.id}/create-project/${data.id}`,
                );
              },
            });
          },
        });
      } else {
        const payload = {
          ...values,
          start_date: moment(values.start_date).format('YYYY-MM-DD'),
          end_date: moment(values.end_date).format('YYYY-MM-DD'),
          banner_image_url: values.banner_image_url,
        };

        mutate(payload, {
          onSuccess(data) {
            formik.resetForm();
            router.push(`/contracts/${params.id}/create-project/${data.id}`);
          },
        });
      }
    },
  });

  useEffect(() => {
    if (basicInfoObj?.name) {
      formik.setValues({
        name: basicInfoObj.name,
        description: basicInfoObj.description,
        location: basicInfoObj.location,
        start_date: new Date(basicInfoObj.start_date || ''),
        end_date: new Date(basicInfoObj.end_date || ''),
        banner_image_url: basicInfoObj.banner_image_url,
      });
    }
  }, [basicInfoObj]);

  const imageUrl =
    formik.values.banner_image_url instanceof File
      ? URL.createObjectURL(formik.values.banner_image_url as File)
      : formik.values.banner_image_url;

  return (
    <form
      onSubmit={formik.handleSubmit}
      className='space-y-4'
    >
      <Input
        label='Project Name'
        name='name'
        required={true}
        value={formik.values.name}
        placeholder='E.g, Annual Tech fair 2024'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name ? formik.errors.name : ''}
      />
      <TextArea
        label='Project Description'
        name='description'
        placeholder='Write a overview or agenda for the project.'
        required={true}
        value={formik.values.description}
        onChange={formik.handleChange}
        error={formik.touched.description && Boolean(formik.errors.description)}
        helperText={formik.touched.description ? formik.errors.description : ''}
      />
      <div className='flex items-center gap-4 w-full'>
        <DateInput
          label='Start Date'
          placeHolder='Select Date'
          date={formik.values.start_date}
          isRequired={true}
          handleDate={value => formik.setFieldValue('start_date', value)}
          error={formik.touched.start_date && Boolean(formik.errors.start_date)}
          helperText={formik.touched.start_date ? formik.errors.start_date : ''}
          disableDate={disableDate}
        />
        <DateInput
          label='End Date'
          placeHolder='Select Date'
          date={formik.values.end_date}
          isRequired={true}
          handleDate={value => formik.setFieldValue('end_date', value)}
          error={formik.touched.end_date && Boolean(formik.errors.end_date)}
          helperText={formik.touched.end_date ? formik.errors.end_date : ''}
          disableDate={disableDate}
        />
      </div>
      <Input
        label='Project Location'
        name='location'
        required={true}
        value={formik.values.location}
        placeholder='E.g., Grand Conference Hall, New York'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.location && Boolean(formik.errors.location)}
        helperText={formik.touched.location ? formik.errors.location : ''}
      />
      {formik.values.banner_image_url ? (
        <div className='w-full rounded-lg relative'>
          <button
            className='cursor-pointer rounded-full p-1 absolute -top-2 -right-2 bg-white text-red-500 border border-red-500'
            onClick={() => formik.setFieldValue('banner_image_url', null)}
          >
            <RxCross1 />
          </button>
          <div className='flex justify-center w-full'>
            <div className='w-[1100px] h-[500px]'>
              <Image
                src={imageUrl || ''}
                alt='banner'
                className='aspect-square w-full h-full rounded-lg'
                height={500}
                width={500}
              />
            </div>
          </div>
        </div>
      ) : (
        <FileInput
          label='Banner'
          text='Click here to upload Banner'
          format='The format must be a png/jpg format. (Max. File size: 5 MB).'
          orientationText='Upload a 1100 x 500 px image to avoid resizing or distortion.'
          formikName='banner_image_url'
          setFieldValue={formik.setFieldValue}
          setFieldError={formik.setFieldError}
          error={
            formik.touched.banner_image_url &&
            Boolean(formik.errors.banner_image_url)
          }
          helperText={
            formik.touched.banner_image_url
              ? formik.errors.banner_image_url
              : ''
          }
          required={true}
          accept='image/*'
        />
      )}
      <div className='flex justify-end gap-4 '>
        <Button
          type='button'
          onClick={() =>
            router.push(
              `/contracts/${params.id}/create-project/${params['project-id'] ?? ''}`,
            )
          }
          className='bg-white hover:bg-white border border-primary-hex text-primary-hex'
        >
          Cancel
        </Button>
        <Button
          disabled={isPending || isFileUploadPending}
          type='submit'
        >
          Save
        </Button>
      </div>
    </form>
  );
};

export default BasicInfoForm;
