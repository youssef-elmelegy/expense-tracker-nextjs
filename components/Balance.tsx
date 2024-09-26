import getUserBalance from "@/app/actions/getUserBalance";
import { addCommas } from "@/lib/utils";

const Balance = async () => {
  const { balance } = await getUserBalance();

  return (
    <div className="flex items-center space-x-2 mt-2 mx-5 sm:w-auto">
      <h4 className="text-xl font-bold">Your Balance</h4>
      <h1 className="text-xl">
        ${addCommas(Number(balance?.toFixed(2) ?? 0))}
      </h1>
    </div>
  );
};

export default Balance;
