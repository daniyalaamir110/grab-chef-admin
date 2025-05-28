'use client';

import Image from 'next/image';
import { SectionHeader } from './section-header';
import { cn } from '@/lib/utils';

interface ExhibitorsSectionProps {
  data: {
    id: number;
    image: string;
    title: string;
  }[];
}

export function ExhibitorsSection({ data }: ExhibitorsSectionProps) {
  return (
    <div>
      <SectionHeader
        title='Exhibitors'
        link='/exhibitors'
      />
      <div className='grid sm:grid-cols-3 grid-cols-2 gap-3'>
        {data.map(exhibitors => (
          <div
            key={exhibitors.id}
            className={cn(
              'bg-[#F4F5F8] rounded-[10px] p-3 min-h-[195px]',
              'flex flex-col gap-1 justify-center items-center',
            )}
          >
            <Image
              src={exhibitors.image}
              alt='avatar'
              width={120}
              height={120}
              className='rounded-[8px] w-[120px] h-[120px]'
            />
            <p className='text-[12px] font-medium text-center'>
              {exhibitors.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
