import React, { useState } from 'react';
import { Input as InputComponent } from '@/components/ui/input';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

interface PasswordInputProps extends React.ComponentProps<'input'> {
  label?: string;
  error?: string;
  isRequired?: boolean;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  label,
  error,
  isRequired,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <div className='flex flex-col gap-1 relative'>
      {label && (
        <label
          htmlFor={props?.name}
          className='text-sm font-normal text-grey-100'
        >
          {label} {isRequired && <span className='text-red-500'>*</span>}
        </label>
      )}

      <div className='relative'>
        <InputComponent
          {...props}
          type={showPassword ? 'text' : 'password'}
          className='bg-white px-3 py-5 border-primary-80 placeholder:text-grey-50 text-xs pr-10'
        />
        <button
          type='button'
          onClick={() => setShowPassword(prev => !prev)}
          className='absolute right-3 top-1/2 -translate-y-1/2 text-grey-50'
        >
          {showPassword ? (
            <AiOutlineEyeInvisible
              size={20}
              className='cursor-pointer'
            />
          ) : (
            <AiOutlineEye
              size={20}
              className='cursor-pointer'
            />
          )}
        </button>
      </div>

      {error && <div className='text-red-500 text-sm font-normal'>{error}</div>}
    </div>
  );
};

export default PasswordInput;
