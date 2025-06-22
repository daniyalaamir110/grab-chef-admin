'use client';
import { BASE_API_URL } from '@/common/constants';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import axios from 'axios';
import { getCookie, useGetCookie } from 'cookies-next/client';
import { ChevronDown, MapPin } from 'lucide-react';
import { useEffect, useState } from 'react';
import DeliveryMaps from './DeliveryMap';

const UpcomingShipping = () => {
  const [data, setData] = useState([]);

  console.log('===data===>', JSON.stringify(data, null, 1));
  const getEvents = async () => {
    try {
      const token = getCookie('token');
      const response = await axios.get(`${BASE_API_URL}/admin/get-events`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = response.data;
      setData(data?.events || []);
    } catch (error) {
      console.log('ERRPR', error);
    }
  };

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <Card>
      <CardContent className='space-y-4'>
        <DeliveryMaps data={data} />
        {data &&
          data.length &&
          data.slice(0, 5).map(delivery => (
            <div
              key={delivery?.customer?.firstName}
              className='flex items-start gap-3 pb-4 border-b border-gray-100 last:border-b-0'
            >
              <img
                src={data && delivery?.chef?.profilePicture}
                alt='asd'
                className='rounded-full w-20 h-20'
                width={20}
                height={20}
              />
              <div className='flex-1 flex justify-between items-center min-w-0'>
                <div>
                  <div className='flex items-center gap-2 mb-1'>
                    <span className='font-medium text-sm'>
                      {delivery?.customer?.firstName +
                        ' ' +
                        delivery?.customer?.lastName}
                    </span>
                    <span className='text-xs text-red-500'>
                      ({delivery?.menuItems?.length})
                    </span>
                  </div>
                  <div className='text-xs text-muted-foreground mb-2'>
                    Timing{' '}
                    {`${new Date(delivery?.date).getDate() + '-' + new Date(delivery?.date).getMonth() + '-' + new Date(delivery?.date).getFullYear()}` +
                      ' ' +
                      delivery.time}
                  </div>
                </div>
                <div className='flex items-center justify-end gap-2'>
                  <span className='text-xs text-muted-foreground leading-relaxed'>
                    {delivery.address}
                  </span>
                  <div className='bg-yellow-400 p-2 rounded-full'>
                    <MapPin className='h-8 w-8 text-orange-500 mt-0.5 flex-shrink-0' />
                  </div>
                </div>
              </div>
            </div>
          ))}
        <div className='mx-auto h-4 w-4 shadow-black shadow-2xl rounded-full'>
          <ChevronDown />
        </div>
      </CardContent>
    </Card>
  );
};

export default UpcomingShipping;
