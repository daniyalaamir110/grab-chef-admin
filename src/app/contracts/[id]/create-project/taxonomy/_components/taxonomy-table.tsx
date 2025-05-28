'use client';

import { Checkbox } from '@/components/ui/checkbox';
import { ColumnDef } from '@tanstack/react-table';
import Image from 'next/image';
import { FC, useState } from 'react';
import editIcon from '../../../../../../../public/assets/icons/edit.svg';
import { RiArrowRightLine } from 'react-icons/ri';
import { DataTable } from '@/common/components/table-components/data-table';
import {
  Taxonomy,
  TaxonomyTableProps,
} from '@/common/types/interfaces/project/taxonomies';
import { usePathname, useRouter } from 'next/navigation';

const TaxonomyTable: FC<TaxonomyTableProps> = ({
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
  setEditModal,
  setTaxonomy,
}) => {
  const [selectedProperties, setSelectedProperties] = useState<string[]>();

  const router = useRouter();
  const pathname = usePathname();

  const columns: ColumnDef<Taxonomy>[] = [
    {
      id: 'select',
      accessorKey: '',
      header: () => null,
      cell: ({ row }) => {
        return (
          <Checkbox
            className='cursor-pointer'
            checked={
              (row.original.id &&
                selectedProperties?.includes(row.original.id.toString())) ||
              false
            }
            onCheckedChange={value => {
              if (value) {
                setSelectedProperties((prev = []) => {
                  if (row.original.id) {
                    return [...prev, row.original.id.toString()];
                  }
                });
              } else {
                setSelectedProperties(prev =>
                  prev?.filter(id => id !== row.original.id.toString()),
                );
              }
            }}
          />
        );
      },
    },
    {
      accessorKey: 'porting_code',
      header: 'Porting Code',
      cell: ({ row }) => {
        return <div>{row.original.porting_code}</div>;
      },
    },
    {
      accessorKey: 'title',
      header: 'Title',
      cell: ({ row }) => {
        return <div>{row.original.values[0].value}</div>;
      },
    },
    {
      accessorKey: 'children_count',
      header: 'Count',
      cell: ({ row }) => {
        return <div>{row.original.children_count}</div>;
      },
    },
    {
      accessorKey: 'applied_to',
      header: 'Applied To',
      cell: ({ row }) => {
        return (
          <div className='flex gap-1 items-center'>
            {row.original.applied_to.flatMap((item, index) => (
              <p
                key={index}
                className='capitalize'
              >
                {item}
                {!(row.original.applied_to.length - 1 === index) && (
                  <span>,</span>
                )}
              </p>
            ))}
          </div>
        );
      },
    },
    {
      accessorKey: 'action',
      header: 'Actions',
      cell: ({ row }) => {
        return (
          <div className='flex items-center gap-12'>
            <button
              type='button'
              onClick={() => {
                if (setTaxonomy && setEditModal) {
                  setTaxonomy(row.original);
                  setEditModal(true);
                }
              }}
            >
              <Image
                src={editIcon}
                alt='edit-icon'
                className='cursor-pointer'
                height={20}
                width={20}
              />
            </button>
            <button
              type='button'
              onClickCapture={() =>
                router.push(`${pathname}/${row.original.id}`)
              }
              className='cursor-pointer'
            >
              <RiArrowRightLine size={20} />
            </button>
          </div>
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

export default TaxonomyTable;
