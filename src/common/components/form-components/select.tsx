'use client';

import React from 'react';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import { CustomSelectProps } from '../../types/interfaces/common';

const SelectInput: React.FC<CustomSelectProps> = ({
  label,
  name,
  required,
  className,
  options,
  value,
  onChange,
  error,
  helperText,
}) => {
  return (
    <div className='flex flex-col gap-2'>
      <div className='flex gap-1'>
        <label className='text-sm'>{label}</label>
        {required && <span className='text-red-500'>*</span>}
      </div>
      <Select
        name={name}
        value={value as string}
        onValueChange={onChange}
      >
        <SelectTrigger
          className={`p-4 border rounded-lg text-textPrimary ${className || ''}`}
        >
          <SelectValue placeholder='Select category' />
        </SelectTrigger>

        <SelectContent className='bg-white rounded-md shadow-lg text-gray-500 hover:text-gray-500'>
          {options?.map((option, index) => (
            <SelectItem
              key={index}
              value={option.value}
              className='cursor-pointer'
            >
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {error && <p className='text-red-500 text-sm'>{helperText}</p>}
    </div>
  );
};

export default SelectInput;
