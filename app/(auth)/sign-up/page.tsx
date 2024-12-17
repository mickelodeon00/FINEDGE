import AuthForm from '@/components/auth/AuthForm';
import { getLoggedInUser } from '@/lib/actions/user.actions';

const SignUp = async () => {
  // const user = await getLoggedInUser();
  // console.log(user, 'USER');
  return (
    <section className="flex w-full p-8 min-h-screen justify-center items-center">
      <AuthForm type="sign-up" />
    </section>
  );
};

export default SignUp;
