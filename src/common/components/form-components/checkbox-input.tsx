import { FC } from 'react';
import { CheckboxInputProps } from '@/common/types/interfaces/project/property-management';

const CheckboxInput: FC<CheckboxInputProps> = ({
  error,
  helperText,
  options,
  value = [],
  onChange,
  onBlur,
  name,
  label,
  required,
  className,
  ...rest
}) => {
  const handleCheckboxChange = (optionValue: string) => {
    const newValue = value.includes(optionValue)
      ? value.filter(val => val !== optionValue)
      : [...value, optionValue];

    onChange({
      target: {
        name,
        value: newValue,
      },
    });
  };

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
            htmlFor={`checkbox-${name}-${index}`}
            className={`flex items-center px-4 rounded-sm dark:border-gray-700 w-full cursor-pointer ${value.includes(option.value) ? 'border border-blue-500 bg-blue-100' : 'border border-gray-200 '}`}
          >
            <input
              id={`checkbox-${name}-${index}`}
              type='checkbox'
              name={name}
              value={option.value}
              checked={value.includes(option.value)}
              onChange={() => handleCheckboxChange(option.value)}
              onBlur={onBlur}
              className='w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 rounded-full transition-all duration-300'
              {...rest}
            />
            <span className='w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
              {option.label}
            </span>
          </label>
        ))}
      </div>
      {error && <p className='text-red-500 text-sm'>{helperText}</p>}
    </div>
  );
};

export default CheckboxInput;
