import DynamicModal from '@/common/components/modals/dynamic-modal';
import { FC } from 'react';

import { CreateTaxonomyChildModalProps } from '@/common/types/interfaces/project/taxonomies';
import CreateTaxonomyChild from '../forms/create-taxonomy-child-form';

const CreateTaxonomyChildModal: FC<CreateTaxonomyChildModalProps> = ({
  ...props
}) => {
  return (
    <DynamicModal
      title={`Add a Subcategory for ${props.name}`}
      openModal={props.openModal}
      setOpenModal={props.setOpenModal}
      className='min-w-2/5'
    >
      <CreateTaxonomyChild {...props} />
    </DynamicModal>
  );
};

export default CreateTaxonomyChildModal;
