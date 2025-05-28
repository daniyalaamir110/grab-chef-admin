import React from 'react';

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  required?: boolean;
  error?: boolean;
  helperText?: string;
}

const Input: React.FC<CustomInputProps> = ({
  label,
  required,
  className,
  error,
  helperText,
  ...rest
}) => {
  return (
    <div className='flex flex-col gap-2'>
      <div className='flex gap-1'>
        <label className='text-sm'>{label}</label>
        {required && <span className='text-red-500'>*</span>}
      </div>
      <input
        className={`border rounded-lg p-4 focus:outline-primary duration-200 ${className ? className : ''}`}
        {...rest}
      />
      {error && <p className='text-red-500 text-sm'>{helperText}</p>}
    </div>
  );
};

export default Input;
