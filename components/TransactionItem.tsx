"use client";
import { Transaction } from "@/Types/Transaction";
import { addCommas } from "@/lib/utils";
import { toast } from "react-toastify";
import deleteTransaction from "@/app/actions/deleteTransaction";

const TransactionItem = ({ transaction }: { transaction: Transaction }) => {
  const sign = transaction.amount < 0 ? "-" : "+";

  const handleDeleteTransaction = async (transactionId: string) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this transaction?"
    );

    if (!confirmed) return;

    const { message, error } = await deleteTransaction(transactionId);

    if (error) {
      toast.error(error);
    }

    toast.success(message);
  };

  return (
    <li
      className={`flex justify-between relative p-2 mb-2 bg-white shadow-md text-gray-800 ${
        transaction.amount < 0 ? 'border-l-4 border-red-600' : 'border-l-4 border-green-500'
      }`}
    >
      {transaction.text}
      <span>
        {sign}${addCommas(Math.abs(transaction.amount))}
      </span>
      <button
        onClick={() => handleDeleteTransaction(transaction.id)}
        className="cursor-pointer bg-red-600 text-white text-lg line-height-20 px-1 py-0.5 absolute top-1/2 left-0 transform -translate-x-full -translate-y-1/2 opacity-0 transition-opacity duration-300 hover:opacity-100"
      >
        x
      </button>
    </li>
  );
};

export default TransactionItem;
