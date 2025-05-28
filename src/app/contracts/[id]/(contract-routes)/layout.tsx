'use client';

import BackLink from '@/common/components/common/back-link.component';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import ContractBreadcrumb from './_components/contract-breadcrumb';
import Tabs from '@/common/components/common/tabs';
import { ContractTabs } from '@/common/constants/contracts/contracts';

const ContractDetailsLayout = ({ children }: { children: React.ReactNode }) => {
  const [activeTab, setActiveTab] = useState<string | undefined>();
  const contract = localStorage.getItem('contract');

  const pathname = usePathname().split('/').filter(Boolean);

  useEffect(() => {
    setActiveTab(pathname[pathname.length - 1]);
  }, [pathname]);

  return (
    <div className='center-div'>
      <div className='w-11/12 sm:mt-10 mt-4 p-4 space-y-6'>
        <div className='space-y-4'>
          <BackLink
            text='Back'
            href='/contracts/all'
          />
          <ContractBreadcrumb />
        </div>
        <p className='sm:text-3xl text-2xl font-semibold'>{contract}</p>
        <Tabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          tabs={ContractTabs}
        />
        {children}
      </div>
    </div>
  );
};

export default ContractDetailsLayout;
