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
    month: string;
    desktop: number;
  }[];
}

export function AreaChartComponent({
  chartConfig,
  chartData,
}: {
  chartConfig: ChartConfig;
  chartData: ChartDataProps['chartData'];
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Todays Revenue</CardTitle>
        <CardDescription>
          Lorem ipsum dolor sit amet, consectetur
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey='month'
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={value => value.slice(0, 3)}
            />
            {/* <YAxis
              dataKey='month'
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={value => value.slice(0, 3)}
            /> */}
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator='line' />}
            />
            <Area
              dataKey='desktop'
              type='natural'
              fill='var(--color-desktop)'
              fillOpacity={0.4}
              stroke='var(--color-desktop)'
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
    // <div className='flex flex-col bg-[#F9FAFB] rounded-[8px] pb-4'>
    //   <div className='p-4 flex items-center justify-between'>
    //     <p className='text-[18px] font-medium text-[#666566]'>
    //       New Registrations
    //     </p>
    //     <Select defaultValue={'daily'}>
    //       <SelectTrigger
    //         className={cn(
    //           'w-[100px]',
    //           'border-[#DCE0E5] focus-visible:border-[#DCE0E5]',
    //           'focus-visible:ring-offset-0 focus-visible:ring-0',
    //         )}
    //       >
    //         <SelectValue placeholder='Select Period' />
    //       </SelectTrigger>
    //       <SelectContent>
    //         <SelectItem value='daily'>Daily</SelectItem>
    //         <SelectItem value='weekly'>Weekly</SelectItem>
    //         <SelectItem value='monthly'>Monthly</SelectItem>
    //       </SelectContent>
    //     </Select>
    //   </div>
    //   <div className='grid grid-cols-1 sm:grid-cols-9 md:grid-cols-1 xl:grid-cols-9'>
    //     <div className='col-span-4 flex items-center justify-center'>
    //       <ChartContainer
    //         config={chartConfig}
    //         className='max-h-[250px] h-[250px] w-[250px]'
    //       >
    //         <PieChart>
    //           <ChartTooltip
    //             cursor={false}
    //             content={<ChartTooltipContent hideLabel />}
    //           />
    //           <Pie
    //             data={chartData}
    //             dataKey='visitors'
    //             nameKey='browser'
    //             innerRadius={60}
    //             strokeWidth={5}
    //           ></Pie>
    //         </PieChart>
    //       </ChartContainer>
    //     </div>
    //     <div className='flex flex-col justify-center col-span-5 px-4'>
    //       <CustomChartLegend chartData={chartData} />
    //     </div>
    //   </div>
    // </div>
  );
}
