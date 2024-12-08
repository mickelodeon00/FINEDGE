'use client';

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { sidebarLinks } from '@/constants';
import { cn } from '@/lib/utils';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MobileNav = ({ user }: { user: MobileNavProps }) => {
  const pathname = usePathname();
  return (
    <section className="">
      <Sheet>
        <SheetTrigger>
          <Image
            src="icons/hamburger.svg"
            alt="memu logo"
            width={30}
            height={30}
          />
        </SheetTrigger>
        <SheetContent side="left" className="bg-white">
          {/* Hide Dialog Deszcription and title to prevent errors */}
          <VisuallyHidden>
            <SheetTitle>Menu</SheetTitle>
            <SheetDescription>Description goes here</SheetDescription>
          </VisuallyHidden>
          <Link href="/" className="flex gap-1 items-center cursor-pointer ">
            <Image
              src="/icons/logo.svg"
              width={34}
              height={34}
              alt="FinEdge Logo"
            />
            <h2 className="text-26 font-bold font-ibm-plex-serif text-black-1">
              FinEdge
            </h2>
          </Link>
          <div className="mobilenav-sheet">
            <SheetClose asChild>
              <nav className="flex h-full flex-col pt-16 text-white">
                {sidebarLinks.map((item) => {
                  const isActive =
                    pathname === item.route ||
                    pathname.startsWith(`${item.route}/`);
                  return (
                    <SheetClose asChild key={item.route}>
                      <Link
                        href={item.route}
                        key={item.label}
                        className={cn(
                          'flex items-center w-full max-w-60 p-4 rounded-lg gap-3',
                          {
                            'bg-bankGradient': isActive,
                          }
                        )}
                      >
                        <div className="relative size-6">
                          <Image
                            src={item.imgURL}
                            alt={item.label}
                            fill
                            className={cn({
                              'brightness-[3] invert-0': isActive,
                            })}
                          />
                        </div>
                        <p
                          className={cn(
                            'text-16 font-semibold text-black-2 text-nowrap',
                            {
                              'text-white': isActive,
                            }
                          )}
                        >
                          {item.label}
                        </p>
                      </Link>
                    </SheetClose>
                  );
                })}
                USER
              </nav>
            </SheetClose>
            FOOTER
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
