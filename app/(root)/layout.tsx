import MobileNav from '@/components/public/MobileNav';
import Sidebar from '@/components/public/Sidebar';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import Image from 'next/image';
import { redirect } from 'next/navigation';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const loggedIn = {
  //   firstName: 'Abdulsalam',
  //   lastName: 'Quadri',
  // };
  const loggedIn = await getLoggedInUser();

  // console.log(loggedIn, 'change');
  if (!loggedIn) {
    redirect('sign-in');
  }
  return (
    <main className="flex w-full h-screen font-inter">
      <Sidebar user={loggedIn} />
      <div className="flex flex-col w-full">
        <div className="root-layout">
          <Image
            src="/icons/logo.svg"
            alt="FinEdge Logo"
            width={30}
            height={30}
          />
          <div>
            <MobileNav user={loggedIn} />{' '}
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
