'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import UserImage from '../../../../public/assets/images/user.png';
import chat from '../../../../public/assets/icons/chat.svg';
import bell from '../../../../public/assets/icons/bell.svg';
import SearchBar from '../common/search-bar';
import { useState } from 'react';

export default function NavbarComp() {
  const [search, setSearch] = useState<string | null>(null);
  return (
    <div className='min-h-24 h-fit py-2 sm:flex-row flex-col flex justify-between sm:items-center items-start lg:px-8 px-4 gap-1 w-full shadow-sm bg-white'>
      <div className='flex items-center gap-x-8'>
        <div className='mt-2'>
          <SidebarTrigger />
        </div>
        <SearchBar
          search={search}
          setSearch={setSearch}
        />
      </div>
      <div className='flex items-center sm:justify-center justify-between gap-x-6 w-full sm:w-fit sm:mb-0 mb-2'>
        <div className='flex items-center gap-x-6'>
          <Image
            src={bell}
            alt='bell'
            width={30}
            height={30}
            className='cursor-pointer hover:scale-110 transition-transform duration-200'
          />
          <Image
            src={chat}
            alt='chat'
            width={30}
            height={30}
            className='cursor-pointer hover:scale-110 transition-transform duration-200'
          />
        </div>
        <hr className='h-[56px] border-l border-[#E9E9E9]' />
        <div className='flex items-center gap-x-4'>
          <Image
            src={UserImage}
            alt='profile'
            width={48}
            height={48}
          />
        </div>
        <div className='flex flex-col'>
          <Select defaultValue='english'>
            <SelectTrigger
              className={cn(
                'w-[171px] min-h-[56px] rounded-[53px] text-[16px] font-normal text-black',
                'ring-0 ring-offset-0 border-none outline-none bg-[#FFF3F0]',
                'focus-visible:ring-offset-0 focus-visible:ring-0 py-2',
              )}
            >
              <SelectValue placeholder='Select Language' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem
                value='english'
                className='flex items-center gap-2 text-[16px] font-medium text-[#1E1E1E]'
              >
                <Image
                  src='/assets/icons/us.svg'
                  alt='us'
                  width={28}
                  height={28}
                  className='rounded-full w-7 h-7'
                />
                English
              </SelectItem>
              <SelectItem
                value='spanish'
                className='flex items-center gap-2 text-[16px] font-medium text-[#1E1E1E]'
              >
                <Image
                  src='/assets/icons/us.svg'
                  alt='spn'
                  width={28}
                  height={28}
                  className='rounded-full w-7 h-7'
                />
                Spanish
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
