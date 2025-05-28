'use client';

import {
  analyticsData,
  areaChartConfig,
  areaChartData,
  attendeesList,
  attendeesTableHeader,
  chartConfig,
  chartData,
  eventData,
  exhibitorsData,
  sessionsData,
} from '@/common/constants/data';
import { cn } from '@/lib/utils';
import { AnalyticsCard } from '../_components/analytics-card';
import { PieChartComponent } from '../_components/analytics-pie-chart';
import { EventCard } from '../_components/event-card';
import { AttendeesSection } from '../_components/attendees-section';
import { ExhibitorsSection } from '../_components/exhibitors-section';
import { SessionsSection } from '../_components/sessions-section';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import Image from 'next/image';
import { Progress } from '@/components/ui/progress';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import { AreaChartComponent } from '../_components/analytics-area-chart';
import { AnalyticsBarChart } from '../_components/analytics-bar-chart';

const DashboardView = () => {
  return (
    <div className='px-8 pt-10 flex flex-col gap-4 '>
      <div className='flex sm:items-center sm:justify-between sm:flex-row flex-col gap-2'>
        <h1 className='text-[34px] font-semibold'>Dashboard</h1>
        <div className='flex items-center gap-2'>
          <p className='text-[18px] font-normal text-[#202020]'>Dashboard</p>
          <span className='text-[18px] font-normal text-[#202020]'>/</span>
          <p className='text-[18px] font-normal text-[#202020]'>Order</p>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div className={cn('col-span-1', 'grid grid-cols-2', 'gap-4')}>
          {analyticsData.map((data, index) => (
            <AnalyticsCard
              key={index}
              data={data}
            />
          ))}
        </div>
        <AreaChartComponent
          chartData={areaChartData}
          chartConfig={areaChartConfig}
        />
        <div className='col-span-1 md:col-span-2'>
          <AnalyticsBarChart />
        </div>
        {/* <EventCard data={eventData} />

        <AttendeesSection
          tableHeader={attendeesTableHeader}
          tableData={attendeesList}
        />
        <ExhibitorsSection data={exhibitorsData} />
        <div className='col-span-1 md:col-span-2'>
          <SessionsSection data={sessionsData} />
        </div> */}
      </div>
    </div>
  );
};

export default DashboardView;
