'use client';
import BackLink from '@/common/components/common/back-link.component';
import React, { Suspense } from 'react';
import OtpVerificationForm from '@/app/(auth)/otp-verification/_components/otp-verification-form.component';
import logo from '../../../../../public/assets/images/letzfair-logo.svg';
import Image from 'next/image';

const OtpVerificationView = () => {
  return (
    <main className='flex flex-col gap-4 h-full items-center justify-center'>
      <Image
        alt='logo'
        src={logo}
        height={160}
        width={160}
        className='pb-8 lg:hidden'
      />
      <div className='sm:w-4/5 w-11/12 lg:h-4/5 h-max'>
        <div className='py-6 flex justify-start'>
          <BackLink
            href='/forgot-password'
            text='Back'
          />
        </div>
        <div className='flex-1 flex flex-col justify-center h-full xl:w-11/12 items-center'>
          <Suspense fallback={<div>Loading...</div>}>
            <OtpVerificationForm />
          </Suspense>
        </div>
      </div>
    </main>
  );
};

export default OtpVerificationView;
