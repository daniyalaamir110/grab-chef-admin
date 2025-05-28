'use client';

import { Button } from '@/components/ui/button';
import { deleteCookie } from 'cookies-next';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import profileIcon from '../../../../public/assets/icons/profile-icon.svg';
import logo from '../../../../public/assets/images/letzfair-logo.svg';
import { useGetUser } from '@/common/services/queries/profile.query';

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Api to get logged in user
  const { data: user } = useGetUser();

  const router = useRouter();

  const handleLogout = () => {
    deleteCookie('accessToken');
    router.push('/login');
  };

  return (
    <div className='p-4 flex justify-between sm:h-30 h-24 items-center xl:px-16 sm:px-8 px-4'>
      <Image
        src={logo}
        alt='letzfair-logo'
        className='sm:h-38 sm:w-52 h-32 w-40'
      />
      {/* User profile div */}
      <div className='flex sm:flex-row flex-col-reverse sms:items-center items-end gap-2'>
        {user && (
          <div className='sm:block hidden'>
            <p className='font-semibold'>{`${user?.first_name} ${user?.last_name}`}</p>
            <p className='text-gray-500'>{user?.email}</p>
          </div>
        )}
        <div className='p-2 rounded-full bg-light-blue relative'>
          <Image
            src={profileIcon}
            alt='profile-icon'
            className='sm:h-10 sm:w-10 h-6 w-6 cursor-pointer'
            onClick={() => setIsOpen(!isOpen)}
          />
          {isOpen && (
            <div className='absolute top-16 space-y-3 right-0 p-2 border min-w-max w-auto rounded-lg shadow-xs z-10 bg-white'>
              <div className='sm:hidden block border-b pb-2'>
                <p className='font-semibold'>{`${user?.first_name} ${user?.last_name}`}</p>
                <p className='text-gray-500'>{user?.email}</p>
              </div>
              <Button
                onClick={handleLogout}
                className='bg-white flex justify-end hover:bg-white text-red-500 border border-red-500'
              >
                Logout
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
