import { SignInButton } from "@clerk/nextjs";

const Guest = () => {
  return (
    <div className="flex flex-col items-center text-center">
      <h1 className="text-2xl lg:text-4xl font-bold mt-3 mb-2">Welcome</h1>
      <p className="mb-2">Please sign in to manage your transactions</p>
      <div className="px-6 py-2 bg-blue text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
        <SignInButton />
      </div>
    </div>
  );
};

export default Guest;
