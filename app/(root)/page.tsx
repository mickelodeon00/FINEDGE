import RightSidebar from '@/components/home/RightSidebar';
import HeaderBox from '@/components/public/HeaderBox';
import TotalBalanceBox from '@/components/public/TotalBalanceBox';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import { redirect } from 'next/navigation';
import React from 'react';

const Home = async () => {
  const loggedIn = await getLoggedInUser();
  if (!loggedIn) {
    redirect('sign-in');
  }

  const banks = [
    {
      bankName: 'SilverStone',
    },
    {
      bankName: 'SummitGuard',
    },
  ];
  return (
    <section className="home ">
      <header className="home-content ">
        <HeaderBox
          type="greeting"
          title="Welcome"
          user={loggedIn?.name}
          subtext="Access and manage your account transactions effectively"
        />
        <TotalBalanceBox
          accounts={[]}
          totalBanks={2}
          totalCurrentBalance={2832.83}
        />
        RECENT TRANSACTION
      </header>
      <RightSidebar user={loggedIn} transactions={[]} banks={banks} />
    </section>
  );
};

export default Home;
