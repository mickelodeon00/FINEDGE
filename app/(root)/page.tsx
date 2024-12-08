import RightSidebar from '@/components/home/RightSidebar';
import HeaderBox from '@/components/public/HeaderBox';
import TotalBalanceBox from '@/components/public/TotalBalanceBox';
import React from 'react';

const Home = () => {
  const loggedIn = {
    firstName: 'Abdulsalam',
    lastName: 'Quadri',
    email: 'quadriabdulsalamT@mail.co',
  };
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
          title="welcome"
          user={loggedIn?.firstName}
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
