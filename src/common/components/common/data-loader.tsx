import React, { FC } from 'react';
import { HashLoader } from 'react-spinners';

interface DataLoaderProps {
  text?: string;
  className?: string;
}

const DataLoader: FC<DataLoaderProps> = ({ text, className }) => {
  return (
    <div
      className={`flex flex-col gap-2 items-center justify-center  ${className && className}`}
    >
      <HashLoader
        size={48}
        color='#166dfb'
      />
      {text && <p className='font-semibold'>{text}</p>}
    </div>
  );
};

export default DataLoader;
