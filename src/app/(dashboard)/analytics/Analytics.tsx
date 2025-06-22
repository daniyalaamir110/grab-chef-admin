import React from 'react';
import SummaryCards from './components/SummaryCards';
import SalesStatisticsChart from './components/SalesStatisticChart';
import SalesSummary from './components/SalesSummary';
import CustomerBarChart from './components/CustomerBarChart';
import LoyalCustomers from './components/LoyalCustomers';
import BestSellerMenus from './components/BestSellerMenus';
import DailyTrendingMenus from './components/DailyTrendingMenus';
import MostFavoritesItems from './components/MostFavoritesItems';

const Analytics = () => {
  return (
    <div className='p-6 w-full'>
      {/* Page Header */}
      <div className='mb- flex items-center justify-between'>
        <h1 className='text-2xl font-semibold text-gray-900'>Analytics</h1>
        <p>Analytics/review</p>
      </div>

      <div className='mb-8'>
        <SummaryCards />
      </div>
      <div className=' grid grid-cols-3 gap-4'>
        <div className='col-span-full lg:col-span-2 '>
          <div className='grid md:grid-cols-1 xl:grid-cols-3 gap-4'>
            <div className='col-span-2 flex flex-col gap-4'>
              <SalesStatisticsChart />
              <SalesSummary />
            </div>
            <div className='flex flex-col w-full gap-3'>
              <LoyalCustomers />
            </div>
          </div>
          <div className='col-span-full mt-4'>
            <MostFavoritesItems />
          </div>
        </div>
        <div className='flex  flex-col col-span-full lg:col-span-1 gap-3'>
          <BestSellerMenus />
          <DailyTrendingMenus />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
