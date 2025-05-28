'use client';

import { DataTable } from '@/common/components/table-components/data-table';
import {
  Taxonomy,
  TaxonomyChildTableProps,
} from '@/common/types/interfaces/project/taxonomies';
import { Checkbox } from '@/components/ui/checkbox';
import { ColumnDef } from '@tanstack/react-table';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC, useState } from 'react';
import editIcon from '../../../../../../../../public/assets/icons/edit.svg';
import trashIcon from '../../../../../../../../public/assets/icons/trash.svg';

const TaxonomyChildTable: FC<TaxonomyChildTableProps> = ({
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
  setTaxonomy,
  setEditModal,
}) => {
  const [selectedProperties, setSelectedProperties] = useState<string[]>();

  // const router = useRouter();
  const pathname = usePathname();

  const columns: ColumnDef<Partial<Taxonomy>>[] = [
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
                  prev?.filter(id => id !== row.original.id?.toString()),
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
      accessorKey: 'name',
      header: 'Name',
      cell: ({ row }) => {
        return (
          <div>
            {row.original.values &&
              row.original.values.find(lang => lang.language_code === 'en')
                ?.value}
          </div>
        );
      },
    },
    {
      accessorKey: 'children_count',
      header: 'Children',
      cell: ({ row }) => {
        return <div>{row.original.children_count}</div>;
      },
    },
    {
      accessorKey: 'link',
      header: '',
      cell: ({ row }) => {
        return (
          <Link
            className='text-blue-500 underline'
            href={`${pathname}/${row.original.id?.toString()}` || ''}
          >
            Manage Children
          </Link>
        );
      },
    },
    {
      accessorKey: 'action',
      header: '',
      cell: ({ row }) => {
        return (
          <div className='flex items-center gap-12'>
            <button
              type='button'
              onClick={() => {
                if (setEditModal && setTaxonomy) {
                  setEditModal(true);
                  setTaxonomy(row.original);
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
            <button>
              <Image
                src={trashIcon}
                alt='trash-icon'
                className='cursor-pointer'
                height={20}
                width={20}
              />
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

export default TaxonomyChildTable;
