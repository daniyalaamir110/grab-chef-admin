// import { usePathname } from 'next/navigation';

const ContractBreadcrumb = () => {
  // const segments = usePathname().split('/').filter(Boolean);
  const contract = localStorage.getItem('contract');

  return (
    <div className='flex items-center gap-2'>
      {/* {segments.map((segment, index) => (
        <div
          key={index}
          className='flex items-center gap-2'
        >
          <p
            className={`capitalize ${segments.length - 1 === index ? 'font-semibold' : 'text-gray-500'}`}
          >
            {segments.length - 1 === index ? contract : segment}
          </p>
          {index !== segments.length - 1 && '/'}
        </div>
      ))} */}
      <div className='flex items-center gap-2'>
        <p className='capitalize text-gray-500'>Contracts</p>
      </div>
      <div className='flex items-center gap-2'>
        <p className='capitalize font-semibold'>/ {contract}</p>
      </div>
    </div>
  );
};

export default ContractBreadcrumb;
