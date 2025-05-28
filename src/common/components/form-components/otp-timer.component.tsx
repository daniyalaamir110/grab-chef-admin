import { cn } from '@/lib/utils';
import React, { useEffect, useState } from 'react';
import { useForgotPassword } from '@/app/(auth)/forgot-password/_mutations/forgot-password.mutation';
import { formatSecondsToHMS } from '@/lib/format-seconds-to-hrs';

interface OtpTimerProps {
  email: string;

  initialTime?: number; // Default is 30 seconds
  onResend?: () => void;
}

const OtpTimer: React.FC<OtpTimerProps> = ({
  email = '',
  initialTime = 60,
  onResend,
}) => {
  const { mutate, isPending } = useForgotPassword();

  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    if (!isRunning || timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const handleResend = () => {
    mutate(
      {
        email,
      },
      {
        onSuccess() {
          setTimeLeft(initialTime);
          setIsRunning(true);
          if (onResend) {
            onResend();
          }
        },
      },
    );
  };

  return (
    <div className='flex flex-col items-center gap-6'>
      <div className='text-center sm:text-base text-xs font-normal text-grey-80'>
        Remaining Time:{' '}
        <span className='text-primary font-medium'>
          {formatSecondsToHMS(timeLeft)}
        </span>
      </div>
      <div className='w-full flex justify-center'>
        <div className='sm:text-base text-xs font-medium text-grey-80 w-4/5 flex justify-center '>
          <p className='font-semibold'>Didn’t receive code? &nbsp;</p>
          <span
            role='button'
            tabIndex={timeLeft > 0 || isPending ? -1 : 0}
            onClick={timeLeft > 0 || isPending ? undefined : handleResend}
            className={cn(
              'font-semibold text-primary cursor-pointer border-b border-b-primary',
              timeLeft || isPending ? 'opacity-70 cursor-not-allowed' : '',
            )}
            onKeyDown={e => {
              if (
                timeLeft === 0 ||
                (!isPending && (e.key === 'Enter' || e.key === ' '))
              ) {
                handleResend();
              }
            }}
            aria-disabled={timeLeft > 0 || isPending}
          >
            Resend Code
          </span>
        </div>
      </div>
    </div>
  );
};

export default OtpTimer;
