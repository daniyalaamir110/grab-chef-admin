
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Phone, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CustomerInfoProps {
  customer: {
    name: string;
    phone: string;
    address: string;
    date: string;
    time: string;
  };
}

const CustomerInfo = ({ customer }: CustomerInfoProps) => {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-start gap-2 w-full">
          <div className='flex justify-between flex-wrap gap-2 w-full items-center'>
            <div className='flex gap-2 items-center w-fit'>
              <Avatar className="h-24 w-24">
                <AvatarFallback className="bg-blue-500 text-white font-semibold">
                  {customer.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className='text-xs'>Professional Chef</p>
                <p className='text-lg'>Gordon Ramsay</p>
                <p className='text-icon-hex'>ID 412455</p>
              </div>
            </div>
            <div className='md:w-fit w-full'>
              <Button className='bg-red-200 rounded-4xl w-full'>View More</Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CustomerInfo;
