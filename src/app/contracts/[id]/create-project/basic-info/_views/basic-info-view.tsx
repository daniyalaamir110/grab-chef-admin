'use client';

import { useParams } from 'next/navigation';
import BasicInfoForm from '../_components/forms/basic-info-form';
import { useGetBasicInfo } from '../_queries/get-basic-info.query';
import BackLink from '@/common/components/common/back-link.component';

const BasicInfoView = () => {
  const params = useParams();

  // Fetch basic info
  const { data } = useGetBasicInfo(
    params.id as string,
    params['project-id'] as string,
  );

  return (
    <div className='center-div'>
      <div className='sm:w-4/5 w-11/12 sm:mt-16 mt-4 p-4 space-y-10 mb-20'>
        <div className='space-y-4'>
          <BackLink
            href={`/contracts/${params.id}/create-project/${params['project-id'] ?? ''}`}
            text='Back'
          />
          {data?.name ? (
            <p className='sm:text-3xl text-2xl font-semibold'>
              Update Basic Info
            </p>
          ) : (
            <div>
              <p className='sm:text-3xl text-2xl font-semibold'>
                Create New Project
              </p>
              <p className='text-gray-500'>
                Begin by adding the core details of your project. These details
                help attendees understand your project at a glance.
              </p>
            </div>
          )}
        </div>
        <BasicInfoForm basicInfoObj={data} />
      </div>
    </div>
  );
};

export default BasicInfoView;
