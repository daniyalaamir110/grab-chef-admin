
'use client'
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Star, Phone, MapPin, Clock, ChefHat, CreditCard, Package, MessageSquare, Plane } from 'lucide-react';
import OrderStatusTimeline from './OrderStatusTimeline';
import DeliveryMap from './DeliveryMap';
import CustomerInfo from './CustomerInfo';
import OrderItems from './OrderItems';
import OrderAnalytics from './OrderAnalytics';
import CustomerOrderCard from './CustomerOrderCard';
import { toast } from 'sonner';
import { getData } from '@/api/api';
import { urls } from '@/api/urls';
import { useParams } from 'next/navigation';

const OrderTracking = () => {
  const [details, setDetails ] = useState<any>(null)
  const [attendence, setAttendence ] = useState<any>({
    attendance:[],
    durationMinutes:0
  })
  const params = useParams()
  const orderData = {
    orderId: "#001234124",
    status: "Chef on the way",
    estimatedTime: "10-14 Min",
    customer: {
      name: "Usama Muzamil",
      phone: "+91 952 66 77",
      address: "DHA Phase 5 Commercial Bukhari",
      date: "25 July 2024",
      time: "17:00"
    },
    items: [
      {
        id: 1,
        name: "Chicken curry special with cucumber",
        category: "MAIN COURSE",
        quantity: 3,
        price: 14.99,
        total: 44.97,
        rating: 4,
        reviews: 142,
        image: "/placeholder.svg?height=60&width=60"
      },
      {
        id: 2,
        name: "Italiano pizza with garlic",
        category: "MAIN COURSE",
        quantity: 1,
        price: 15.44,
        total: 15.44,
        rating: 4,
        reviews: 156,
        image: "/placeholder.svg?height=60&width=60"
      },
      {
        id: 3,
        name: "Watermelon juice with ice",
        category: "MAIN COURSE",
        quantity: 1,
        price: 4.12,
        total: 4.12,
        rating: 4,
        reviews: 456,
        image: "/placeholder.svg?height=60&width=60"
      }
    ],
    pricing: {
      subtotal: 1500,
      deliveryFee: 400,
      total: 1900
    }
  };

  console.log(details,'--->')
  const getOrderDetails = async () => {
    try {
      if(params?.slug){
        const data = await getData(urls.order.getOrder(params?.slug as string))
        const attendenceData = await getData(urls.order?.getAttendence(params?.slug as string))
        setAttendence(attendenceData)
        console.log(attendence,'---->')
        setDetails(data?.event)
      }
    } catch (error:any) {
      console.log(error?.message)
      toast(error?.message)
    }
  }

  useEffect(() => {
    if(params?.slug)
      getOrderDetails()
  },[params])

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Order ID #{details?._id?.substr(details?._id.length-4)}</h1>
          </div>
          <div className="flex items-center gap-2">
            <p>Order Details/ Customers</p>
          </div>
        </div>

        {/* Order Status Timeline */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <OrderStatusTimeline data={details} currentStatus={''}/>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Map and Customer */}
          <div className="lg:col-span-2 col-span-full space-y-6">
            {/* Delivery Map */}
            <div>
              <div className="p-0">
                <DeliveryMap data={attendence?.attendance}/>
              </div>
            </div>

            {/* Customer Info */}
            <div className='grid grid-cols-3 gap-3'>
              <div className="lg:col-span-2 col-span-full space-y-6">
                <CustomerInfo data={details} />

              </div>
              <div className='lg:col-span-1 col-span-full'>
                <Card className='h-full flex justify-center items-center'>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-red-100 rounded-full">
                        <Plane className="h-5 w-5 text-red-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Estimated Time</p>
                        <p className="text-lg font-bold text-gray-900">{attendence?.durationMinutes || 0}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className='col-span-full'>
                <OrderItems data={details}/>

              </div>
            </div>
          </div>

          {/* Right Column - Order Details */}
          <div className="space-y-6 lg:col-span-1 col-span-full">
            {/* Estimated Time */}
            <CustomerOrderCard data={details}/>

            {/* Order Items */}

            {/* Order Analytics */}
            {/* <OrderAnalytics data={details} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderTracking;
