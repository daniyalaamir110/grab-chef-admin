'use client';

import { DataTable } from '@/common/components/table-components/data-table';
import {
  Contract,
  ContractTableProps,
} from '@/common/types/interfaces/contracts/contract';
import { ColumnDef } from '@tanstack/react-table';
import { useRouter } from 'next/navigation';
import { FC } from 'react';
import { GoArrowRight } from 'react-icons/go';
import moment from 'moment';

const ContractTable: FC<ContractTableProps> = ({
  rowsPerPage,
  setRowsPerPage,
  currentPage,
  setCurrentPage,
  total,
  rowsOption,
  totalPages,
  data,
  fallback,
  isLoading,
}) => {
  // const [selectedProperties, setSelectedProperties] = useState<string[]>();

  const router = useRouter();

  const columns: ColumnDef<Partial<Contract>>[] = [
    {
      accessorKey: 'name',
      header: 'Contract Name',
      cell: ({ row }) => {
        return <div>{row.original.name}</div>;
      },
    },
    {
      accessorKey: 'start_date',
      header: 'Start Date',
      cell: ({ row }) => {
        return <div>{moment(row.original.start_date).format('l')}</div>;
      },
    },
    {
      accessorKey: 'end_date',
      header: 'End Date',
      cell: ({ row }) => {
        return <div>{moment(row.original.end_date).format('l')}</div>;
      },
    },
    {
      accessorKey: 'projects',
      header: 'No of Projects',
      cell: ({ row }) => {
        return <div>{row.original.projects_count}</div>;
      },
    },
    {
      accessorKey: 'action',
      header: '',
      cell: ({ row }) => {
        return (
          <button
            onClick={() => {
              router.push(`/contracts/${row.original.id}/sub-admins`);
              localStorage.setItem('contract', row.original.name as string);
            }}
            className='cursor-pointer'
          >
            <GoArrowRight />
          </button>
        );
      },
    },
  ];
  return (
    <div>
      <DataTable
        columns={columns}
        data={data}
        rowsPerPage={rowsPerPage}
        setRowsPerPage={setRowsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        total={total}
        rowsOption={rowsOption}
        totalPages={totalPages}
        fallback={fallback}
        isLoading={isLoading}
      />
    </div>
  );
};

export default ContractTable;
