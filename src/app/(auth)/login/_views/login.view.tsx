'use client';
import LoginForm from '@/app/(auth)/login/_components/login-form.component';
import Image from 'next/image';
import logo from '../../../../../public/assets/images/login-main.png';

const LoginView = () => {
  return (
    <main className='flex flex-col gap-4 h-full w-full justify-center items-center'>
      <Image
        alt='logo'
        src={logo}
        height={160}
        width={160}
        className='pb-8 lg:hidden'
      />

      <div className='w-full flex justify-center'>
        <LoginForm />
      </div>
    </main>
  );
};

// hello
export default LoginView;
