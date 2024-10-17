// "use client";

// import { signOut } from "../lib/auth";
import { signoutAction } from "../lib/actions";
import { BiLogOut } from "react-icons/bi";

function SignoutButton({ border = true, padding = "py-2 px-10 max-lg:px-8" }) {
  return (
    <form action={signoutAction}>
      <button
        type="submit"
        className={`flex w-full items-center gap-3 whitespace-nowrap rounded-md text-base ${
          border ? "border-2 border-black" : ""
        } ${padding ? padding : ""}`}
      >
        <BiLogOut className="h-7 w-7" />
        <span className="font-medium">Sign out</span>
      </button>
    </form>
  );
}

export default SignoutButton;
