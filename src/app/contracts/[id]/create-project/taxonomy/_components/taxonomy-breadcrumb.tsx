import BreadcrumbSkeleton from '@/common/components/skeletons/taxonomy-breadcrumb-skeleton';
import { TaxonomyBreadcrumbProps } from '@/common/types/interfaces/project/taxonomies';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { FC } from 'react';

const TaxonomyBreadcrumb: FC<TaxonomyBreadcrumbProps> = ({
  breadcrumb,
  isLoading,
}) => {
  const params = useParams();

  const basePath = `/contracts/${params.id}/create-project/${params['project-id']}/taxonomy`;

  return (
    <>
      {isLoading ? (
        <BreadcrumbSkeleton />
      ) : (
        <div className='flex items-center gap-2 flex-wrap'>
          <Link
            href={basePath}
            className='text-gray-500 break-words whitespace-normal'
          >
            Taxonomy Listing
          </Link>
          {breadcrumb?.map((item, index) => {
            const path = `${basePath}/${breadcrumb
              .slice(0, index + 1)
              .map(b => b.id)
              .join('/')}`;

            const isLast = index === breadcrumb.length - 1;
            return (
              <div
                key={item.id}
                className={`flex gap-2 max-w-full break-words flex-wrap ${isLast ? 'font-semibold' : 'text-gray-500'}`}
              >
                {isLast ? (
                  <p className='break-words whitespace-normal  overflow-hidden'>
                    <span className='mr-2'>/</span>
                    {item.name}
                  </p>
                ) : (
                  <Link
                    href={path}
                    className='break-words whitespace-normal  overflow-hidden'
                  >
                    <span className='mr-2'>/</span>
                    {item.name}
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default TaxonomyBreadcrumb;
