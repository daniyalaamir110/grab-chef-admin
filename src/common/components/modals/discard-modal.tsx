import React, { FC } from 'react';
import DynamicModal from './dynamic-modal';
import DiscardDiv from '../common/discard-div';
import { DiscardModalProps } from '@/common/types/interfaces/common';

const DiscardModal: FC<DiscardModalProps> = ({ ...props }) => {
  return (
    <DynamicModal
      openModal={props.openModal}
      setOpenModal={props.setOpenModal}
    >
      <DiscardDiv
        title={props.title}
        subText={props.subText}
        confirmBtnText={props.confirmBtnText}
        setOpenModal={props.setOpenModal}
        isPending={props.isPending}
        onClick={props.onClick}
      />
    </DynamicModal>
  );
};

export default DiscardModal;
