import DynamicModal from '@/common/components/modals/dynamic-modal';
import { FC } from 'react';
import { EditTaxonomyModalProps } from '@/common/types/interfaces/project/taxonomies';
import EditTaxonomyForm from '../forms/edit-taxonomy-form';

const EditTaxonomyModal: FC<EditTaxonomyModalProps> = ({ ...props }) => {
  return (
    <DynamicModal
      title='Update taxonomy'
      openModal={props.openModal}
      setOpenModal={props.setOpenModal}
      className='h-auto max-h-4/5 overflow-y-auto min-w-2/5'
    >
      <EditTaxonomyForm {...props} />
    </DynamicModal>
  );
};

export default EditTaxonomyModal;
