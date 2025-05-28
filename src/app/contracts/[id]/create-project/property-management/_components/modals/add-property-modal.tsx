import DynamicModal from '@/common/components/modals/dynamic-modal';
import { FC } from 'react';
import AddPropertyForm from '../forms/add-property-form';
import { BasicModalProps } from '@/common/types/interfaces/common';

const AddPropertyModal: FC<BasicModalProps> = ({ ...props }) => {
  return (
    <DynamicModal
      title='Add New Property'
      subText='Create a custom property to enhance the structure of this page. Specify the property details, choose its type, and set its visibility settings. '
      openModal={props.openModal}
      setOpenModal={props.setOpenModal}
      className='min-w-2/5'
    >
      <AddPropertyForm setOpenModal={props.setOpenModal} />
    </DynamicModal>
  );
};

export default AddPropertyModal;
