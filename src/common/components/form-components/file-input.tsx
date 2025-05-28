import imgUpload from '../../../../public/assets/icons/img-upload.svg';
import Image from 'next/image';
import React from 'react';
import { CustomFileInputProps } from '../../types/interfaces/common';

const FileInput: React.FC<CustomFileInputProps> = ({
  label,
  required,
  format,
  text,
  setFieldValue,
  formikName,
  acceptedFormat,
  error,
  helperText,
  setFieldError,
  orientationText,
  ...rest
}) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;

    if (file && !file.type.startsWith('image/')) {
      setFieldError(formikName, 'Invalid file format');
      setFieldValue(formikName, null); // Clear invalid file
      return;
    }

    setFieldValue(formikName, file);
  };
  return (
    <div className='flex flex-col gap-2'>
      <div className='flex gap-1'>
        <label className='text-sm'>{label}</label>
        {required && <span className='text-red-500'>*</span>}
      </div>
      <div className='flex items-center justify-center w-full'>
        <label
          htmlFor={formikName}
          className='flex flex-col items-center justify-center w-full h-64 border rounded-lg cursor-pointer hover:bg-gray-100 duration-200'
        >
          <div className='flex flex-col items-center justify-center pt-5 pb-6 max-w-80 w-4/5 text-center'>
            <Image
              src={imgUpload}
              alt='upload-icon'
              height={30}
              width={30}
            />
            <p className='mb-1 text-sm'>{text}</p>
            <p className='text-xs text-gray-500 dark:text-gray-400'>{format}</p>
            <p className='text-xs text-gray-500 dark:text-gray-400'>
              {orientationText}
            </p>
          </div>
          <input
            id={formikName}
            type='file'
            className='hidden'
            onChange={handleFileChange}
            accept={acceptedFormat}
            {...rest}
          />
        </label>
      </div>
      {error && <p className='text-red-500 text-sm'>{helperText}</p>}
    </div>
  );
};

export default FileInput;
