import { Skeleton } from '@/components/ui/skeleton';

const BreadcrumbSkeleton = () => {
  return (
    <div className='flex items-center gap-2'>
      <Skeleton className='h-4 w-24' />

      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className='flex gap-1 items-center'
        >
          <Skeleton className='h-4 w-4' />
          <Skeleton className='h-4 w-20' />
        </div>
      ))}
    </div>
  );
};

export default BreadcrumbSkeleton;
