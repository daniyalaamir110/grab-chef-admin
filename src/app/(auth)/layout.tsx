import { ChildrenProps } from '@/common/interfaces';
import React from 'react';
import MainLogo from '../../../public/assets/images/login-main.png';
import Image from 'next/image';

const Layout: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <div
      className='min-h-dvh max-w-screen w-full overflow-x-hidden relative flex'
      style={{ fontFamily: 'var(--font-dm-sans)' }}
    >
      {/* Flex item 1 */}
      <div className='hidden lg:flex flex-1 justify-center items-center min-h-dvh bg-linear-to-b from-primary-hex to-secondary-hex'>
        <Image
          src={MainLogo}
          alt='logo-full'
          className='w-[350px] h-[320px]'
        />
      </div>
      <div className='min-h-dvh flex-1'>{children}</div>
    </div>
  );
};

export default Layout;
