import DynamicModal from '@/common/components/modals/dynamic-modal';
import { FC } from 'react';

import { EditChildTaxonomyModalProps } from '@/common/types/interfaces/project/taxonomies';
import EditTaxonomyChild from '../forms/edit-taxonomy-child-form';

const EditTaxonomyChildModal: FC<EditChildTaxonomyModalProps> = ({
  ...props
}) => {
  return (
    <DynamicModal
      title='Update'
      openModal={props.openModal}
      setOpenModal={props.setOpenModal}
      className='h-auto max-h-4/5 overflow-y-auto min-w-2/5'
    >
      <EditTaxonomyChild {...props} />
    </DynamicModal>
  );
};

export default EditTaxonomyChildModal;
