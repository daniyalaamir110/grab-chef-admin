'use client';
import { BASE_API_URL } from '@/common/constants';
import { Card } from '@/components/ui/card';
import axios from 'axios';
import { getCookie } from 'cookies-next/client';
import { useEffect, useState } from 'react';

interface TrendingItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  orders: string;
}

const trendingItems: TrendingItem[] = [
  {
    id: 1,
    name: 'Watermelon juice with ice',
    description: 'Order 67x',
    price: 4.8,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxqfyojxMBijikrAeZvgsCyIDMD-rCktUBPw&s',
    orders: '67x',
  },
  {
    id: 2,
    name: 'Chicken curry special with cucumber',
    description: 'Order 89x',
    price: 5.6,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxqfyojxMBijikrAeZvgsCyIDMD-rCktUBPw&s',
    orders: '89x',
  },
  {
    id: 3,
    name: 'Italiano pizza with garlic',
    description: 'Order 59x',
    price: 12.6,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxqfyojxMBijikrAeZvgsCyIDMD-rCktUBPw&s',
    orders: '59x',
  },
  {
    id: 4,
    name: 'Tuna soup spinach with himalaya salt',
    description: 'Order 45x',
    price: 3.6,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxqfyojxMBijikrAeZvgsCyIDMD-rCktUBPw&s',
    orders: '45x',
  },
  {
    id: 5,
    name: 'Medium Spicy Spaghetti Italiano',
    description: 'Order 48x',
    price: 4.2,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxqfyojxMBijikrAeZvgsCyIDMD-rCktUBPw&s',
    orders: '48x',
  },
];

const DailyTrendingMenus = () => {
  const [data, setData] = useState<any>({});

  const getBestSeller = async () => {
    try {
      const token = getCookie('token');
      const response = await axios.get(
        `${BASE_API_URL}/admin/get-menu-insights`,
        { headers: { Authorization: `Bearer ${token}` } },
      );
      setData(response.data);
      console.log(
        '===response.data===>',
        JSON.stringify(response.data, null, 1),
      );
    } catch (error) {
      console.log('ERROR', error);
    }
  };

  useEffect(() => {
    getBestSeller();
  }, []);
  return (
    <Card className='w-full max-w-md mx-auto p-6 bg-white shadow-lg'>
      <div>
        <h2 className='text-xl font-semibold text-gray-900 mb-1'>
          Daily Trending Menus
        </h2>
        <p className='text-sm text-gray-500'>Lorem ipsum dolor</p>
      </div>

      <div className='space-y-4'>
        {data?.mostOrderedDishes &&
          data?.mostOrderedDishes.length &&
          data?.mostOrderedDishes.map((item:any) => (
            <div
              key={item.id}
              className='flex items-center space-x-3 hover:bg-gray-50 transition-colors duration-200 cursor-pointer rounded-lg p-2'
            >
              <img
                src={item.images && item.images.length && item.images[0]}
                alt={item.itemName}
                className='w-12 h-12 rounded-lg object-cover'
              />
              <div className='mt-4'>
                <div className='flex-1'>
                  <h3 className='font-medium text-gray-900 text-sm leading-tight'>
                    {item.itemName}
                  </h3>
                </div>
                <div className='w-full flex justify-between items-center gap-3'>
                  <span className='text-sm font-semibold text-gray-900'>
                    ${item.price.toFixed(1)}
                  </span>
                  <p className='text-xs text-gray-500 mt-1'>{"   "}</p>
                  <p className='text-xs text-gray-500 mt-1'>{item.orders}x</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </Card>
  );
};

export default DailyTrendingMenus;
