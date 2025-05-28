'use client';

import Tabs from '@/common/components/common/tabs';
import { PermissionTabs } from '@/common/constants/project/project-constants';
import { initialValues } from '@/common/constants/project/project-permission-contants';
import {
  AccessControl,
  PermissionKey,
  UserRolePermissions,
} from '@/common/types/interfaces/project/permission';
import { Button } from '@/components/ui/button';
import { useFormik } from 'formik';
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from 'next/navigation';
import { useEffect, useState } from 'react';
import AttendeePermissions from '../_components/attendee-permissions';
import TaxonomiesModal from '../_components/modals/taxonomies-modal';
import ExhibitorPermissions from '../_components/exhibitor-permissions';
import TabsSkeleton from '@/common/components/skeletons/tabs-skeleton';
import DataLoader from '@/common/components/common/data-loader';
import GuestUserPermissions from '../_components/guest-user-permissions';
import { useAddPermissions } from '../_mutations/add-permissions.mutation';
import { useGetPermissionGroups } from '../_queries/get-permission-groups';
import { useGetTaxonomiesPermissionGroups } from '../_queries/get-taxonomies-permission-groups';
import BackLink from '@/common/components/common/back-link.component';
import { useUpdatePermissions } from '../_mutations/edit-permissions.mutation';

const AddPermissionsView = () => {
  const [activeTab, setActiveTab] = useState<string | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [permissionKey, setPermissionKey] = useState<PermissionKey>({
    parent_key: '',
    permission_key: '',
  });

  // Modal states
  const [openModal, setOpenModal] = useState<boolean>(false);

  const pathname = usePathname();
  const params = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();
  const queryParams = Array.from(searchParams.keys());

  // Api to get taxonomies
  const { data: taxonomies, isLoading: isTaxonomiesLoading } =
    useGetTaxonomiesPermissionGroups(
      params.id as string,
      params['project-id'] as string,
    );

  // Api to get permission groups by id
  const { data: permissionGroups } = useGetPermissionGroups(
    params.id as string,
    params['project-id'] as string,
  );

  // Add permissions
  const { mutate: create, isPending: isCreatePending } = useAddPermissions(
    params.id as string,
    params['project-id'] as string,
  );

  // Edit permissions
  const { mutate: update, isPending: isUpdatePending } = useUpdatePermissions(
    params.id as string,
    params['project-id'] as string,
  );

  useEffect(() => {
    if (!queryParams.length) {
      setIsLoading(true);
      router.push(
        `/contracts/${params.id}/create-project/${params['project-id'] ?? ''}/add-permissions?attendee=true`,
      );
      setActiveTab('attendee');
    }
    if (queryParams.length > 0) {
      setActiveTab(queryParams[0]);
      setIsLoading(false);
    }
  }, [queryParams, pathname, router, params]);

  const isDataReady =
    permissionGroups && Object.keys(permissionGroups).length > 0;

  const formik = useFormik({
    initialValues: isDataReady ? permissionGroups : initialValues,
    validationSchema: null,
    enableReinitialize: true,
    onSubmit: values => {
      if (!values.are_preset_permissions_enabled) {
        if (
          values.exhibitor_manager.can_manage_agenda &&
          values.exhibitor_manager.can_invite_managers &&
          values.exhibitor_manager.can_edit_other_manager_permission
        ) {
          values.exhibitor_manager.can_manage_agenda.is_enabled = false;
          values.exhibitor_manager.can_invite_managers.is_enabled = false;
          values.exhibitor_manager.can_edit_other_manager_permission.is_enabled =
            false;
        }
      }
      if (permissionGroups) {
        Object.values(values).forEach((value: UserRolePermissions) => {
          Object.values(value).forEach((item: AccessControl) => {
            delete item['id'];
            if (item.is_enabled && (item.value === 0 || item.value === '')) {
              item.value = 0;
              item.is_enabled = false;
            }
            if (item.is_enabled === false && item.value) {
              item.value = 0;
            }
            if (item.select_type === 'taxonomy' && !item.taxonomies) {
              item.select_type = 'view_all';
            }
          });
        });
        update(values);
      } else {
        create(values, {
          onSuccess(data) {
            router.push(`/contracts/${params.id}/create-project/${data.id}`);
          },
        });
      }
    },
  });

  // console.log(formik.values);

  return (
    <div className='center-div'>
      <div className='sm:w-4/5 w-11/12 sm:mt-16 mt-4 p-4 space-y-10 mb-20'>
        <BackLink
          href={`/contracts/${params.id}/create-project/${params['project-id'] ?? ''}`}
          text='Back'
        />
        <div>
          <p className='sm:text-3xl text-2xl font-semibold'>
            Manage Permission
          </p>
          <p className='text-gray-500'>
            Set permissions for different roles, including attendee, exhibitor
            and guest users.
          </p>
        </div>
        {isLoading ? (
          <TabsSkeleton />
        ) : (
          <Tabs
            tabs={PermissionTabs}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        )}
        {isLoading ? (
          <DataLoader className='h-[50vh]' />
        ) : (
          <form
            onSubmit={formik.handleSubmit}
            className='space-y-6'
          >
            {activeTab === 'attendee' ? (
              <AttendeePermissions
                formik={formik}
                setOpenModal={setOpenModal}
                setPermissionKey={setPermissionKey}
              />
            ) : activeTab === 'exhibitor_manager' ? (
              <ExhibitorPermissions
                formik={formik}
                setOpenModal={setOpenModal}
                setPermissionKey={setPermissionKey}
              />
            ) : activeTab === 'guest_user' ? (
              <GuestUserPermissions
                formik={formik}
                setOpenModal={setOpenModal}
                setPermissionKey={setPermissionKey}
              />
            ) : null}
            <div className='flex justify-end gap-4 '>
              <Button
                type='button'
                onClick={() =>
                  router.push(
                    `/contracts/${params.id}/create-project/${params['project-id'] ?? ''}`,
                  )
                }
                className='bg-white hover:bg-white border border-primary-hex text-primary-hex'
              >
                Cancel
              </Button>
              <Button
                disabled={isCreatePending || isUpdatePending}
                type='submit'
              >
                {permissionGroups ? 'Update' : 'Save'}
              </Button>
            </div>
          </form>
        )}
      </div>
      <TaxonomiesModal
        formik={formik}
        permission_key={permissionKey}
        openModal={openModal}
        setOpenModal={setOpenModal}
        taxonomies={taxonomies}
        isLoading={isTaxonomiesLoading}
      />
    </div>
  );
};

export default AddPermissionsView;
