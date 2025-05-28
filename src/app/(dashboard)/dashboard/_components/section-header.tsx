'use client';

import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface SectionHeaderProps {
  title: string;
  link: string;
}

export function SectionHeader({ title, link }: SectionHeaderProps) {
  const router = useRouter();

  return (
    <div className=''>
      <div className='flex items-center justify-between mb-4'>
        <p className='text-[24px] font-medium'>{title}</p>
        <button
          className={cn(
            'text-[16px] font-medium text-[#666566]',
            'flex items-center gap-2 cursor-pointer',
            'hover:opacity-50',
          )}
          onClick={() => router.push(link)}
        >
          View all
          <ChevronRight
            size={16}
            className='text-primary'
          />
        </button>
      </div>
    </div>
  );
}
