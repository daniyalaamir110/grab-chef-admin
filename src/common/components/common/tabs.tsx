import { TabsProps } from '@/common/types/interfaces/common';
import { useRouter } from 'next/navigation';
import { FC } from 'react';

const Tabs: FC<TabsProps> = ({ activeTab, setActiveTab, tabs }) => {
  const router = useRouter();
  return (
    <div className='flex gap-2 items-center flex-wrap'>
      {tabs.map((tab, index) => (
        <div
          key={index}
          onClick={() => {
            if (tab.query) {
              setActiveTab(tab.query);
              router.push(`?${tab.query}=true`);
            } else {
              setActiveTab(tab.path);
              router.push(`${tab.path}`);
            }
          }}
          className={`p-1 cursor-pointer duration-100 font-semibold ${
            activeTab === tab.query || activeTab === tab.path
              ? 'border-b border-primary text-primary'
              : 'text-gray-400'
          }
          `}
        >
          {tab.title}
        </div>
      ))}
    </div>
  );
};

export default Tabs;
