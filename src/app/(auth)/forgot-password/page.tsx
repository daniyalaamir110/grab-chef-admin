import React from 'react';
import ForgotPasswordView from '@/app/(auth)/forgot-password/_views/forgot-password.view';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Forgot Password',
};

const ForgotPasswordPage = async () => {
  return <ForgotPasswordView />;
};

export default ForgotPasswordPage;
