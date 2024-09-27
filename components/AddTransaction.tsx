"use client";
import { useRef } from "react";
import addTransaction from "@/app/actions/addTransaction";
import { toast } from "react-toastify";

const AddTransaction = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const clientAction = async (formData: FormData) => {
    const { data, error } = await addTransaction(formData);

    if (error) {
      toast.error(error);
    } else {
      toast.success("Transaction added");
      formRef.current?.reset();
    }
  };

  return (
    <div className="bg-gradient-to-r from-bluee-400 to-bluee-800 bg-opacity-80 backdrop-filter backdrop-blur-xl rounded-xl shadow-xl overflow-hidden p-5 container mx-auto w-[600px] flex flex-col items-center justify-center my-8 text-white">
      {" "}
      <h3 className="text-2xl font-semibold mb-4">Add transaction</h3>
      <form className="w-full" ref={formRef} action={clientAction}>
        <div className="form-control mb-4">
          <label htmlFor="text" className="inline-block mb-2">
            Text
          </label>
          <input
            type="text"
            id="text"
            name="text"
            placeholder="Enter text..."
            className="border border-gray-300 rounded-md block text-base px-3 py-2 w-full"
          />
        </div>
        <div className="form-control mb-4">
          <label htmlFor="amount" className="inline-block mb-2">
            Amount <br /> (negative - expense, positive - income)
          </label>
          <input
            type="number"
            name="amount"
            id="amount"
            placeholder="Enter amount..."
            step="0.01"
            className="border border-gray-300 rounded-md block text-base px-3 py-2 w-full"
          />
        </div>
        <button className="w-full py-3 px-4 mt-4 bg-purple-500 text-white font-bold rounded-md shadow-md hover:bg-purple-600 transition duration-200 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
          Add Transaction
        </button>
      </form>
    </div>
  );
};

export default AddTransaction;
