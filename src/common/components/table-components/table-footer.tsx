import React, { FC, useState } from 'react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { TableFooterProps } from '../../types/interfaces/common';

const TableFooterComponent: FC<TableFooterProps> = ({
  rowsPerPage,
  setRowsPerPage,
  currentPage,
  setCurrentPage,
  rowsOption,
  total,
  totalPages,
}) => {
  const [dropdown, setDropdown] = useState<boolean>(false);

  const handleClick = () => {
    setDropdown(!dropdown);
  };

  return (
    <div className='flex justify-end'>
      <div className='flex gap-4 items-center text-gray-600'>
        Rows per page:
        <div className='relative'>
          <button
            id='dropdownCardsButton'
            className='flex items-center justify-center focus:ring-1 focus:outline-none focus:ring-gray-300 px-3 rounded-sm'
            onClick={handleClick}
          >
            {rowsPerPage}
            <svg
              className='w-2.5 h-2.5 ms-3'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 10 6'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='m1 1 4 4 4-4'
              />
            </svg>
          </button>
          {dropdown && (
            <ul className='absolute bottom-[30px] flex flex-col w-full z-10 bg-white rounded-lg shadow-md'>
              {rowsOption &&
                rowsOption.map((each, index) => (
                  <button
                    className={`${each === rowsPerPage ? 'bg-gray-100' : 'bg-white'} w-full flex items-center justify-center px-4 py-1 cursor-pointer hover:bg-gray-100 ${index === 0 ? '' : 'border-t border-gray-200'} bypass text-left`}
                    key={each}
                    onClick={() => {
                      if (setRowsPerPage) {
                        setRowsPerPage(each);
                      }
                      setDropdown(false);
                      setCurrentPage(1);
                    }}
                  >
                    <p>{each}</p>
                  </button>
                ))}
            </ul>
          )}
        </div>
        <div className='flex items-center gap-2'>
          Page no:
          <button
            onClick={() => currentPage !== 1 && setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <BiChevronLeft
              size={24}
              className={`${currentPage === 1 ? 'text-gray-300' : 'text-black cursor-pointer'} `}
            />
          </button>
          <div className='flex gap-2 items-center'>
            {' '}
            <p>{currentPage}</p> of{' '}
            <p>{totalPages === 0 ? currentPage : totalPages}</p>
          </div>
          <button
            onClick={() =>
              currentPage !== totalPages && setCurrentPage(currentPage + 1)
            }
            disabled={currentPage === totalPages || totalPages === 0}
          >
            <BiChevronRight
              size={24}
              className={`${currentPage === totalPages || totalPages === 0 ? 'text-gray-300' : 'text-black cursor-pointer'} `}
            />
          </button>
        </div>
        <div>Total : {total}</div>
      </div>
    </div>
  );
};

export default TableFooterComponent;
