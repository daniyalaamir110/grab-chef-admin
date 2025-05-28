import { cn } from '@/lib/utils';
import React from 'react';

interface ChipProps {
  text: string;
  onClick?: (value: string) => void;
  disabled?: boolean;
}

const Chip: React.FC<ChipProps> = ({ text, disabled, onClick }) => {
  return (
    <div
      className={cn(
        'border border-primary-80 rounded-full bg-white sm:py-2 sm:px-4 py-1 px-2 text-dark text-xs transition duration-300 hover:bg-primary-80 hover:text-white',
        disabled ? 'cursor-not-allowed' : 'cursor-pointer',
      )}
      onClick={disabled || !onClick ? undefined : () => onClick(text)}
    >
      {text}
    </div>
  );
};

export default Chip;
