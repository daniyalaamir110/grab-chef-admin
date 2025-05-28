// modal props imports
import { DynamicModalProps } from '../../types/interfaces/common';

// react imports
import { FC } from 'react';
// ui imports
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

/**
 *
 * @param param0
 * @returns
 */
const DynamicModal: FC<DynamicModalProps> = ({
  title,
  subText,
  children,
  openModal,
  setOpenModal,
  className,
  isRequired,
}) => {
  return (
    <Dialog
      open={openModal}
      onOpenChange={setOpenModal}
    >
      <DialogContent className={`w-max flex flex-col bg-white ${className}`}>
        <DialogHeader>
          <DialogTitle>
            <p className='sm:text-2xl break-words'>
              {title}
              {isRequired && <span className='text-red-500'>*</span>}
            </p>

            {subText && (
              <span className='text-gray-500 text-sm'>{subText}</span>
            )}
          </DialogTitle>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default DynamicModal;
