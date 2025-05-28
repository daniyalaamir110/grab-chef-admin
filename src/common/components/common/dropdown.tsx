import { Checkbox } from '@/components/ui/checkbox';
import React, {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react';
import { IoIosArrowDown } from 'react-icons/io';

export interface DropdownProps {
  label?: string;
  options?: string[];
  value?: string | null;
  setValue?: Dispatch<SetStateAction<string | null>>;
  className?: string;
}

const Dropdown: FC<DropdownProps> = ({
  label,
  options,
  value,
  setValue,
  className,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div
      className='relative min-w-max'
      ref={dropdownRef}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-between w-24 border p-2 rounded-lg cursor-pointer font-semibold text-sm capitalize ${className && className}`}
      >
        {value ? (value === 'exhibitor_manager' ? 'Exhibitor' : value) : label}
        <IoIosArrowDown
          className={`duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
        />
      </button>
      {isOpen && (
        <div className='absolute top-12 z-10 sm:right-0 min-w-40 border rounded-lg bg-white shadow-md'>
          {options?.map((option, index) => {
            const id = `dropdown-checkbox-${option}`;

            return (
              <label
                key={index}
                htmlFor={id}
                className='flex items-center space-x-2 px-4 py-3 border-b cursor-pointer'
                onClick={() => {
                  if (setValue) {
                    setValue(option);
                    setIsOpen(false);
                  }
                }}
              >
                <Checkbox
                  id={id}
                  checked={value === option}
                  onCheckedChange={() => {}}
                  className='pointer-events-none'
                />
                <span className='text-sm font-medium capitalize'>
                  {option === 'exhibitor_manager' ? 'Exhibitor' : option}
                </span>
              </label>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
