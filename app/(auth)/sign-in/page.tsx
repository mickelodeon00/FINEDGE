import AuthForm from '@/components/auth/AuthForm';

const SignIn = () => {
  return (
    <section className=" flex w-full p-8 min-h-screen justify-center items-center">
      <AuthForm type="sign-in" />
    </section>
  );
};

export default SignIn;
