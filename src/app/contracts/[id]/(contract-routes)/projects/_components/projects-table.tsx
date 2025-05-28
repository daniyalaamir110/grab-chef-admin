'use client';

import { DataTable } from '@/common/components/table-components/data-table';
import {
  Project,
  ProjectTableProps,
} from '@/common/types/interfaces/project/project';
import { Button } from '@/components/ui/button';
import { ColumnDef } from '@tanstack/react-table';
import moment from 'moment';
import { useParams, useRouter } from 'next/navigation';
import { FC } from 'react';

const ProjectsTable: FC<ProjectTableProps> = ({
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

  const params = useParams();

  const columns: ColumnDef<Partial<Project>>[] = [
    {
      accessorKey: 'project_name',
      header: 'Project Name',
      cell: ({ row }) => {
        return <div>{row.original.name ?? 'N/A'}</div>;
      },
    },
    {
      accessorKey: 'start_date',
      header: 'Start Date',
      cell: ({ row }) => {
        return (
          <div>
            {row.original.start_date
              ? moment(row.original.start_date).format('l')
              : 'N/A'}
          </div>
        );
      },
    },
    {
      accessorKey: 'end_date',
      header: 'End Date',
      cell: ({ row }) => {
        return (
          <div>
            {row.original.end_date
              ? moment(row.original.end_date).format('l')
              : 'N/A'}
          </div>
        );
      },
    },
    {
      accessorKey: 'location',
      header: 'Location',
      cell: ({ row }) => {
        return <div>{row.original.location ?? 'N/A'}</div>;
      },
    },
    {
      accessorKey: 'status',
      header: 'Status',
      cell: ({ row }) => {
        return (
          <div
            className={`capitalize rounded-lg font-semibold px-4 w-max p-2 ${row.original.status === 'draft' ? 'bg-gray-100' : 'bg-green-100 text-green-700'}`}
          >
            {row.original.status}
          </div>
        );
      },
    },
    {
      accessorKey: 'action',
      header: 'Action',
      cell: ({ row }) => {
        return (
          <Button
            onClick={() => {
              router.push(
                `/contracts/${params.id}/create-project/${row.original.id}`,
              );
            }}
            className={`bg-white hover:bg-white border min-w-36 ${
              row.original.status === 'draft'
                ? 'text-danger-hex border-danger-hex'
                : 'text-primary border-primary'
            }`}
          >
            {row.original.status === 'draft'
              ? 'Complete Setup'
              : 'View Details'}
          </Button>
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

export default ProjectsTable;
