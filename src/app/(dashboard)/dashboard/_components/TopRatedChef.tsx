'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { useCallback, useEffect, useState } from 'react';
import { getCookie } from 'cookies-next/client';
import { BASE_API_URL } from '@/common/constants';
import axios from 'axios';
import { toast } from 'sonner';
import { AvatarImage } from '@radix-ui/react-avatar';

const TopRatedChefs = () => {
  const topChefs = [
    { id: 1, name: 'Gordon Ramsay', rating: 5.0, orders: '89k', avatar: 'GR' },
    { id: 2, name: 'Gordon Ramsay', rating: 5.0, orders: '89k', avatar: 'GR' },
    { id: 3, name: 'Alain Ducasse', rating: 5.0, orders: '89k', avatar: 'AD' },
    {
      id: 4,
      name: 'Massimo Bottura',
      rating: 5.0,
      orders: '89k',
      avatar: 'MB',
    },
    {
      id: 5,
      name: 'Heston Blumenthal',
      rating: 5.0,
      orders: '89k',
      avatar: 'HB',
    },
  ];

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getTopChefData = useCallback(async () => {
    try {
      setLoading(true);
      const token = getCookie('token');
      const response = await axios.get(`${BASE_API_URL}/admin/top-chefs`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(
        '===response.data===>',
        JSON.stringify(response.data, null, 1),
      );
      setData(response?.data?.topRatedChef);
    } catch (error: any) {
      toast(error?.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getTopChefData();
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle className='text-lg font-medium'>Top Rated Chefs.</CardTitle>
        <p className='text-sm text-muted-foreground'>
          Lorem ipsum dolor sit amet, consectetur
        </p>
      </CardHeader>
      <CardContent className='space-y-4'>
        {data.map((chef, index) => (
          <div
            key={chef._id}
            className='flex justify-between items-center gap-3'
          >
            <span className='text-base text-muted-foreground w-6'>
              #{index + 1}
            </span>

            <div className='flex-1'>
              <div className='font-medium text-lg'>
                {chef.userId?.firstName + ' ' + chef.userId?.firstName}
              </div>
              {/* <p className='text-sm font-bold text-muted-foreground'>$56</p> */}
              <p className='text-sm text-muted-foreground'>
                Order {chef?.completedOrders}
              </p>
            </div>
            <Avatar>
              <AvatarImage
                src={chef?.userId?.profilePicture}
                className='w-10 h-10'
              />
            </Avatar>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default TopRatedChefs;
