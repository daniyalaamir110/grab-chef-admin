
import React, { useMemo } from 'react';
import { CheckCircle, Clock, ChefHat, Truck, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface OrderStatusTimelineProps {
  currentStatus: string;
  data:any
}

const OrderStatusTimeline = ({ currentStatus, data }: OrderStatusTimelineProps) => {
  //bhai iskay status db walay rakhdio khud chal jaiga
  const steps = [
    {
      id: 'order-created',
      title: 'Order Created',
      time: 'Thu, 31 Jul 2020, 11:49 AM',
      icon: CheckCircle,
      completed: true
    },
    {
      id: 'payment-success',
      title: 'Payment Success',
      time: 'Fri, 31 Jul 2020, 11:49 AM',
      icon: CheckCircle,
      completed: true
    },
    {
      id: 'chef-on-way',
      title: 'Chef on the way',
      time: 'Sat, 31 Jul 2020, 01:24 PM',
      icon: ChefHat,
      completed: true,
      active: true
    },
    {
      id: 'completed',
      title: 'Chef Served',
      time: '',
      icon: Truck,
      completed: false
    },
    {
      id: 'rating-review',
      title: 'Rating/Leave a review',
      time: '',
      icon: Star,
      completed: false
    }
  ];

  const currentIndex = useMemo(() => steps?.findIndex(step => step?.id == currentStatus), [currentStatus])

  return (
    <div className="flex items-start justify-between relative">
      {/* Progress Line */}
      <div className="absolute top-8 left-0 right-0 h-0.5 bg-gray-200 z-0">
        <div 
          className="h-full bg-yellow-400 transition-all duration-500"
          style={{ width: (currentIndex/4) * 100 + '%' }}
        />
      </div>

      {steps.map((step, index) => {
        const Icon = step.icon;
        const isCompleted = index <= currentIndex;
        const isActive = step.active;
        
        return (
          <div key={step.id} className="flex flex-col items-center relative z-10">
            <div
              className={cn(
                "w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300",
                isCompleted
                  ? "bg-yellow-400 text-black"
                  : "bg-white border border-gray-200 text-gray-400",
                !isCompleted && "border bg-white text-red-400 border-red-400"
              )}
            >
              <Icon className="h-6 w-6" />
            </div>
            <div className="mt-3 text-center max-w-[100px]">
              <p className={cn(
                "text-sm font-medium",
                isCompleted ? "text-gray-900" : "text-gray-500"
              )}>
                {step.title}
              </p>
            
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default OrderStatusTimeline;
