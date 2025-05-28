import React from 'react';
import CreatePasswordView from '@/app/(auth)/create-password/_views/create-password.view';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Create Password',
};

const CreatePasswordPage = async () => {
  return <CreatePasswordView />;
};

export default CreatePasswordPage;
