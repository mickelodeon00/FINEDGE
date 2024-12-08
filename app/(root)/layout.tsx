import MobileNav from '@/components/public/MobileNav';
import Sidebar from '@/components/public/Sidebar';
import Image from 'next/image';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = {
    firstName: 'Abdulsalam',
    lastName: 'Quadri',
  };
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
