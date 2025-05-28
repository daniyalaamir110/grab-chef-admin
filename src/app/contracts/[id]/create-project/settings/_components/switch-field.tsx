import { Switch } from '@/components/ui/switch';
import React, { FC } from 'react';

export interface SwitchFieldProps {
  text?: string;
  subText?: string;
  switchText?: string;
  field: boolean;
  setField: (field: boolean) => void;
}

const SwitchField: FC<SwitchFieldProps> = ({
  text,
  subText,
  switchText,
  field,
  setField,
}) => {
  return (
    <div className='flex items-center justify-between p-4'>
      <div>
        <p className='text-lg font-semibold'>{text}</p>
        <p className='text-gray-500'>{subText}</p>
      </div>
      <div className='flex items-center gap-2'>
        {switchText && <p className='text-sm font-semibold'>{switchText}</p>}
        <Switch
          checked={field}
          onCheckedChange={setField}
        />
      </div>
    </div>
  );
};

export default SwitchField;
