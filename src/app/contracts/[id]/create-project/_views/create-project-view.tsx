'use client';

import { CreateProject } from '@/common/constants/project/project-constants';
import Image from 'next/image';
import React, { useState } from 'react';
import tick from '../../../../../../public/assets/icons/tick-circle.svg';
import tickColored from '../../../../../../public/assets/icons/tick-circle-colored.svg';
import { Button } from '@/components/ui/button';
import { useParams, usePathname, useRouter } from 'next/navigation';
import { useGetProjectCreationStatus } from '../_queries/get-project-creation-status.query';
import { ProjectCreationResponse } from '@/common/types/interfaces/project/project';
import DataLoader from '@/common/components/common/data-loader';
import DiscardModal from '@/common/components/modals/discard-modal';
import { useDeleteProject } from '../_mutations/delete-project.mutation';

const CreateProjectView = () => {
  const [deleteModal, setDeleteModal] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const params = useParams();

  // Fetch project creation status
  const { data, isLoading } = useGetProjectCreationStatus(
    params.id as string,
    params['project-id'] as string,
  );

  // Api to delete a project
  const { mutate, isPending } = useDeleteProject(
    params.id as string,
    params['project-id'] as string,
  );

  return (
    <div className='center-div h-full'>
      <div className='sm:w-4/5 w-11/12 sm:mt-16 mt-4 p-4 space-y-6'>
        <p className='sm:text-3xl text-2xl font-semibold-'>Create Project</p>
        {isLoading ? (
          <DataLoader className='h-[60vh]' />
        ) : (
          <>
            <div className='border rounded-xl shadow-sm'>
              {CreateProject.map((item, index) => (
                <div
                  key={index}
                  className='flex sm:flex-row flex-col sm:gap-0 gap-4 justify-between items-center sm:p-4 p-2 border-b'
                >
                  <div className='flex items-center gap-2'>
                    {data && data[item.tab as keyof ProjectCreationResponse] ? (
                      <Image
                        src={tickColored}
                        alt='tick-icon'
                      />
                    ) : (
                      <Image
                        src={tick}
                        alt='tick-icon'
                      />
                    )}
                    <div>
                      <p className='text-xl font-semibold'>{item.title}</p>
                      <p className='text-gray-500'>{item.subText}</p>
                    </div>
                  </div>
                  <div className='flex justify-end sm:justify-normal w-full sm:w-max'>
                    <Button
                      onClick={() => router.push(`${pathname}/${item.link}`)}
                      className='bg-white hover:bg-white border border-primary-hex text-primary-hex'
                    >
                      {data && data[item.tab as keyof ProjectCreationResponse]
                        ? item.editText
                        : item.btnText}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <div className='flex justify-end'>
              <div className='flex items-center gap-2'>
                <Button
                  type='button'
                  onClick={() => {
                    if (params['project-id']) {
                      setDeleteModal(true);
                    } else {
                      router.push(`/contracts/${params.id}/projects`);
                    }
                  }}
                  className={`bg-white hover:bg-white border ${params['project-id'] ? 'border-red-500 text-red-500' : 'text-primary-hex border-primary-hex'}`}
                >
                  {params['project-id'] ? 'Delete' : 'Cancel'}
                </Button>
                <Button>Save and Continue</Button>
              </div>
            </div>
          </>
        )}
      </div>
      <DiscardModal
        openModal={deleteModal}
        setOpenModal={setDeleteModal}
        title='Do you really want to delete this project?'
        confirmBtnText='Confirm'
        isPending={isPending}
        onClick={() =>
          mutate(null, {
            onSuccess() {
              setDeleteModal(false);
              router.push(`/contracts/${params.id}/projects`);
            },
          })
        }
      />
    </div>
  );
};

export default CreateProjectView;
