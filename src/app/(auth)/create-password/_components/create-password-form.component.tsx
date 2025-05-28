'use client';
import { useResetPassword } from '@/app/(auth)/create-password/_mutations/reset-password.mutation';
import { createPasswordSchema } from '@/app/(auth)/create-password/_schemas/create-password.schema';
import PasswordInput from '@/common/components/form-components/password-input.component';
import { ROUTES } from '@/common/constants/routes';
import { Button } from '@/components/ui/button';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const CreatePasswordForm = () => {
  const [dataObj, setDataObj] = useState<{ otp: string; email: string }>({
    otp: '',
    email: '',
  });
  const router = useRouter();

  const { mutate, isPending } = useResetPassword();

  useEffect(() => {
    const email = localStorage.getItem('email');
    const otp = localStorage.getItem('otp');
    setDataObj({
      otp: otp as string,
      email: email as string,
    });
    if (!otp || !email) {
      router.push(ROUTES.AUTH.LOGIN);
    }
  }, [router]);

  const formik = useFormik({
    initialValues: {
      password: '',
      confirmPassword: '',
    },
    validationSchema: createPasswordSchema,
    onSubmit: values => {
      mutate(
        {
          otp: dataObj.otp as string,
          password: values.password,
          email: dataObj.email as string,
        },
        {
          onSuccess() {
            router.push(ROUTES.AUTH.LOGIN);
          },
        },
      );
    },
  });

  return (
    <form
      className='flex flex-col gap-8 rounded-xl p-6 bg-light-gray'
      onSubmit={formik.handleSubmit}
    >
      {/* heading and description */}
      <div className='flex flex-col gap-2'>
        <h3 className='sm:text-[28px] text-xl font-semibold text-black'>
          Create Password
        </h3>
        <p className='sm:text-lg text-sm text-gray-500'>
          Set a strong password and be sure to remember it. This will keep your
          account secure.
        </p>
      </div>
      {/* inputs */}
      <div className='flex flex-col gap-3'>
        <div>
          <PasswordInput
            label='Password'
            isRequired
            name='password'
            placeholder='Enter Password'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.password &&
              typeof formik.errors.password === 'string'
                ? formik.errors.password
                : undefined
            }
            disabled={isPending}
          />
        </div>
        <div>
          <PasswordInput
            label='Confirm Password'
            isRequired
            name='confirmPassword'
            placeholder='Enter Password'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.confirmPassword &&
              typeof formik.errors.confirmPassword === 'string'
                ? formik.errors.confirmPassword
                : undefined
            }
            disabled={isPending}
          />
        </div>
        {/* <div>
          <h5 className="text-sm text-grey-100 font-semibold">
            Your password must contain:
          </h5>
          <ul className="list-disc text-xs text-grey-100 pl-6">
            <li>At least 8 characters</li>
            <li>Upper & lowercase letters</li>
            <li>A number (0-9)</li>
            <li>A special character (!@#$%^&*)</li>
          </ul>
        </div> */}
      </div>
      <div>
        <Button
          disabled={isPending}
          type='submit'
          className='w-full sm:py-6 sm:text-lg'
        >
          Save
        </Button>
      </div>
    </form>
  );
};

export default CreatePasswordForm;
