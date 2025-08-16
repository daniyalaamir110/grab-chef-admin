import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Ellipsis, MoreHorizontal } from 'lucide-react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { getCookie } from 'cookies-next/client';
import { BASE_API_URL } from '@/common/constants';

const DeliveryMaps = ({ data }) => {
  return (
    <div>
      <div className='relative rounded-lg mb-4 overflow-hidden'>
        <div className='flex justify-between items-center'>
          <div>
            <p className='text-2xl font-bold'>Delivery Maps</p>
            {/* <p>Lorem ipsum dolor sit amet, consectetur</p> */}
          </div>
          <div>
            <Ellipsis />
          </div>
        </div>
        {/* Simple network visualization */}
      </div>
      <div className='text-center'>
        <div className='text-2xl font-bold'>{data?.length} Orders</div>
        {/* <div className='text-sm text-muted-foreground'>10:00 AM</div> */}
      </div>
    </div>
  );
};

export default DeliveryMaps;
