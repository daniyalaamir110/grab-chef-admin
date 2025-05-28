import { DiscardDivProps } from '@/common/types/interfaces/common';
import Image from 'next/image';
import React, { FC } from 'react';
import discardIcon from '../../../../public/assets/icons/discard-icon.svg';
import { Button } from '@/components/ui/button';

const DiscardDiv: FC<DiscardDivProps> = ({
  setOpenModal,
  title,
  subText,
  confirmBtnText,
  isPending,
  onClick,
}) => {
  return (
    <div className='flex flex-col items-center gap-2'>
      <Image
        src={discardIcon}
        alt='discard-icon'
      />
      <p className='font-semibold text-2xl'>{title}</p>
      <p className='text-gray-500'>{subText}</p>
      <div className='grid grid-cols-2 gap-2 w-full'>
        <Button
          type='button'
          className='bg-white hover:bg-white border border-primary-hex text-primary-hex'
          onClick={() => setOpenModal(false)}
        >
          Discard
        </Button>
        <Button
          className='text-white'
          type='submit'
          onClick={onClick}
          disabled={isPending ?? false}
        >
          {confirmBtnText}
        </Button>
      </div>
    </div>
  );
};

export default DiscardDiv;
