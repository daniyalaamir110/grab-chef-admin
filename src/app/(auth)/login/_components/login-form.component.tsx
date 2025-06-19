'use client';
import { loginSchema } from '@/app/(auth)/login/_schemas/login.schema';
import Input from '@/common/components/form-components/input.component';
import PasswordInput from '@/common/components/form-components/password-input.component';
import { ROUTES } from '@/common/constants/routes';
import { Button } from '@/components/ui/button';
import { useFormik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useLogin } from '../_mutations/login.mutation';
import axios from 'axios';
import { BASE_API_URL } from '@/common/constants';
import { useState } from 'react';
import { toast } from 'sonner';
import { setCookie } from 'cookies-next/client';

const LoginForm = () => {
  const router = useRouter();
  const [isPending, setPending] = useState(false);

  const handleLoginForm = async (data: any) => {
    try {
      setPending(true);
      const response = await axios.post(`${BASE_API_URL}/admin/login`, data);
      const resData = await response.data;
      console.log('===resData===>', JSON.stringify(resData, null, 1));
      setCookie('token', resData?.token);
      router.push('/dashboard');
      setPending(false);
    } catch (error) {
      toast(error?.message);
    } finally {
      setPending(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: async values => {
      console.log(values);
      console.log('first');
      await handleLoginForm(values);
    },
  });
  return (
    <form
      className='flex flex-col gap-4 sm:w-3/5 w-11/12 bg-[#fffcf2] p-6 rounded-xl'
      onSubmit={formik.handleSubmit}
    >
      <div className='flex flex-col gap-6'>
        <p className='sm:text-3xl text-2xl font-semibold'>Sign in</p>
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
          />
        </div>
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
          />
        </div>
        {/* <div>
          <Link
            href={ROUTES.AUTH.FORGOT_PASSWORD}
            className='text-sm sm:text-base font-medium text-primary underline decoration-primary transition hover:text-primary/90'
          >
            Forgot Password?
          </Link>
        </div> */}
      </div>
      <div className='mt-5'>
        <Button
          type='submit'
          className='w-full sm:py-6 sm:text-lg'
          disabled={isPending}
        >
          Sign in
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
