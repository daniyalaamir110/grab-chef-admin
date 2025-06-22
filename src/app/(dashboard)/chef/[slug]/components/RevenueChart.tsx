'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const data = [
  { time: '08:00', value: 40 },
  { time: '09:00', value: 55 },
  { time: '10:00', value: 45 },
  { time: '11:00', value: 65 },
  { time: '12:00', value: 70 },
  { time: '13:00', value: 60 },
  { time: '14:00', value: 75 },
];

export const RevenueChart = ({ chefRevenue }) => {
  return (
    <Card className='bg-white'>
      <CardHeader className='pb-4'>
        <CardTitle className='text-lg font-semibold text-gray-900'>
          <div className='flex items-center justify-between'>
            <div>
              <p className='mb-4'>Today's Revenue</p>
              <p className='text-sm text-gray-500'>
                Lorem ipsum dolor sit amet, consectetur
              </p>
            </div>
            <div>
              <p className='text-3xl mb-4 font-bold text-gray-900'>
                PKR ${chefRevenue?.totalRevenue}
              </p>
              {/* <p className='text-sm text-green-500'>0.2% than last day</p> */}
            </div>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className='h-48'>
          <ResponsiveContainer
            width='100%'
            height='100%'
          >
            <AreaChart data={chefRevenue?.graph}>
              <defs>
                <linearGradient
                  id='colorRevenue'
                  x1='0'
                  y1='0'
                  x2='0'
                  y2='1'
                >
                  <stop
                    offset='5%'
                    stopColor='#fbbf24'
                    stopOpacity={0.8}
                  />
                  <stop
                    offset='95%'
                    stopColor='#fbbf24'
                    stopOpacity={0.1}
                  />
                </linearGradient>
              </defs>
              <XAxis
                dataKey='label'
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: '#9CA3AF' }}
              />
              <YAxis tick={{ fontSize: 12, fill: '#9CA3AF' }} />
              <Area
                type='monotone'
                dataKey='chefRevenue'
                stroke='#f59e0b'
                strokeWidth={2}
                fillOpacity={1}
                fill='url(#colorRevenue)'
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};
