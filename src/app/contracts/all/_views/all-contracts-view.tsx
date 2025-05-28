'use client';

import NoDataBanner from '@/common/components/common/no-data-banner';
import SearchBar from '@/common/components/common/search-bar';
import { useDebounce } from '@/common/hooks/useDebounce';
import { Button } from '@/components/ui/button';
import moment from 'moment';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import noContractsImg from '../../../../../public/assets/images/no-contracts-img.svg';
import ContractTable from '../_components/contracts-table';
import DateRange from '../_components/date-range';
import { useGetAllContracts } from '../_queries/get-all-contracts.query';

const AllContractsView = () => {
  const [search, setSearch] = useState<string | null>(null);

  // Pagination states
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);

  const [startDate, setStartDate] = useState<Date | undefined>();
  const [endDate, setEndDate] = useState<Date | undefined>();

  const segments = usePathname().split('/').filter(Boolean);

  const debouncedSearch = useDebounce(search, 500);

  // fetch all contracts
  const { data, isLoading } = useGetAllContracts(
    rowsPerPage,
    currentPage,
    startDate ? moment(startDate).format('YYYY-MM-DD') : undefined,
    endDate ? moment(endDate).format('YYYY-MM-DD') : undefined,
    debouncedSearch,
  );

  useEffect(() => {
    if (data) {
      setCurrentPage(data?.pagination.page);
      setRowsPerPage(data?.pagination.limit);
    }
  }, [data]);

  useEffect(() => {
    if (segments.includes('all')) {
      localStorage.removeItem('contract');
    }
  }, [segments]);

  const clearFilters = () => {
    setStartDate(undefined);
    setEndDate(undefined);
    setSearch(null);
  };

  return (
    <div className='center-div'>
      <div className='w-11/12 sm:mt-16 mt-4 p-4 space-y-6'>
        <p className='sm:text-3xl text-2xl font-semibold'>
          Select a Contract to Get Started
        </p>
        <div className='table-div'>
          <div className='flex sm:flex-row flex-col sm:items-center justify-between gap-4 p-4'>
            <SearchBar
              search={search}
              setSearch={setSearch}
            />
            <div className='flex sm:flex-row flex-col sm:items-center gap-2'>
              <DateRange
                start_date={startDate}
                setStartDate={setStartDate}
                end_date={endDate}
                setEndDate={setEndDate}
              />
              <Button
                className='bg-white border hover:bg-white border-primary text-primary'
                onClick={clearFilters}
              >
                Clear Filters
              </Button>
            </div>
          </div>
          <ContractTable
            data={data?.contracts || []}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            rowsPerPage={rowsPerPage}
            setRowsPerPage={setRowsPerPage}
            rowsOption={[5, 10, 20, 50]}
            total={data?.pagination.total || 0}
            totalPages={data?.pagination.totalPages || 0}
            isLoading={isLoading}
            fallback={
              startDate || endDate || debouncedSearch ? (
                <NoDataBanner
                  img={noContractsImg}
                  text='No results found...'
                />
              ) : (
                <NoDataBanner
                  img={noContractsImg}
                  text='You dont have any contracts yet'
                />
              )
            }
          />
        </div>
      </div>
    </div>
  );
};

export default AllContractsView;
