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
import TopRatedChefs from '../_components/TopRatedChef';
import MostOrderedDishes from '../_components/MostOrderedDishes';
import CustomerMap from '../_components/CustomerMap';
import CustomersList from '../_components/CustomerList';
import DeliveryMaps from '../_components/DeliveryMap';
import UpcomingShipping from '../_components/UpcomingShipping';
import { useCallback, useEffect, useState } from 'react';
import { toast } from 'sonner';
import axios from 'axios';
import { BASE_API_URL } from '@/common/constants';
import { getCookie } from 'cookies-next/client';
import { getData } from '@/api/api';
import { urls } from '@/api/urls';

const topChefs = [
  { id: 1, name: 'Gordon Ramsay', rating: 5.0, orders: '89k', avatar: 'GR' },
  { id: 2, name: 'Gordon Ramsay', rating: 5.0, orders: '89k', avatar: 'GR' },
  { id: 3, name: 'Alain Ducasse', rating: 5.0, orders: '89k', avatar: 'AD' },
  { id: 4, name: 'Massimo Bottura', rating: 5.0, orders: '89k', avatar: 'MB' },
  {
    id: 5,
    name: 'Heston Blumenthal',
    rating: 5.0,
    orders: '89k',
    avatar: 'HB',
  },
];

const customers = [
  { name: 'Benny Chagur', type: 'MEMBER', avatar: 'BC' },
  { name: 'Chynita Bella', type: 'MEMBER', avatar: 'CB' },
  { name: 'David Heree', type: 'Regular Customer', avatar: 'DH' },
  { name: 'Evan D. Mas', type: 'MEMBER', avatar: 'EM' },
  { name: 'Supratman', type: 'Regular Customer', avatar: 'S' },
  { name: 'John Kusnaldi', type: 'Regular Customer', avatar: 'JK' },
];

const dishes = [
  { name: 'pizza', orders: 432, progress: 85 },
  { name: 'breakfast', orders: 97, progress: 45 },
  { name: 'coffee', orders: 61, progress: 30 },
];

const upcomingDeliveries = [
  {
    name: 'John Kusnaldi',
    items: '6 Items',
    time: '11:24 AM',
    address: 'Franklin Avenue St, London, ABC 123456, United Kingdom',
    avatar: 'JK',
  },
  {
    name: 'Margaretha',
    items: '2 Items',
    time: '11:24 AM',
    address: 'Groove Street Families, OFF 243256, United Kingdom',
    avatar: 'M',
  },
  {
    name: 'Richard Lee',
    items: '4 Items',
    time: '11:24 AM',
    address: 'Bossman St, 2944 ABC, United Kingdom',
    avatar: 'RL',
  },
];

const tags = ['#jameseafood', '#design', '#projectmanagement', '#ui'];

const DashboardView = () => {
  const [data, setData] = useState({
    totalMenu: 0,
    totalChef: 0,
    totalCustomer: 0,
    totalOrders: 0,
  });
  const [dishesData, setDishesData] = useState({
    mostOrderedDishes: [],
    mostPopularCuisines: []
  });
  const [loading, setLoading] = useState(false);

  const getDashboardData = useCallback(async () => {
    try {
      setLoading(true);
      const token = getCookie('token');
      const response = await axios.get(
        `${BASE_API_URL}/admin/dashboard-analytics`,
        { headers: { Authorization: `Bearer ${token}` } },
      );
      console.log(
        '===response.data===>',
        JSON.stringify(response.data, null, 1),
      );
      setData(response?.data);
    } catch (error: any) {
      toast(error?.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const getMenuInsight = async () => {
    try {
      const data = await getData(urls.dashboard.getMenuInsight)
      console.log(data,'---menu insight')
      setDishesData(data)
    } catch (error:any) {
      console.log(error)
        toast(error?.message);
    }
  }

  useEffect(() => {
    getDashboardData();
    getMenuInsight()
  }, []);

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
          {analyticsData(data).map((item, index) => (
            <AnalyticsCard
              key={index}
              data={item}
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

        <div className='grid col-span-full grid-cols-1 lg:grid-cols-4 gap-6'>
          {/* Left Column */}
          <div className='xl:col-span-1 col-span-full space-y-6'>
            <TopRatedChefs />
            <MostOrderedDishes />
          </div>

          {/* Middle Column */}
          <div className='xl:col-span-3 col-span-full  space-y-6'>
            <div className='grid gap-6 grid-cols-3'>
              <div className='xl:col-span-1 col-span-full'>
                <CustomersList />
              </div>
              <div className='xl:col-span-2 col-span-full'>
                <UpcomingShipping />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardView;
