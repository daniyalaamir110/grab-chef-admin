'use client';

import { Taxonomy } from '@/common/types/interfaces/project/taxonomies';
import { useParams, usePathname } from 'next/navigation';
import { FC } from 'react';
import CreateTaxonomyForm from '../_components/forms/create-taxonomy-form';
import BackLink from '@/common/components/common/back-link.component';

export interface CreateTaxonomyViewProps {
  taxonomy?: Taxonomy;
}

const CreateTaxonomyView: FC<CreateTaxonomyViewProps> = () => {
  const pathname = usePathname();

  const params = useParams();

  return (
    <div className='center-div'>
      <div className='sm:w-4/5 w-11/12 sm:mt-16 mt-4 p-4 space-y-6'>
        <BackLink
          href={`/contracts/${params.id}/create-project/${params['project-id'] ?? ''}/taxonomy`}
          text='Back'
        />
        <div>
          <p className='sm:text-3xl text-2xl font-semibold'>
            {pathname.includes('create')
              ? 'Create New Taxonomy'
              : pathname.includes('edit')
                ? 'Update taxonomy'
                : ''}
          </p>
          {pathname.includes('create') && (
            <p className='text-gray-500'>
              Build a multi-level or single-level taxonomy by adding categories
              and defining their hierarchy. Start simple and expand as needed.
            </p>
          )}
        </div>
        <CreateTaxonomyForm />
      </div>
    </div>
  );
};

export default CreateTaxonomyView;
