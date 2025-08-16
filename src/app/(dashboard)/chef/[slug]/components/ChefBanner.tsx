import { Card } from '@/components/ui/card';
import { ChefDetailCard } from './chef-card';
import Image from 'next/image';

export const ChefBanner = () => {
  return (
    <Card className="relative min-h-64 p-8 bg-[url('/assets/images/chefbg.png')] flex xl:justify-start items-center xl:items-start text-white border-0">
      <div className='flex space-between'>
        <div>
          <h3  className='text-3xl font-bold'>Chef Naba</h3>
          <h3  className='text-base'>Senior Chef</h3>
        </div>
        <Image src={'/assets/images/chef-femal.png'} alt={'chef'} width={400} height={500}/>
      </div>
    </Card>
  );
};
