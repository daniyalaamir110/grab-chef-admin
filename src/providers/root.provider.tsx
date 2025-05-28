import { ChildrenProps } from '@/common/interfaces';
import { Toaster } from '@/components/ui/sonner';
import React from 'react';
import QueryProvider from './query.provider';

export const RootProvider: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <>
      <QueryProvider>{children}</QueryProvider>
      <Toaster />
    </>
  );
};
