'use client';

import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface AnalyticsCardProps {
  title: string;
  value: string;
  image: string;
  progress: number;
}

export function AnalyticsCard({ data }: { data: AnalyticsCardProps }) {
  const circumference = 2 * Math.PI * 20;
  const strokeDasharray = circumference;
  const strokeDashoffset =
    circumference - (data.progress / 100) * circumference;

  return (
    <div
      className={cn(
        'flex items-center justify-between shadow-md',
        'bg-[FFECEC] rounded-[20px] px-6 py-4 min-h-[148px]',
      )}
    >
      <div>
        <p className='text-[16px] font-medium text-[#9B9B9B]'>{data.title}</p>
        <p className='text-[40px] font-semibold text-[#202020]'>{data.value}</p>
      </div>
      <div className='relative'>
        <svg
          className='w-16 h-16 transform -rotate-90'
          viewBox='0 0 50 50'
        >
          {/* Background circle */}
          <circle
            cx='25'
            cy='25'
            r='20'
            fill='none'
            stroke='#f1f5f9'
            strokeWidth='4'
          />
          {/* Progress circle */}
          <circle
            cx='25'
            cy='25'
            r='20'
            fill='none'
            stroke={'#FFC41F'}
            strokeWidth='4'
            strokeLinecap='round'
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            className='transition-all duration-300 ease-in-out'
          />
        </svg>
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className={'p-2 rounded-full bg-white'}>
            <Image
              src={data.image}
              alt={data.title}
              width={30}
              height={30}
              className='object-contain max-h-[30px] max-w-[30px] h-auto w-auto'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
