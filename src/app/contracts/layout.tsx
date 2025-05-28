import Header from '@/common/components/common/header';
import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={`screen m-0 p-0 overflow-x-hidden`}
      style={{ fontFamily: 'var(--font-sf-pro-display)' }}
    >
      {/* Header */}
      <Header />
      <div className='full'>{children}</div>
    </div>
  );
};

export default Layout;
