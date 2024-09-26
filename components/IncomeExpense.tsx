import getIncomeExpense from "@/app/actions/getIncomeExpense";
import { addCommas } from "@/lib/utils";

const IncomeExpense = async () => {
  const { income, expense } = await getIncomeExpense();

  return (
    <div className="bg-white shadow-md p-3 flex justify-between my-5 mx-5">
      <div className="flex-1 text-center border-r border-gray-300 pr-5 last:border-0">
        <h4 className="font-semibold">Income</h4>
        <p className="money plus text-xl letter-spacing-0.5 my-2 text-green-500">
          ${addCommas(Number(income?.toFixed(2)))}
        </p>
      </div>
      <div className="flex-1 text-center pl-5">
        <h4 className="font-semibold">Expense</h4>
        <p className="money minus text-xl letter-spacing-0.5 my-2 text-red-500">
          ${addCommas(Number(expense?.toFixed(2)))}
        </p>
      </div>
    </div>
  );
};

export default IncomeExpense;
