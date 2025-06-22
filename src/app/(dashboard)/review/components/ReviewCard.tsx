import { Star, Check, X } from 'lucide-react';

interface ReviewCardProps {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  review: string;
  date: string;
  isSelected?: boolean;
  statusUpdated?: boolean;
  onApprove?: () => void;
  onReject?: () => void;
  onSelect?: () => void;
}

const ReviewCard = ({
  id,
  name,
  avatar,
  rating,
  review,
  date,
  isSelected = false,
  statusUpdated = false,
  onApprove,
  onReject,
  onSelect,
}: ReviewCardProps) => {
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star
          key={i}
          size={16}
          className={`${
            i <= rating
              ? 'fill-yellow-400 text-yellow-400'
              : 'fill-gray-200 text-gray-200'
          }`}
        />,
      );
    }
    return stars;
  };

  return (
    <div
      className={`bg-white rounded-lg  ${isSelected ? 'border border-l-4 border-l-red-500 shadow-md shadow-red-300' : ''} p-4 hover:shadow-sm transition-shadow duration-200`}
    >
      <div className='flex items-center gap-4'>
        {/* Checkbox */}
        <div className='flex items-center mt-1'>
          <input
            type='checkbox'
            checked={isSelected}
            onChange={onSelect}
            hidden={statusUpdated}
            className='w-4 h-4 text-red-500 border-gray-300 rounded focus:ring-red-500'
          />
        </div>

        {/* Avatar */}
        <div className='flex-shrink-0'>
          <img
            src={
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjKNpeICypw6HglgXH9dwb2Uj4rG0eH9DXcQ&s'
            }
            alt={name}
            className='w-18 h-18 rounded-lg object-cover'
          />
        </div>

        {/* Content */}
        <div className='flex-1 min-w-0'>
          <div className='flex items-start justify-between gap-3'>
            <div className=' flex flex-col gap-2'>
              <p className='text-red-500 text-sm font-medium'>#{id}</p>
              <p className='text-gray-900 font-medium'>{name}</p>
              <p className='text-gray-500 text-sm mb-2'>{date}</p>
            </div>

            <p className='text-gray-700 text-sm leading-relaxed'>{review}</p>

            {/* Rating and Actions */}
            <div className='flex items-center gap-4'>
              <div className='text-center'>
                <div className='text-2xl font-bold text-gray-900 mb-1'>
                  {rating.toFixed(1)}
                </div>
                <div className='flex gap-1'>{renderStars(rating)}</div>
              </div>

              {/* Action Buttons */}
              {!statusUpdated && (
                <div className='flex gap-2'>
                  <button
                    onClick={onApprove}
                    className='w-8 h-8 bg-green-100 hover:bg-green-200 rounded-full flex items-center justify-center transition-colors duration-200'
                  >
                    <Check
                      size={16}
                      className='text-green-600'
                    />
                  </button>
                  <button
                    onClick={onReject}
                    className='w-8 h-8 bg-red-100 hover:bg-red-200 rounded-full flex items-center justify-center transition-colors duration-200'
                  >
                    <X
                      size={16}
                      className='text-red-600'
                    />
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Review Text */}
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
