'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import { SectionHeader } from './section-header';

interface SessionsSectionProps {
  data: {
    id: number;
    title: string;
    sessionDates: {
      date: string;
      startTime: string;
      endTime: string;
    }[];
    location: string;
  }[];
}

export function SessionsSection({ data }: SessionsSectionProps) {
  const colorsArray = ['#AC7EF0', '#F3CD6B', '#46B988', '#D96A46', '#166DFB'];

  return (
    <div>
      <SectionHeader
        title='Sessions'
        link='/sessions'
      />
      <div className='flex flex-col gap-3'>
        {data.map((session, index) => {
          const color = colorsArray[index % colorsArray.length];
          return (
            <div
              key={index}
              className={cn(
                'flex flex-col gap-3',
                'border-l-4',
                'bg-[#F9FAFB] px-4 py-3 rounded-[8px]',
              )}
              style={{
                borderColor: color,
              }}
            >
              <p className='text-[16px] font-medium'>{session.title}</p>
              <div className='flex items-center gap-2'>
                <Image
                  src='/assets/icons/calendar-blue.png'
                  alt='location'
                  width={16}
                  height={16}
                  className='w-4 h-4'
                />
                {session.sessionDates.length <= 1 ? (
                  <p className='text-[14px] font-normal'>
                    {`${session.sessionDates[0].date}, ${session.sessionDates[0].startTime} - ${session.sessionDates[0].endTime}`}
                  </p>
                ) : (
                  <div className='flex flex-row gap-2 flex-wrap'>
                    {session.sessionDates.map((date, idx) => (
                      <div
                        className='flex items-center gap-2'
                        key={idx}
                      >
                        <p
                          key={idx}
                          className='text-[14px] font-normal'
                        >
                          {`${date.date}, ${date.startTime} - ${date.endTime}`}
                        </p>
                        {idx !== session.sessionDates.length - 1 && (
                          <hr className='h-5 w-[2px] bg-[#B2B0B2]' />
                          // <span className='text-[14px] font-normal'>|</span>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className='flex items-center gap-2'>
                <Image
                  src='/assets/icons/location.png'
                  alt='location'
                  width={16}
                  height={16}
                  className='w-4 h-4'
                />
                <p className='text-[14px] font-normal'>{session.location}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
