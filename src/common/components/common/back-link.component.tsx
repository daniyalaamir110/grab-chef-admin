import Link from 'next/link';
import React from 'react';
import { IoArrowBack } from 'react-icons/io5';

interface BackLinkProps {
  href: string;
  text?: string;
  className?: string;
}

const BackLink: React.FC<BackLinkProps> = ({ href, text, className }) => {
  return (
    <Link
      href={href}
      className={`flex gap-2 items-center ${className && className}`}
    >
      <IoArrowBack size={20} />

      <p className='text-lg'>{text}</p>
    </Link>
  );
};

export default BackLink;
