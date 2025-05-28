'use client';

import { format } from 'date-fns';

import calendarIcon from '../../../../public/assets/icons/calendar.svg';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { FC, useState } from 'react';
import { DateInputProps } from '../../types/interfaces/common';
import Image from 'next/image';

const DateInput: FC<DateInputProps> = ({
  placeHolder,
  label,
  date,
  error,
  helperText,
  handleDate,
  disableDate,
  isRequired,
  className,
}) => {
  const [isDateOpen, setDateOpen] = useState<boolean>(false);
  return (
    <div
      className='flex flex-col gap-y-2 mb-3 w-full'
      translate='yes'
    >
      <div className='flex flex-row gap-x-1'>
        {label && <label className='text-sm font-normal '>{label}&nbsp;</label>}
        <p>{isRequired && <span className='text-red-500'>*</span>}</p>
      </div>
      <Popover
        open={isDateOpen}
        onOpenChange={setDateOpen}
      >
        <PopoverTrigger asChild>
          <Button
            className={cn(
              'justify-between border font-normal text-black bg-white hover:bg-white rounded-lg py-4.5',
              !date && 'text-muted-foreground',
              className,
            )}
          >
            {date ? (
              format(date, 'PPP')
            ) : (
              <span className='text-gray-500'>
                {placeHolder ?? <p translate='yes'>Select</p>}
              </span>
            )}
            <Image
              src={calendarIcon}
              alt='calendar-icon'
              height={20}
              width={20}
            />
          </Button>
        </PopoverTrigger>
        {error && (
          <p
            className={`flex items-start text-xs font-normal ${
              error ? 'text-red-500' : 'text-error'
            }`}
          >
            {helperText}
          </p>
        )}
        <PopoverContent
          className='w-full p-0 bg-white'
          align='start'
        >
          <Calendar
            mode='single'
            selected={date ?? undefined}
            onSelect={value => {
              if (handleDate) {
                handleDate(value);
              }
              setDateOpen(false);
            }}
            initialFocus
            disabled={disableDate}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default DateInput;
