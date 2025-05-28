'use client';

import MultiSelect from '@/common/components/common/multi-select';
import SearchBar from '@/common/components/common/search-bar';
import { Usage, Visibility } from '@/common/types/enums/taxonomy/taxonomy';
import { Button } from '@/components/ui/button';
import { enumToOptions } from '@/lib/convert-enum-into-key-value-pair';
import React, { useState } from 'react';
import { BiPlus } from 'react-icons/bi';
import TaxonomyTable from '../_components/taxonomy-table';
import { useGetAllTaxonomies } from '../_queries/get-taxonomies.query';
import { useParams, usePathname, useRouter } from 'next/navigation';
import { useDebounce } from '@/common/hooks/useDebounce';
import noTaxonomyImg from '../../../../../../../public/assets/images/no-taxonomy.svg';
import NoDataBanner from '@/common/components/common/no-data-banner';
import { Taxonomy } from '@/common/types/interfaces/project/taxonomies';
import EditTaxonomyModal from '../_components/modals/edit-taxonomy-modal';
import BackLink from '@/common/components/common/back-link.component';

const TaxonomyView = () => {
  const [search, setSearch] = useState<string | null>(null);
  const [visibility, setVisibility] = useState<string[] | null>(null);
  const [usage, setUsage] = useState<string[] | null>(null);
  const [taxonomyData, setTaxonomyData] = useState<Taxonomy | null>(null);

  // Modal states
  const [editModal, setEditModal] = useState<boolean>(false);

  // Pagination states
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);

  const params = useParams();

  const debouncedSearch = useDebounce(search, 500);

  // Fetch all taxonomies
  const { data, isLoading } = useGetAllTaxonomies(
    params.id as string,
    params['project-id'] as string,
    rowsPerPage,
    currentPage,
    debouncedSearch,
    visibility,
    usage,
  );

  const usageOptions = enumToOptions(Usage);
  const visibilityOptions = enumToOptions(Visibility);

  const router = useRouter();
  const pathname = usePathname();

  const clearFilters = () => {
    setVisibility(null);
    setUsage(null);
    setSearch(null);
  };

  return (
    <div className='center-div'>
      <div className='sm:w-4/5 w-11/12 sm:mt-16 mt-4 p-4 space-y-6'>
        <BackLink
          href={`/contracts/${params.id}/create-project/${params['project-id'] ?? ''}`}
          text='Back'
        />
        <p className='sm:text-3xl text-2xl font-semibold'>Taxonomy Listing</p>
        <div className='table-div'>
          <div className='flex lg:items-center lg:flex-row flex-col justify-between gap-2 p-4'>
            <SearchBar
              search={search}
              setSearch={setSearch}
            />
            <div className='flex gap-2 lg:items-center lg:flex-row flex-col'>
              <div className='flex sm:items-center sm:flex-row flex-col gap-2'>
                <MultiSelect
                  label='Select'
                  options={usageOptions}
                  value={usage}
                  setValue={setUsage}
                  className='min-w-40 w-full'
                />
                <MultiSelect
                  label='Select'
                  options={visibilityOptions}
                  value={visibility}
                  setValue={setVisibility}
                  className='min-w-40 w-full'
                />
              </div>
              <div className='flex items-center sm:flex-row flex-col gap-2'>
                <Button
                  type='button'
                  onClick={() => router.push(`${pathname}/create`)}
                  className='sm:w-max w-full'
                >
                  <BiPlus />
                  Create New Taxonomy
                </Button>
                <Button
                  className='bg-white border hover:bg-white border-primary text-primary sm:w-max w-full'
                  onClick={clearFilters}
                >
                  Clear Filters
                </Button>
              </div>
            </div>
          </div>
          <TaxonomyTable
            data={data?.taxonomies || []}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            rowsPerPage={rowsPerPage}
            setRowsPerPage={setRowsPerPage}
            rowsOption={[5, 10, 20, 50]}
            total={data?.pagination.total || 0}
            totalPages={data?.pagination.totalPages || 0}
            setEditModal={setEditModal}
            setTaxonomy={setTaxonomyData}
            isLoading={isLoading}
            fallback={
              debouncedSearch || visibility || usage ? (
                <NoDataBanner
                  img={noTaxonomyImg}
                  text='No results found...'
                />
              ) : (
                <NoDataBanner
                  img={noTaxonomyImg}
                  text='No Taxonomies Created Yet'
                  subText='Organize your entities by creating taxonomies for better filtering, matching, and analytics. Click to create your first taxonomy and start organizing your data effectively'
                />
              )
            }
          />
        </div>
        <EditTaxonomyModal
          openModal={editModal}
          setOpenModal={setEditModal}
          taxonomy={taxonomyData}
        />
      </div>
    </div>
  );
};

export default TaxonomyView;
