import { X } from 'lucide-react';
import { FC } from 'react';
import { CiSearch } from 'react-icons/ci';
import { SearchBarProps } from '../../types/interfaces/common';

const SearchBar: FC<SearchBarProps> = ({
  search,
  setSearch,
  placeHolder,
  setCurrentPage,
  className,
}) => {
  return (
    <div
      className={`flex items-center justify-between gap-2 rounded-[45px] p-4 group border w-[400px] h-[56px] focus-within:border-primary duration-200 ${className && className}`}
    >
      <div className='flex items-center gap-2 w-full px-1'>
        <input
          type='text'
          placeholder={placeHolder ?? 'Search here'}
          className='focus:outline-none w-full'
          value={search || ''}
          onChange={e => {
            setSearch(e.target.value);
            if (setCurrentPage) {
              setCurrentPage(1);
            }
          }}
        />
        <CiSearch
          size={24}
          color='#6E683B'
        />
      </div>
      {search && (
        <button
          onClick={() => {
            setSearch('');
            if (setCurrentPage) {
              setCurrentPage(1);
            }
          }}
        >
          <X
            size={15}
            color='#6E683B'
          />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
