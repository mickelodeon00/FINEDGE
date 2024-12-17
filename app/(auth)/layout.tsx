import Image from 'next/image';

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex justify-between min-h-screen w-full font-inter">
      {children}
      <div className="hidden bg-slate-200 w-full md:flex justify-end items-center ">
        <div className="max-w-[90%]">
          <Image
            className=""
            src="/icons/auth-image.svg"
            alt="auth image"
            width={500}
            height={500}
          />
        </div>
      </div>
    </main>
  );
}
