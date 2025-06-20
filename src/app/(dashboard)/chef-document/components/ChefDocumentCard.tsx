import { Button } from '@/components/ui/button';
import { TableCell, TableRow } from '@/components/ui/table';
import { Crown, XCircle } from 'lucide-react';
import Link from 'next/link';

interface ChefDocumentCardProps {
  id: string;
  avatar: string;
  document: string;
  joinDate: string;
  chefName: string;
  location: string;
  onViewDetails?: () => void;
  onDelete?: () => void;
}

const ChefDocumentCard = ({
  id,
  avatar,
  document,
  joinDate,
  chefName,
  location,
  onViewDetails,
  onDelete,
}: ChefDocumentCardProps) => {
  return (
    <TableRow className='hover:bg-gray-50'>
      {/* Chef ID */}
      <TableCell className='  text-gray-600'>
        <img
          src={
            avatar ||
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjKNpeICypw6HglgXH9dwb2Uj4rG0eH9DXcQ&s'
          }
          alt={chefName}
          className='w-[40px] h-18 rounded-full object-cover'
        />
      </TableCell>
      <TableCell className='text-sm text-gray-600'>
        <Link href={`/chef/${id}`}>{id.slice(id.length - 4)}</Link>
      </TableCell>

      {/* Chef Document */}
      <TableCell>
        <div className='flex items-center gap-3'>
          <div className='flex items-center gap-2'>
            <div className='w-8 h-8 bg-red-500 rounded flex items-center justify-center'>
              <span className='text-white text-xs font-medium'>PDF</span>
            </div>
            <span className='text-sm text-gray-900'>{document}</span>
          </div>
        </div>
      </TableCell>

      {/* Join Date */}
      <TableCell className='text-sm text-gray-600'>{`${new Date(joinDate).getDate()}-${new Date(joinDate).getMonth()}-${new Date(joinDate).getUTCFullYear()}`}</TableCell>

      {/* Chef Name */}
      <TableCell>
        <div className='flex items-center gap-2'>
          <Crown className='w-4 h-4 text-yellow-500' />
          <span className='text-sm text-gray-900'>{chefName}</span>
        </div>
      </TableCell>

      {/* Location */}
      <TableCell className='text-sm text-gray-600'>{location}</TableCell>

      {/* Actions */}
      <TableCell>
        <div className='flex items-center gap-2 justify-end'>
          <Button
            variant='ghost'
            size='sm'
            onClick={onViewDetails}
            className='text-green-600 bg-green-100 rounded-full px-5 py-4 hover:text-green-700 hover:bg-green-200'
          >
            View details
          </Button>
          <Button
            variant='ghost'
            size='icon'
            onClick={onDelete}
            className='w-8 h-8 text-red-500 hover:text-red-600 hover:bg-red-50'
          >
            <XCircle size={16} />
          </Button>
        </div>
      </TableCell>
    </TableRow>
  );
};

export default ChefDocumentCard;
