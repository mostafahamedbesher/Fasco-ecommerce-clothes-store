import { signinAction } from "../lib/actions";

function SigninButton({ providerName = "", imgsrc, children }) {
  return (
    <form action={signinAction.bind(null, providerName)}>
      <button
        type="submit"
        className="flex items-center gap-4 whitespace-nowrap rounded-md border border-[#5B86E5] px-10 py-2 text-base max-lg:px-8"
      >
        <img
          src={`/images/${imgsrc}`}
          alt="google logo"
          className="h-7 w-7 max-lg:h-6 max-lg:w-6"
        />
        <span className="font-medium max-lg:text-sm">{children}</span>
      </button>
    </form>
  );
}

export default SigninButton;
