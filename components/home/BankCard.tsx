import Image from 'next/image';

const BankCard = ({
  account,
  userName,
  showBalance = true,
}: CreditCardProps) => {
  return (
    <div className="max-w-355 h-48 flex rounded-xl text-white overflow-hidden shadow-creditCard ">
      <div className="h-full w-[75%] p-2 bg-blue-500 flex flex-col justify-between">
        <h2 className="font-semibold ">{account?.bankName}</h2>
        <div className="flex flex-col gap-3">
          <p className="text-xs flex justify-between">
            <span className="uppercase text-xs">
              {account?.name || userName}
            </span>
            <span>06/25</span>
          </p>
          <p className="text-xs">
            ●●●● ●●●● ●●●● <span>1234</span>
          </p>
        </div>
      </div>
      <div className=" w-[25%] bg-gradient-mesh bg-cover bg-right ">
        <div className="h-full w-full flex items-end flex-col justify-between p-3 bg-[url('/icons/lines.svg')] bg-cover">
          <Image
            src="/icons/paypass.svg"
            alt="paypass"
            width={25}
            height={20}
            className="flex justify-end "
          />
          <Image
            src="/icons/mastercard.svg"
            alt="paypass"
            width={40}
            height={20}
          />
        </div>
      </div>
    </div>
  );
};

export default BankCard;
