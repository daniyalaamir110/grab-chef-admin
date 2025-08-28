'use client';

import {
  Area,
  AreaChart,
  CartesianGrid,
  Pie,
  PieChart,
  XAxis,
  YAxis,
} from 'recharts';

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { cn } from '@/lib/utils';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface ChartDataProps {
  chartData: {
    time: string;
    revenue: number;
  }[];
}

export function AreaChartComponent({
  chartConfig,
  chartData,
}: {
  chartConfig: ChartConfig;
  chartData: ChartDataProps['chartData'];
}) {
  // Calculate total revenue
  const totalRevenue = chartData.reduce((sum, item) => sum + item.revenue, 0);
  
  return (
    <Card className="relative">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className='flex flex-1 flex-col justify-center gap-1'>
          <CardTitle>Today's Revenue</CardTitle>
          <CardDescription className="text-xs text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur
          </CardDescription>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold">PKR {totalRevenue.toFixed(2)}</div>
          <div className="text-xs text-green-600">0.5% than last day</div>
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer 
          config={chartConfig}
          className="h-[180px] w-full"
        >
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
              top: 8,
              bottom: 8,
            }}
          >
            <CartesianGrid 
              vertical={true} 
              horizontal={true}
              strokeDasharray="3 3"
              stroke="#f0f0f0"
            />
            <XAxis
              dataKey='time'
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tick={{ fontSize: 12, fill: '#666' }}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tick={{ fontSize: 12, fill: '#666' }}
              tickFormatter={(value) => value}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator='line' />}
            />
            <defs>
              <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="50%" stopColor="#ffc720" stopOpacity={1}/>
                <stop offset="100%" stopColor="#ffc720" stopOpacity={0.2}/>
              </linearGradient>
            </defs>
            <Area
              dataKey='revenue'
              type='bump'
              fill='url(#revenueGradient)'
              strokeWidth={0}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
