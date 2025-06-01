import React from 'react'
import SummaryCards from './components/SummaryCards'
import SalesStatisticsChart from './components/SalesStatisticChart'
import SalesSummary from './components/SalesSummary'
import CustomerBarChart from './components/CustomerBarChart'

const Analytics = () => {
  return (
     <div className="p-6 w-full">
      {/* Page Header */}
      <div className="mb- flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Analytics</h1>
        <p>Analytics/review</p>
      </div>

        <div className='mb-8'>
            <SummaryCards />
        </div>
        <div className='grid grid-cols-4'>
            <div className='col-span-2'>
                <SalesStatisticsChart />
                <div className='mt-4'>
                    <SalesSummary />
                </div>
            </div>
            <div>
                <CustomerBarChart />
            </div>

        </div>
    </div>
  )
}

export default Analytics
