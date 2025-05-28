'use client';
import BackLink from '@/common/components/common/back-link.component';
import React, { Suspense } from 'react';
import CreatePasswordForm from '@/app/(auth)/create-password/_components/create-password-form.component';
import Image from 'next/image';
import logo from '../../../../../public/assets/images/letzfair-logo.svg';

const CreatePasswordView = () => {
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
        <div className='lg:py-6 flex justify-start'>
          <BackLink
            href='/otp-verification'
            text='Back'
          />
        </div>
        <div className='flex-1 flex flex-col items-center h-full justify-center'>
          {/* TODO: Change with loader */}
          <Suspense fallback={<div>Loading...</div>}>
            <CreatePasswordForm />
          </Suspense>
        </div>
      </div>
    </main>
  );
};

export default CreatePasswordView;
