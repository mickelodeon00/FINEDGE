import Image from 'next/image';
import React from 'react';
import BankCard from './BankCard';

const RightSidebar = ({ user, transactions, banks }: RightSidebarProps) => {
  return (
    <aside className="hidden w-[355px] max-h-screen flex-col xl:flex">
      <div className="bg-gradient-mesh w-full h-24 bg-no-repeat bg-cover" />
      <div className="relative flex flex-col px-8 gap-4">
        <div className="-mt-10 profile-image">
          <span className="text-5xl font-bold text-bankGradient">
            {user.firstName[0]}
          </span>
        </div>
        <div className="flex flex-col">
          <h2 className="text-2xl text-gray-900 font-bold">
            {user.firstName} {user.lastName}
          </h2>
          <p className="text-base text-gray-500">{user.email}</p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-row justify-between">
            <h2 className="text-lg font-semibold">My Banks</h2>
            <div className=" flex gap-1 items-center">
              <Image
                src="/icons/plus.svg"
                alt="plus sign"
                width={20}
                height={20}
              />
              <p className="text-base text-gray-500">Add bank</p>
            </div>
          </div>
          <div className="flex flex-col gap-4 relative">
            <div className="w-[90%] z-10 ">
              <BankCard
                account={banks[0]}
                userName={`${user.firstName} ${user.lastName}`}
                showBalance={false}
              />
            </div>
            <div className="w-[90%] absolute right-0 top-6 ">
              <BankCard
                account={banks[1]}
                userName={`${user.firstName} ${user.lastName}`}
                showBalance={false}
              />
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default RightSidebar;
