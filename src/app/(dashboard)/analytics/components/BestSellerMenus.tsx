'use client';
import { BASE_API_URL } from '@/common/constants';
import { Card } from '@/components/ui/card';
import axios from 'axios';
import { getCookie } from 'cookies-next/client';
import { Heart } from 'lucide-react';
import { useEffect, useState } from 'react';

interface MenuItem {
  id: number;
  name: string;
  price: number;
  image: string;
  likes: number;
  rating: number;
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: 'Spinach with Roasted Crab',
    price: 6.73,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxqfyojxMBijikrAeZvgsCyIDMD-rCktUBPw&s',
    likes: 254,
    rating: 6.723,
  },
  {
    id: 2,
    name: 'Chicken Teriyaki Khas Haji Muhidin Malang',
    price: 6.73,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxqfyojxMBijikrAeZvgsCyIDMD-rCktUBPw&s',
    likes: 254,
    rating: 6.723,
  },
  {
    id: 3,
    name: 'Fried Chicken Roll Extra Spicy with Mozarella',
    price: 6.73,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxqfyojxMBijikrAeZvgsCyIDMD-rCktUBPw&s',
    likes: 254,
    rating: 6.723,
  },
];

const BestSellerMenus = () => {
  const [data, setData] = useState({});

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
    <Card className='w-full p-4 bg-white shadow-lg'>
      <div>
        <h2 className='text-xl font-semibold text-gray-900 mb-1'>
          Best Seler Menus
        </h2>
        <p className='text-sm text-gray-500'>Lorem ipsum dolor</p>
      </div>

      <div className='space-y-2'>
        {data?.mostOrderedDishes &&
          data?.mostOrderedDishes.slice(0, 5).map(item => (
            <div
              key={item.id}
              className='p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer'
            >
              {item?.images && item.images.length && (
                <img
                  src={item.images[0]}
                  alt={item.itemName}
                  className='w-full h-24 rounded-lg object-cover'
                />
              )}
              <div className='flex-1 mt-3'>
                <h3 className='font-medium text-gray-900 text-sm leading-tight mb-1'>
                  {item.itemName}
                </h3>
                {/* <div className='flex items-center justify-between'>
                  <span className='text-base font-semibold text-gray-900'>
                    PKR {item.price.toFixed(2)}
                  </span>
                  <div className='flex items-center space-x-2 text-xs'>
                    <div className='flex items-center space-x-1'>
                      <Heart className='w-3 h-3 fill-red-500 text-red-500' />
                      <span className='text-gray-600'>{item.likes}k</span>
                    </div>
                    <div className='flex items-center space-x-1'>
                      <span className='text-orange-500'>⭐</span>
                      <span className='text-gray-600'>{item.rating}</span>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          ))}
      </div>

      <div className='flex justify-center'>
        <button className='text-gray-400 hover:text-gray-600 transition-colors'>
          ⌄
        </button>
      </div>
    </Card>
  );
};

export default BestSellerMenus;
