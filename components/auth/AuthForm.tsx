'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useLayoutEffect, useState } from 'react';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import CustomInput from './CustomInput';
import { authFormSchema } from '@/lib/utils';
import { Loader2 } from 'lucide-react';
import { getLoggedInUser, signIn, signUp } from '@/lib/actions/user.actions';
import { redirect, useRouter } from 'next/navigation';

const signInDefaultValues = {
  email: '',
  password: '',
};
const signUpDefaultValues = {
  firstName: '',
  lastName: '',
  address1: '',
  city: '',
  state: '',
  postalCode: '',
  dateOfBirth: '',
  ssn: '',
  email: '',
  password: '',
};

const AuthForm = ({ type }: { type: string }) => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      const loggedIn = await getLoggedInUser();
      setUser(loggedIn);
    };
    getUser();
  }, []);

  const authSchema = authFormSchema(type);

  const form = useForm<z.infer<typeof authSchema>>({
    resolver: zodResolver(authSchema),
    defaultValues:
      type === 'sign-up' ? signUpDefaultValues : signInDefaultValues,
  });

  const onSubmit = async (data: z.infer<typeof authSchema>) => {
    setIsLoading(true);
    try {
      if (type === 'sign-up') {
        const newUser = await signUp(data);
        setUser(newUser);
        if (newUser) router.push('/');
      }
      if (type === 'sign-in') {
        const response = await signIn({
          email: data.email,
          password: data.password,
        });
        // console.log(response, 'PPPPPPPPP');
        if (response) router.push('/');
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className=" max-w-[500px] flex flex-col gap-6 w-full box-border">
      <header className="flex flex-col gap-4 ">
        <Link href="/" className="flex  gap-2 items-center cursor-pointer">
          <Image
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="FinEdge Logo"
            className="size-[20px] "
          />
          <h2 className="text-xl font-semibold font-ibm-plex-serif text-gray-800">
            FinEdge
          </h2>
        </Link>
        <div className="flex flex-col gap-2">
          <h1 className="text-24 lg:text-30 font-semibold text-gray-900">
            {user ? 'Link Account' : type === 'sign-in' ? 'Log in' : 'Sign up'}
          </h1>
          <p className="text-14 lg:text-16 font-normal text-gray-600">
            {user
              ? 'Link your account to get started'
              : type === 'sign-in'
              ? 'Welcome back! Please enter your details.'
              : 'Please enter your details.'}
          </p>
        </div>
      </header>
      {user ? (
        <div className="flex flex-col gap-4">PLAID LINK</div>
      ) : (
        <>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {type === 'sign-up' && (
                <>
                  <div className="flex gap-4">
                    <CustomInput
                      name="firstName"
                      label="First Name"
                      control={form.control}
                      placeholder="Ex: John"
                    />
                    <CustomInput
                      name="lastName"
                      label="Last Name"
                      control={form.control}
                      placeholder="Ex: Doe"
                    />
                  </div>
                  <CustomInput
                    name="address1"
                    label="Address"
                    control={form.control}
                    placeholder="Enter your specific address"
                  />
                  <CustomInput
                    name="city"
                    label="City"
                    control={form.control}
                    placeholder="Enter your city"
                  />
                  <div className="flex gap-4">
                    <CustomInput
                      name="state"
                      label="State"
                      control={form.control}
                      placeholder="Ex: Lagos"
                    />
                    <CustomInput
                      name="postalCode"
                      label="Postal Code"
                      control={form.control}
                      placeholder="Ex: 10321"
                    />
                  </div>
                  <div className="flex gap-4">
                    <CustomInput
                      name="dateOfBirth"
                      label="Date of Birth"
                      control={form.control}
                      placeholder="Ex: yyyy-mm-dd"
                    />
                    <CustomInput
                      name="ssn"
                      label="SSN"
                      control={form.control}
                      placeholder="Ex: 1234"
                    />
                  </div>
                </>
              )}
              <CustomInput
                name="email"
                label="Email"
                control={form.control}
                placeholder="Enter your email"
              />
              <CustomInput
                name="password"
                label="Password"
                control={form.control}
                type="password"
                placeholder="Enter your password"
              />

              <Button
                className="w-full bg-bankGradient text-white"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 size={20} className="animate-spin" /> &nbsp;
                    Loading...
                  </>
                ) : type === 'sign-in' ? (
                  'Sign In'
                ) : (
                  'Sign Up'
                )}
              </Button>
            </form>
          </Form>
          <footer className="flex justify-center text-xs text-gray-600 lg:text-sm">
            {type === 'sign-in' ? (
              <div>
                Don't have an account?{' '}
                <Link href="/sign-up" className="text-bankGradient">
                  Sign up
                </Link>
              </div>
            ) : (
              <div>
                Already have an account?{' '}
                <Link href="/sign-in" className="text-bankGradient">
                  Sign in
                </Link>
              </div>
            )}
          </footer>
        </>
      )}
    </section>
  );
};

export default AuthForm;
