import React from 'react';
import LoginView from '@/app/(auth)/login/_views/login.view';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login',
};

const LoginPage = async () => {
  return <LoginView />;
};

export default LoginPage;
