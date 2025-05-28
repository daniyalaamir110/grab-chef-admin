'use client';

import DateRange from '@/app/contracts/all/_components/date-range';
import Dropdown from '@/common/components/common/dropdown';
import NoDataBanner from '@/common/components/common/no-data-banner';
import SearchBar from '@/common/components/common/search-bar';
import { useDebounce } from '@/common/hooks/useDebounce';
import { Button } from '@/components/ui/button';
import moment from 'moment';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { BiPlus } from 'react-icons/bi';
import noProjectImg from '../../../../../../../public/assets/images/no-contracts-img.svg';
import ProjectsTable from '../_components/projects-table';
import { useGetAllProjects } from '../_queries/get-projects.query';

const options = ['All', 'Draft', 'Published'];

const ProjectsView = () => {
  const [search, setSearch] = useState<string | null>(null);
  const [value, setValue] = useState<string | null>('All');

  // Pagination states
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);

  const [startDate, setStartDate] = useState<Date | undefined>();
  const [endDate, setEndDate] = useState<Date | undefined>();

  const router = useRouter();
  const params = useParams();

  const debouncedSearch = useDebounce(search, 500);

  const { data, isLoading } = useGetAllProjects(
    params.id as string,
    rowsPerPage,
    currentPage,
    startDate ? moment(startDate).format('YYYY-MM-DD') : undefined,
    endDate ? moment(endDate).format('YYYY-MM-DD') : undefined,
    debouncedSearch,
    value === 'All' ? null : value?.toLowerCase(),
  );

  useEffect(() => {
    if (data) {
      setCurrentPage(data?.pagination.page);
      setRowsPerPage(data?.pagination.limit);
    }
  }, [data]);

  const clearFilters = () => {
    setStartDate(undefined);
    setEndDate(undefined);
    setSearch(null);
    setValue('All');
  };

  return (
    <div className='table-div'>
      <div className='flex lg:items-center lg:flex-row flex-col justify-between gap-4 p-4'>
        <SearchBar
          search={search}
          setSearch={setSearch}
        />
        <div className='flex gap-2 lg:items-center lg:flex-row flex-col'>
          <DateRange
            start_date={startDate}
            setStartDate={setStartDate}
            end_date={endDate}
            setEndDate={setEndDate}
          />
          <div className='flex gap-2 sm:items-center sm:flex-row flex-col'>
            <Dropdown
              label='Status'
              options={options}
              value={value}
              setValue={setValue}
              className='sm:w-24 w-full'
            />

            <Button
              onClick={() =>
                router.push(`/contracts/${params.id}/create-project`)
              }
            >
              <BiPlus />
              Create New Project
            </Button>
            <Button
              className='bg-white border hover:bg-white border-primary text-primary '
              onClick={clearFilters}
            >
              Clear Filters
            </Button>
          </div>
        </div>
      </div>
      <ProjectsTable
        data={data?.projects || []}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        rowsPerPage={rowsPerPage}
        setRowsPerPage={setRowsPerPage}
        rowsOption={[5, 10, 20, 50]}
        total={data?.pagination.total || 0}
        totalPages={data?.pagination.totalPages || 0}
        isLoading={isLoading}
        fallback={
          startDate || endDate || debouncedSearch || value !== 'all' ? (
            <NoDataBanner
              img={noProjectImg}
              text='No results found...'
            />
          ) : (
            <NoDataBanner
              img={noProjectImg}
              text='You dont have any projects yet'
            />
          )
        }
      />
    </div>
  );
};

export default ProjectsView;
