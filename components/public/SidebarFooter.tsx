import { logoutAccount } from '@/lib/actions/user.actions';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

const SidebarFooter = ({ user, type }: { user: User; type: string }) => {
  const router = useRouter();
  const logOut = async () => {
    const loggedOut = await logoutAccount();
    if (loggedOut) router.push('/');
  };
  return (
    <section
      className={cn('box-border flex gap-3 items-center ', {
        'max-xl:justify-center': type === 'desktop',
      })}
    >
      <div
        className={cn(
          ' shadow-profile size-12 p-4 flex justify-center items-center rounded-full bg-slate-200 border-4 border-white',
          {
            'max-xl:hidden': type === 'desktop',
          }
        )}
      >
        <span className="capitalize text-xl font-bold text-bankGradient">
          {user.name[0]}
        </span>
      </div>
      <div
        className={cn('flex max-w-[150px] flex-col w-full', {
          'max-xl:hidden': type === 'desktop',
        })}
      >
        <h2 className="truncate text-sm text-gray-900 capitalize font-semibold">
          {user.name}
        </h2>
        <p className="truncate w-full text-xs text-gray-500">{user.email}</p>
      </div>
      <button
        onClick={logOut}
        className=" min-w-[20px] w-[20px] h-full flex items-center "
      >
        <Image
          className="size-full"
          src="/icons/logout.svg"
          alt="logout"
          width={30}
          height={30}
        />
      </button>
    </section>
  );
};

export default SidebarFooter;
