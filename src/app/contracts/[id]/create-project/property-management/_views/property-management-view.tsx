'use client';

import BackLink from '@/common/components/common/back-link.component';
import MultiSelect from '@/common/components/common/multi-select';
import NoDataBanner from '@/common/components/common/no-data-banner';
import SearchBar from '@/common/components/common/search-bar';
import Tabs from '@/common/components/common/tabs';
import DiscardModal from '@/common/components/modals/discard-modal';
import { PropertyManagementTabs } from '@/common/constants/project/project-constants';
import { useDebounce } from '@/common/hooks/useDebounce';
import { Visibility } from '@/common/types/enums/project/property-management';
import { CreatePropertyResponse } from '@/common/types/interfaces/project/property-management';
import { Button } from '@/components/ui/button';
import { enumToOptions } from '@/lib/convert-enum-into-key-value-pair';
import { useParams, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { BiPlus } from 'react-icons/bi';
import noPropertyImg from '../../../../../../../public/assets/images/no-property-img.svg';
import AttendeeTable from '../_components/attendee-table';
import AddPropertyModal from '../_components/modals/add-property-modal';
import EditPropertyModal from '../_components/modals/edit-property-modal';
import { useGetAllCustomProperties } from '../_queries/get-all-properties.query';

const PropertyManagementView = () => {
  const [search, setSearch] = useState<string | null>(null);
  const [visibility, setVisibility] = useState<string[] | null>(null);
  const [activeTab, setActiveTab] = useState<string | undefined>();
  const [propertyData, setPropertyData] =
    useState<Partial<CreatePropertyResponse> | null>(null);

  const params = useParams();

  // Pagination states
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);

  const debouncedSearch = useDebounce(search, 500);

  // Modal state
  const [addModal, setAddModal] = useState<boolean>(false);
  const [discardModal, setDiscardModal] = useState<boolean>(false);
  const [editModal, setEditModal] = useState<boolean>(false);

  const searchParams = useSearchParams();
  const queryParams = Array.from(searchParams.keys());

  const visibilityOptions = enumToOptions(Visibility);

  useEffect(() => {
    if (queryParams.length > 0) {
      setActiveTab(queryParams[0]);
    }
  }, [queryParams]);

  const type = Array.from(searchParams.keys())[0];

  // Fetch all custom properties
  const { data, isLoading } = useGetAllCustomProperties(
    params.id as string,
    params['project-id'] as string,
    rowsPerPage,
    currentPage,
    visibility,
    debouncedSearch,
    type,
  );

  const clearFilters = () => {
    setSearch(null);
    setVisibility(null);
  };

  return (
    <div className='center-div'>
      <div className='sm:w-4/5 w-11/12 sm:mt-16 mt-4 p-4 space-y-6'>
        <BackLink
          href={`/contracts/${params.id}/create-project/${params['project-id'] ?? ''}`}
          text='Back'
        />
        <div>
          <p className='sm:text-3xl text-2xl font-semibold'>
            Custom Property Management
          </p>
          <p className='text-gray-500'>
            Create and manage permission groups for Users, Exhibitors
          </p>
        </div>
        <Tabs
          tabs={PropertyManagementTabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <div className='table-div'>
          <div className='flex lg:items-center lg:flex-row flex-col justify-between gap-2 p-4'>
            <SearchBar
              search={search}
              setSearch={setSearch}
            />
            <div className='flex gap-2 sm:items-center sm:flex-row flex-col'>
              <MultiSelect
                label='Visibility'
                options={visibilityOptions}
                value={visibility}
                setValue={setVisibility}
                className='min-w-40 w-full'
              />
              {data && data?.customProperties?.length > 0 && (
                <Button
                  type='button'
                  onClick={() => setAddModal(true)}
                >
                  <BiPlus />
                  Add Custom Property
                </Button>
              )}
              <Button
                className='bg-white border hover:bg-white border-primary text-primary '
                onClick={clearFilters}
              >
                Clear Filters
              </Button>
            </div>
          </div>
          <AttendeeTable
            data={data?.customProperties || []}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            rowsPerPage={rowsPerPage}
            setRowsPerPage={setRowsPerPage}
            rowsOption={[5, 10, 20, 50]}
            total={data?.pagination.total || 0}
            totalPages={data?.pagination.totalPages || 0}
            setEditModal={setEditModal}
            setDiscardModal={setDiscardModal}
            isLoading={isLoading}
            setProperty={setPropertyData}
            fallback={
              visibility || debouncedSearch ? (
                <NoDataBanner
                  img={noPropertyImg}
                  text='No results found...'
                />
              ) : (
                <NoDataBanner
                  img={noPropertyImg}
                  text='No Custom Properties Created Yet'
                  subText='Create custom properties to tailor this entity to your project needs. Start by adding fields that enhance flexibility and control.'
                  isBtn={true}
                  btnText='Add Custom Property'
                  onClick={() => setAddModal(true)}
                />
              )
            }
          />
        </div>
      </div>
      <AddPropertyModal
        openModal={addModal}
        setOpenModal={setAddModal}
      />
      <DiscardModal
        title='Discard Changes?'
        subText='You’ve made changes to custom properties that haven’t been saved yet. If you leave now, all unsaved changes will be lost.'
        openModal={discardModal}
        setOpenModal={setDiscardModal}
        confirmBtnText='Stay on Page'
      />
      <EditPropertyModal
        property={propertyData}
        openModal={editModal}
        setOpenModal={setEditModal}
      />
    </div>
  );
};

export default PropertyManagementView;
