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

export interface MultiSelectProps {
  label?: string;
  options?: { label: string; value: string }[];
  value?: string[] | null;
  setValue?: Dispatch<SetStateAction<string[] | null>>;
  name?: string;
  className?: string;
}

const MultiSelect: FC<MultiSelectProps> = ({
  label,
  options,
  value,
  setValue,
  name,
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
      className='relative'
      ref={dropdownRef}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 rounded-lg justify-between overflow-hidden text-ellipsis whitespace-nowrap w-40 px-6 border p-2 cursor-pointer font-semibold text-sm capitalize ${className && className}`}
      >
        <div className='overflow-hidden text-ellipsis whitespace-nowrap w-full'>
          <span className='block overflow-hidden text-ellipsis whitespace-nowrap'>
            {value?.length ? value.join(', ') : label}
          </span>
        </div>
        <IoIosArrowDown
          className={`duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
        />
      </button>
      {isOpen && (
        <div className='absolute top-12 z-10 right-0 min-w-40 border rounded-lg bg-white shadow-md'>
          {options?.map((option, index) => {
            const id = `${name || 'multi'}-${option.value}`;
            const isChecked = value?.includes(option.value) || false;

            return (
              <label
                key={index}
                htmlFor={id}
                className='flex items-center space-x-2 px-4 py-3 border-b cursor-pointer'
              >
                <Checkbox
                  id={id}
                  name={name}
                  checked={isChecked}
                  onCheckedChange={checked => {
                    if (setValue) {
                      if (checked) {
                        setValue(prev => [...(prev || []), option.value]);
                      } else {
                        setValue(prev =>
                          (prev || []).filter(item => item !== option.value),
                        );
                      }
                    }
                  }}
                  className='cursor-pointer'
                />
                <span className='text-sm font-medium leading-none capitalize'>
                  {option.label}
                </span>
              </label>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MultiSelect;
