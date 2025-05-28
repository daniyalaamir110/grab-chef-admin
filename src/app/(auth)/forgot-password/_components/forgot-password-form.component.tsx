'use client';
import { forgotPasswordSchema } from '@/app/(auth)/forgot-password/_schemas/forgot-password.schema';
import Input from '@/common/components/form-components/input.component';
import { ROUTES } from '@/common/constants/routes';
import { Button } from '@/components/ui/button';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import { useForgotPassword } from '../_mutations/forgot-password.mutation';

const ForgotPasswordForm = () => {
  const router = useRouter();

  const { mutate, isPending } = useForgotPassword();

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: forgotPasswordSchema,
    onSubmit: values => {
      mutate(
        { email: values.email },
        {
          onSuccess() {
            localStorage.setItem('email', values.email);
            router.push(`${ROUTES.AUTH.OTP_VERIFICATION}`);
          },
        },
      );
    },
  });

  return (
    <form
      className='flex flex-col gap-8 w-full bg-light-gray p-6 rounded-xl'
      onSubmit={formik.handleSubmit}
    >
      {/* heading and description */}
      <div className='flex flex-col'>
        <h3 className='sm:text-[28px] text-xl font-semibold text-black'>
          Forgot Password?
        </h3>
        <p className='sm:text-lg text-sm text-gray-500'>
          Enter the email address associated with your account
        </p>
      </div>
      {/* inputs */}
      <div className='flex flex-col gap-4'>
        <div>
          <Input
            label='Email Address'
            isRequired
            name='email'
            placeholder='eg.john@example.com'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.email && typeof formik.errors.email === 'string'
                ? formik.errors.email
                : undefined
            }
            disabled={isPending}
          />
        </div>
      </div>
      <div>
        <Button
          disabled={isPending}
          type='submit'
          className='w-full sm:py-6 sm:text-lg'
        >
          Send
        </Button>
      </div>
    </form>
  );
};

export default ForgotPasswordForm;
