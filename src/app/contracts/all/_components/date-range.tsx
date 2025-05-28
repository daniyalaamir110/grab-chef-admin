import DateInput from '@/common/components/form-components/date-input';
import { DateRangeProps } from '@/common/types/interfaces/common';
import { FC } from 'react';

const DateRange: FC<DateRangeProps> = ({
  start_date,
  end_date,
  className,
  setStartDate,
  setEndDate,
}) => {
  return (
    <div
      className={`flex sm:items-center sm:flex-row flex-col sm:gap-4 pt-1 font-semibold ${className && className}`}
    >
      <div className='flex items-center sm:justify-normal justify-between gap-2'>
        <p>From</p>
        <DateInput
          date={start_date}
          handleDate={start_date => setStartDate(start_date)}
        />
      </div>
      <div className='flex items-center sm:justify-normal justify-between gap-2'>
        <p className='pr-5 sm:pr-0'>To</p>
        <DateInput
          date={end_date}
          handleDate={end_date => setEndDate(end_date)}
        />
      </div>
    </div>
  );
};

export default DateRange;
