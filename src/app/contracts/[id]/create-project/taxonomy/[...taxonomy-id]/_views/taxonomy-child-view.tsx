import NoDataBanner from '@/common/components/common/no-data-banner';
import SearchBar from '@/common/components/common/search-bar';
import { useDebounce } from '@/common/hooks/useDebounce';
import { Button } from '@/components/ui/button';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import { BiPlus } from 'react-icons/bi';
import noTaxonomyChild from '../../../../../../../../public/assets/images/no-taxonomy-child.svg';
import CreateTaxonomyChildModal from '../_components/modals/create-taxonomy-child-modal';
import TaxonomyChildTable from '../_components/taxonomy-child-table';
import { useGetAllChildTaxonomies } from '../_queries/get-all-child-taxonomies.query';
import { Taxonomy } from '@/common/types/interfaces/project/taxonomies';
import EditTaxonomyChildModal from '../_components/modals/edit-taxonomy-child-modal';
import TaxonomyBreadcrumb from '../../_components/taxonomy-breadcrumb';
import { useGetTaxonomyBreadcrumb } from '../../_queries/get-taxonomy-breadcrumb.query';

const TaxonomyChildView = () => {
  const [addModal, setAddModal] = useState<boolean>(false);
  const [search, setSearch] = useState<string | null>(null);
  const [editModal, setEditModal] = useState<boolean>(false);
  const [taxonomyData, setTaxonomyData] = useState<Partial<Taxonomy> | null>(
    null,
  );

  // Pagination states
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);

  const params = useParams();
  const debouncedSearch = useDebounce(search, 500);

  // Fetch all child taxonomies
  const { data, isLoading } = useGetAllChildTaxonomies(
    params.id as string,
    params['project-id'] as string,
    params['taxonomy-id']?.[params['taxonomy-id'].length - 1] as string,
    rowsPerPage,
    currentPage,
    debouncedSearch,
  );

  const taxonomyId = params['taxonomy-id']?.[
    params['taxonomy-id'].length - 1
  ] as string;

  // Fetch taxonomy breadcrumb
  const { data: breadcrumbs, isLoading: isBreadCrumbLoading } =
    useGetTaxonomyBreadcrumb(
      params.id as string,
      params['project-id'] as string,
      taxonomyId,
    );

  return (
    <div className='center-div'>
      <div className='sm:w-4/5 w-11/12 sm:mt-16 mt-4 p-4 space-y-6'>
        <TaxonomyBreadcrumb
          breadcrumb={breadcrumbs?.breadcrumb}
          isLoading={isBreadCrumbLoading}
        />
        <div className='table-div'>
          <div className='flex items-center justify-between gap-2 p-4'>
            <SearchBar
              placeHolder='Search'
              search={search}
              setSearch={setSearch}
            />
            <Button
              type='button'
              onClick={() => setAddModal(true)}
            >
              <BiPlus />
              Add Subcategory
            </Button>
          </div>
          <TaxonomyChildTable
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
              debouncedSearch ? (
                <NoDataBanner
                  img={noTaxonomyChild}
                  text='No results found...'
                />
              ) : (
                <NoDataBanner
                  img={noTaxonomyChild}
                  text='No Children Added Yet'
                  subText='This taxonomy doesn’t have any child categories yet. Start building its hierarchy by adding subcategories to better organize your data.'
                />
              )
            }
          />
        </div>
      </div>
      <CreateTaxonomyChildModal
        openModal={addModal}
        setOpenModal={setAddModal}
        name={breadcrumbs?.breadcrumb[breadcrumbs.breadcrumb.length - 1].name}
      />
      <EditTaxonomyChildModal
        openModal={editModal}
        setOpenModal={setEditModal}
        taxonomy={taxonomyData}
      />
    </div>
  );
};

export default TaxonomyChildView;
