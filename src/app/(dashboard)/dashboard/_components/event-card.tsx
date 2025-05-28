'use client';

import Image from 'next/image';

interface EventCardProps {
  image: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  location: string;
}

export function EventCard({ data }: { data: EventCardProps }) {
  return (
    <div className='flex xl:flex-row md:flex-col sm:flex-row flex-col items-center bg-[#F9FAFB] rounded-[8px] p-4 gap-4'>
      <Image
        src={data.image}
        alt='event'
        width={240}
        height={240}
        className='rounded-[6px] w-[240px] h-[240px]'
      />
      <div className='flex flex-col gap-4'>
        <p className='text-primary text-[18px] font-semibold'>{data.title}</p>
        <p className='text-[#666566] text-[14px] font-normal'>
          {data.description}
        </p>
        <div className='flex items-center gap-2'>
          <Image
            src='/assets/icons/calendar-blue.png'
            alt='location'
            width={16}
            height={16}
          />
          <p className='text-[12px] font-normal'>{`${data.startDate} - ${data.endDate}`}</p>
        </div>
        <div className='flex items-center gap-2'>
          <Image
            src='/assets/icons/location.png'
            alt='location'
            width={16}
            height={16}
          />
          <p className='text-[12px] font-normal'>{data.location}</p>
        </div>
      </div>
    </div>
  );
}
