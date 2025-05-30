
import React from 'react';
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

const OrderTracking = () => {
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

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Order ID {orderData.orderId}</h1>
          </div>
          <div className="flex items-center gap-2">
            <p>Order Details/ Customers</p>
          </div>
        </div>

        {/* Order Status Timeline */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <OrderStatusTimeline currentStatus="chef-on-way" />
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Map and Customer */}
          <div className="lg:col-span-2 col-span-full space-y-6">
            {/* Delivery Map */}
            <div>
              <div className="p-0">
                <DeliveryMap />
              </div>
            </div>

            {/* Customer Info */}
            <div className='grid grid-cols-3 gap-3'>
              <div className="lg:col-span-2 col-span-full space-y-6">
                <CustomerInfo customer={orderData.customer} />

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
                        <p className="text-lg font-bold text-gray-900">{orderData.estimatedTime}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className='col-span-full'>
                <OrderItems />

              </div>
            </div>
          </div>

          {/* Right Column - Order Details */}
          <div className="space-y-6 lg:col-span-1 col-span-full">
            {/* Estimated Time */}
            <CustomerOrderCard />

            {/* Order Items */}

            {/* Order Analytics */}
            <OrderAnalytics />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderTracking;
