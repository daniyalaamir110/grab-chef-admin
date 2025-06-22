import { X, MapPin } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface ChefProfileCardProps {
  isOpen: boolean;
  onClose: () => void;
  chef: any;
}
const chef = {
  firstName: 'Syed Umer Ali',
  phoneNumber: '+92-332-3196182',
  email: 'syedumerali9453@gmail.com',
  achievements: [
    'silver_medal_icon',
    'gold_medal_with_ribbons_icon',
    'gold_medal_icon',
  ],
  location: ['DHA Karachi', 'Gulshan-e-Iqbal'],
  document: {
    fileName: 'Chef Document',
    fileType: 'PDF',
  },
  chefBio:
    "Chef ali is a professional chef with more than 11 years of experience in cooking. he has served 4 years in rosati bistro as an assistant chef and served more than 5 years in cafe aylanto as the head chef. graduated from culinary school of karachi and has a bachelor's degree in social sciences. apart from being an amazing chef, he likes to spend time nurturing his cat at home.",
};
const ChefProfileCard = ({ isOpen, onClose, chef }: ChefProfileCardProps) => {
  return (
    <Dialog
      open={isOpen}
      onOpenChange={onClose}
    >
      <DialogContent className=' w-full max-h-[90vh] overflow-y-auto p-0'>
        <DialogTitle  className="DialogTitle text-2xl pl-8 pt-4">Profile</DialogTitle>
        <div className='relative bg-white rounded-lg'>
          {/* Close Button */}
         

          {/* Profile Header */}
          <div className='p-6 pb-4'>
            <div className='flex items-start gap-4 mb-6'>
              <img
                src={
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjKNpeICypw6HglgXH9dwb2Uj4rG0eH9DXcQ&s'
                }
                alt={chef.firstName}
                className='w-20 h-20 rounded-full object-cover'
              />
            </div>

            {/* Profile Details Grid */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-6'>
              {/* First Name */}
              <div className='shadow-lg p-2 rounded-lg'>
                <label className='block text-sm font-medium text-gray-700 mb-1'>
                  First Name
                </label>
                <div className=' rounded-md py-2'>
                  <span className='text-sm text-gray-900'>
                    {chef.firstName}
                  </span>
                </div>
              </div>

              {/* Phone Number */}
              <div className='shadow-lg p-2 rounded-lg'>
                <label className='block text-sm font-medium text-gray-700 mb-1'>
                  Phone Number
                </label>
                <div className=' rounded-md py-2'>
                  <span className='text-sm text-gray-900'>
                    {chef.phoneNumber}
                  </span>
                </div>
              </div>

              {/* Email */}
              <div className='shadow-lg p-2 rounded-lg'>
                <label className='block text-sm font-medium text-gray-700 mb-1'>
                  Email
                </label>
                <div className=' rounded-md  py-2'>
                  <span className='text-sm text-gray-900'>{chef.email}</span>
                </div>
              </div>

              {/* Achievements */}
              <div className='shadow-lg p-2 rounded-lg'>
                <label className='block text-sm font-medium text-gray-700 mb-1'>
                  Achievements
                </label>
                <div className=' rounded-md px-3 py-2'>
                  <div className='flex gap-1'>
                    {chef?.chef?.achievements?.length > 0 ? chef?.chef?.achievements?.map(
                      (achievement: any, index: number) => (
                        <div
                          key={index}
                          className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium ${
                            achievement === 'gold'
                              ? 'bg-yellow-400 text-yellow-900'
                              : achievement === 'silver'
                                ? 'bg-gray-300 text-gray-700'
                                : 'bg-orange-400 text-orange-900'
                          }`}
                        >
                          {achievement === 'gold'
                            ? '🥇'
                            : achievement === 'silver'
                              ? '🥈'
                              : '🥉'}
                        </div>
                      ),
                    ) : (
                      <p>-</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className='shadow-lg p-2 rounded-lg'>
                <label className='block text-sm font-medium text-gray-700 mb-1'>
                  Location
                </label>
                <div className=' rounded-md py-2 flex flex-wrap gap-1'>
                  {chef?.chef?.locations?.map(
                    (loc: { name: string }, index: number) => (
                      <span
                        key={index}
                        className='bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded'
                      >
                        {loc?.name}
                      </span>
                    ),
                  )}
                </div>
              </div>

              {/* Document */}
              <div className='shadow-lg p-2 rounded-lg'>
                <label className='block text-sm font-medium text-gray-700 mb-1'>
                  Document
                </label>
                <div className=' rounded-md px-3 py-2'>
                  <div className='flex items-center gap-2'>
                    <span className='text-sm text-gray-900'>ABC</span>
                    <div className='w-6 h-6 bg-red-500 rounded flex items-center justify-center'>
                      <span className='text-white text-xs font-medium'>
                        PDF
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Chef Bio */}
            <div className='shadow-lg p-2 rounded-lg'>
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                Chef Bio
              </label>
              <div className=' rounded-md p-3'>
                <p className='text-sm text-gray-700 leading-relaxed'>
                  {chef?.chef?.bio}
                </p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ChefProfileCard;
