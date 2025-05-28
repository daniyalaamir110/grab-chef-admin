import React from 'react';
import { Input as InputComponent } from '@/components/ui/input';

interface InputProps extends React.ComponentProps<'input'> {
  label?: string;
  error?: string;
  isRequired?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  error,
  isRequired,
  ...props
}) => {
  return (
    <div className='flex flex-col gap-1'>
      {label && (
        <label
          htmlFor={props?.name}
          className='text-sm font-normal text-grey-100'
        >
          {label} {isRequired && <span className='text-red-500'>*</span>}
        </label>
      )}
      <InputComponent
        {...props}
        className='bg-white px-3 py-5 border-primary-80 placeholder:text-grey-50 text-xs'
      />
      {error && <div className='text-red-500 text-sm font-normal'>{error}</div>}
    </div>
  );
};

export default Input;
