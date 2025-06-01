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

const LoginForm = () => {
  const router = useRouter();

  const { mutate, isPending } = useLogin();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: values => {
      console.log(values);
      console.log("first")
      router.push('/dashboard')

      // mutate(values, {
      //   onSuccess() {
      //     router.push('/contracts/all');
      //   },
      // });
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
