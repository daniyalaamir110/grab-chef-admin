import BackLink from '@/common/components/common/back-link.component';
import React from 'react';
import ForgotPasswordForm from '@/app/(auth)/forgot-password/_components/forgot-password-form.component';
import Image from 'next/image';
import logo from '../../../../../public/assets/images/letzfair-logo.svg';

const ForgotPasswordView = () => {
  return (
    <main className='flex flex-col gap-4 h-full items-center justify-center'>
      <Image
        alt='logo'
        src={logo}
        height={160}
        width={160}
        className='pb-8 lg:hidden'
      />
      <div className='sm:w-3/5 w-11/12 lg:h-4/5 h-max'>
        <div className='py-6 flex justify-start'>
          <BackLink
            href='/login'
            text='Back'
          />
        </div>
        <div className='flex-1 flex flex-col h-full items-center justify-center'>
          <ForgotPasswordForm />
        </div>
      </div>
    </main>
  );
};

export default ForgotPasswordView;
