import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

const TabsSkeleton = () => {
  return (
    <div className='flex gap-2 items-center flex-wrap'>
      <Skeleton className='h-6 w-24 rounded-md' />
      <Skeleton className='h-6 w-20 rounded-md' />
      <Skeleton className='h-6 w-28 rounded-md' />
    </div>
  );
};

export default TabsSkeleton;
