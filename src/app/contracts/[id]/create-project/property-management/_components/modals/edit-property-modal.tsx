import DynamicModal from '@/common/components/modals/dynamic-modal';
import { EditPropertyModalProps } from '@/common/types/interfaces/project/property-management';
import { FC } from 'react';
import EditPropertyForm from '../forms/edit-property-form';

const EditPropertyModal: FC<EditPropertyModalProps> = ({ ...props }) => {
  return (
    <DynamicModal
      title='Update Property'
      openModal={props.openModal}
      setOpenModal={props.setOpenModal}
      className='min-w-2/5'
    >
      <EditPropertyForm
        property={props.property}
        setOpenModal={props.setOpenModal}
      />
    </DynamicModal>
  );
};

export default EditPropertyModal;
