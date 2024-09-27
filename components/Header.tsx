import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { checkUser } from "@/lib/checkUser";

const Header = async () => {
  const user = await checkUser();

  return (
    <nav className="bg-darkBlue text-light">
      <div className="flex justify-between items-center max-w-[1000px] mx-auto px-8 py-2">
        <h2 className="text-xl hover:scale-105 transition-transform duration-100">
          Money Tracker
        </h2>
        <div>
          <SignedOut>
            <button className="border-0 rounded bg-none text-light px-8 py-2 cursor-pointer hover:bg-light hover:text-darkBlue transition-opacity duration-600">
              <SignInButton />
            </button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
};

export default Header;
