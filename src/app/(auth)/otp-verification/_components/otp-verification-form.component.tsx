'use client';
import { otpVerificationSchema } from '@/app/(auth)/otp-verification/_schemas/otp-verification.schema';
import OtpTimer from '@/common/components/form-components/otp-timer.component';
import { Button } from '@/components/ui/button';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/components/ui/input-otp';
import { ROUTES } from '@/common/constants/routes';
import { useFormik } from 'formik';
import { REGEXP_ONLY_DIGITS_AND_CHARS } from 'input-otp';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useVerifyOtp } from '../_mutations/verify-otp.mutation';

const OtpVerificationForm = () => {
  const [email, setEmail] = useState<string | null>(null);
  const router = useRouter();

  const { mutate, isPending } = useVerifyOtp();

  useEffect(() => {
    const email = localStorage.getItem('email');
    setEmail(email);
    if (!email) {
      router.push(ROUTES.AUTH.LOGIN);
    }
  }, [email, router]);

  const formik = useFormik({
    initialValues: {
      otp: '',
    },
    validationSchema: otpVerificationSchema,
    onSubmit: values => {
      mutate(
        { email: email, otp: values.otp },
        {
          onSuccess() {
            localStorage.setItem('otp', values.otp);
            router.push(ROUTES.AUTH.CREATE_PASSWORD);
          },
        },
      );
    },
  });

  const resetForm = () => formik.resetForm();

  return (
    <form
      className='flex flex-col gap-8 w-full bg-light-gray sm:p-6 p-4 rounded-lg'
      onSubmit={formik.handleSubmit}
    >
      {/* heading and description */}
      <div className='flex flex-col'>
        <h3 className='sm:text-[28px] text-xl font-semibold text-black'>
          OTP Verification
        </h3>
        <p className='sm:text-lg text-sm text-gray-500'>
          Enter the 6 digit code sent to{' '}
          <span className='font-semibold text-black'>{email}</span>
        </p>
      </div>
      <div>
        <div className='flex flex-col gap-3 md:w-4/5 w-full'>
          <div className='flex flex-col gap-2'>
            <InputOTP
              maxLength={6}
              pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
              name='otp'
              value={formik.values.otp}
              onChange={newValue => {
                if (/^\d*$/.test(newValue)) {
                  // Prevents non-numeric input
                  formik.setFieldValue('otp', newValue);
                }
              }}
              onBlur={formik.handleBlur}
            >
              <InputOTPGroup
                aria-invalid={typeof formik.errors.otp === 'string'}
                className='w-full flex justify-between items-center gap-3'
              >
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
            {formik.errors.otp && (
              <div className='text-sm font-normal text-red-500'>
                {formik.errors.otp}
              </div>
            )}
          </div>
          <div>
            <OtpTimer
              email={email as string}
              initialTime={60}
              onResend={resetForm}
            />
          </div>
        </div>
      </div>
      <div>
        <Button
          type='submit'
          className='w-full sm:py-6 sm:text-lg'
          disabled={isPending}
        >
          Verify
        </Button>
      </div>
    </form>
  );
};

export default OtpVerificationForm;
