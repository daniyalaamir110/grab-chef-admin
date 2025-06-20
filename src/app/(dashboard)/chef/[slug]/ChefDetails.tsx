'use client';
import { useCallback, useEffect, useState } from 'react';
import { ChefBanner } from './components/ChefBanner';
import { ChefLevel } from './components/ChefLevel';
import { CustomerTable } from './components/CustomerTable';
import { MedalsAchievement } from './components/MedalAcheivement';
import { RevenueChart } from './components/RevenueChart';
import { useParams } from 'next/navigation';
import { getCookie } from 'cookies-next/client';
import axios from 'axios';
import { BASE_API_URL } from '@/common/constants';
import { toast } from 'sonner';

const ChefDetails = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const params = useParams();
  console.log('===params===>', JSON.stringify(params, null, 1));
  const chefId = params?.slug;

  const getChef = useCallback(async () => {
    try {
      setLoading(true);
      const token = getCookie('token');
      const response = await axios.get(
        `${BASE_API_URL}/admin/get-chef/${chefId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      console.log(
        '===response.data===>',
        JSON.stringify(response.data, null, 1),
      );
      setData(response?.data?.chef);
    } catch (error: any) {
      toast(error?.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const getChefEvents = useCallback(async () => {
    try {
      setLoading(true);
      const token = getCookie('token');
      const response = await axios.get(
        `${BASE_API_URL}/admin/get-user-event/${chefId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      console.log(
        '===response.data===>',
        JSON.stringify(response.data, null, 1),
      );
      setData(response?.data?.chef);
    } catch (error: any) {
      toast(error?.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getChef();
    getChefEvents();
  }, []);

  return (
    <div className='min-h-screen bg-gray-50 p-6'>
      <div className=' space-y-6'>
        {/* Header */}
        <div className='flex items-center justify-between mb-8'>
          <h1 className='text-4xl font-bold text-gray-900'>Chef</h1>
          <div className='text-lg text-gray-500'>Chef / Chef</div>
        </div>

        {/* Top Row */}
        <div className='grid grid-cols-1 xl:grid-cols-2 gap-6'>
          <ChefBanner />
          <RevenueChart />
        </div>

        {/* Middle Row */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
          <MedalsAchievement />
          <ChefLevel />
        </div>

        {/* Bottom Row */}
        <CustomerTable />
      </div>
    </div>
  );
};

export default ChefDetails;
