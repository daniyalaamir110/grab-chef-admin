import React from 'react';
import { BiLoaderAlt } from 'react-icons/bi';

const Spinner = () => {
  return (
    <div className='animate-[spin_2s_linear_infinite]'>
      <BiLoaderAlt className='w-8 h-8 text-primary' />
    </div>
  );
};

export default Spinner;
