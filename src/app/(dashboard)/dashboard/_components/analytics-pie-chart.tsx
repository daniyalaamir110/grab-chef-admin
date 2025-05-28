'use client';

import { Pie, PieChart } from 'recharts';

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

interface ChartDataProps {
  chartData: {
    browser: string;
    visitors: number;
    fill: string;
  }[];
}

export function PieChartComponent({
  chartConfig,
  chartData,
}: {
  chartConfig: ChartConfig;
  chartData: ChartDataProps['chartData'];
}) {
  return (
    <div className='flex flex-col bg-[#F9FAFB] rounded-[8px] pb-4'>
      <div className='p-4 flex items-center justify-between'>
        <p className='text-[18px] font-medium text-[#666566]'>
          New Registrations
        </p>
        <Select defaultValue={'daily'}>
          <SelectTrigger
            className={cn(
              'w-[100px]',
              'border-[#DCE0E5] focus-visible:border-[#DCE0E5]',
              'focus-visible:ring-offset-0 focus-visible:ring-0',
            )}
          >
            <SelectValue placeholder='Select Period' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='daily'>Daily</SelectItem>
            <SelectItem value='weekly'>Weekly</SelectItem>
            <SelectItem value='monthly'>Monthly</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-9 md:grid-cols-1 xl:grid-cols-9'>
        <div className='col-span-4 flex items-center justify-center'>
          <ChartContainer
            config={chartConfig}
            className='max-h-[250px] h-[250px] w-[250px]'
          >
            <PieChart>
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Pie
                data={chartData}
                dataKey='visitors'
                nameKey='browser'
                innerRadius={60}
                strokeWidth={5}
              ></Pie>
            </PieChart>
          </ChartContainer>
        </div>
        <div className='flex flex-col justify-center col-span-5 px-4'>
          <CustomChartLegend chartData={chartData} />
        </div>
      </div>
    </div>
  );
}

export function CustomChartLegend({ chartData }: ChartDataProps) {
  return (
    <div className='w-full flex flex-wrap justify-center'>
      {chartData.map((data, idx) => {
        return (
          <div
            key={idx}
            className='flex items-center gap-2 min-w-[110px] h-12'
          >
            <div
              className={cn('w-2 h-2 rounded-full')}
              style={{
                backgroundColor: data.fill,
              }}
            ></div>

            <p className='text-[12px] font-normal text-[#666566] capitalize'>
              {data.browser}
            </p>
            <p className='text-[14px] font-medium'>{data.visitors}</p>
          </div>
        );
      })}
    </div>
  );
}
