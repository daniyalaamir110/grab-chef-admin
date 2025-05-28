import { FC } from 'react';
import { RadioButtonInputProps } from '@/common/types/interfaces/project/property-management';

const RadioButtonInput: FC<RadioButtonInputProps> = ({
  error,
  helperText,
  options,
  value,
  onChange,
  onBlur,
  name,
  label,
  required,
  className,
  subText,
  ...rest
}) => {
  return (
    <div className='flex flex-col gap-2'>
      <div className='flex gap-1'>
        <label className='text-sm'>{label}</label>
        {required && <span className='text-red-500'>*</span>}
      </div>

      <div className={className}>
        {options.map((option, index) => (
          <label
            key={index}
            htmlFor={`radio-${name}-${index}`}
            className={`flex items-center px-2 py-4 rounded-sm w-full cursor-pointer ${value === option.value ? 'border border-blue-500 bg-blue-100' : 'border border-gray-200'}`}
          >
            <input
              id={`radio-${name}-${index}`}
              type='radio'
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={onChange}
              onBlur={onBlur}
              className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
              {...rest}
            />
            <div>
              <span className='w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                {option.label}
              </span>
              {subText && <p className='text-gray-500'>{subText}</p>}
            </div>
          </label>
        ))}
      </div>

      {error && <p className='text-red-500 text-sm'>{helperText}</p>}
    </div>
  );
};

export default RadioButtonInput;
