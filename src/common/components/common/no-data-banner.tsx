import React, { FC } from 'react';
import { NoDataBannerProps } from '../../types/interfaces/common';
import { Button } from '@/components/ui/button';
import { BiPlus } from 'react-icons/bi';
import Image from 'next/image';

const NoDataBanner: FC<NoDataBannerProps> = ({ ...props }) => {
  return (
    <div className='flex flex-col items-center gap-2'>
      <Image
        src={props.img || ''}
        alt='banenr-img'
        height={200}
        width={200}
      />
      <div className='text-center w-[600px] text-wrap'>
        <p className='font-semibold text-2xl'>{props.text}</p>
        {props.subText && <p className='text-gray-500'>{props.subText}</p>}
      </div>
      {props.isBtn && (
        <Button onClick={props.onClick}>
          <BiPlus />
          {props.btnText}
        </Button>
      )}
    </div>
  );
};

export default NoDataBanner;
