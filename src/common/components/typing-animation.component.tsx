import Image from 'next/image';
import React from 'react';
import Logo from '../../../public/assets/images/letzfair-logo.png';

const TypingAnimation = () => {
  return (
    <div className='flex justify-start items-center gap-3 rounded-2xl p-2'>
      <div className='flex grow-0 shrink-0 w-8 h-8'>
        <Image
          src={Logo}
          alt='logo'
          className='w-8 h-8 rounded-full'
        />
      </div>
      <div>
        <p className='text-base text-dark flex items-center gap-2'>
          <span className='typing-dots'>
            <span className='dot'></span>
            <span className='dot delay-1'></span>
            <span className='dot delay-2'></span>
            <span className='dot delay-3'></span>
            <span className='dot delay-4'></span>
            <span className='dot delay-5'></span>
          </span>
        </p>
      </div>
    </div>
  );
};

export default TypingAnimation;
