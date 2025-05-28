import DynamicModal from '@/common/components/modals/dynamic-modal';
import { SuccessModalProps } from '@/common/types/interfaces/common';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { FC } from 'react';

const SuccessModal: FC<SuccessModalProps> = ({ ...props }) => {
  return (
    <DynamicModal
      openModal={props.openModal}
      setOpenModal={props.setOpenModal}
      className='mi-w-fit flex flex-col items-center'
    >
      <div className='flex flex-col items-center p-4 space-y-4'>
        <Image
          src={props.img || ''}
          alt='tick'
          height={100}
          width={100}
        />
        <p className='text-center text-xl font-semibold'>{props.text}</p>
        <Button
          className='w-full'
          onClick={props.onClick}
        >
          {props.btnText}
        </Button>
      </div>
    </DynamicModal>
  );
};

export default SuccessModal;
