import Logo from "./Logo";
import { Volkhov } from "next/font/google";
import SigninButton from "./SigninButton";
import { auth } from "@/app/lib/auth";
import SignoutButton from "./SignoutButton";

const volkhov_font = Volkhov({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  style: ["normal"],
});

async function SigninBox() {
  const session = await auth();
  // console.log(session);

  return (
    <div className="mb-8 px-20 pt-12 max-lg:px-12 max-lg:pt-6">
      <Logo textSize="text-3xl" />

      {session?.user?.name ? (
        <div className="mt-14 max-lg:mt-10">
          <p className="text-center text-xl font-medium max-lg:text-lg">
            Welcome{" "}
            <span className="bg-primary-2 font-semibold text-black">
              {session.user.name}
            </span>
            . you already logged in
          </p>
          {/* logout button here */}
          <div className="mt-10 flex justify-center">
            <SignoutButton />
          </div>
        </div>
      ) : (
        <div className="mt-14 flex flex-col gap-14 max-lg:mt-8 max-lg:gap-8">
          <div className="space-y-10 max-lg:space-y-5">
            <div>
              <p className="text-lg font-medium text-red-500 max-lg:text-base">
                You have to sign in to access your account page, wishlist or
                complete checkout
              </p>

              <p
                className={`text-xl max-lg:text-lg ${volkhov_font.className} mt-6 font-bold text-black`}
              >
                Sign In To Fasco
              </p>
            </div>

            <div className="max-sm-l:gap-6 flex flex-col items-center gap-6 max-lg:gap-4">
              <SigninButton providerName="google" imgsrc="google.png">
                Sign in with Google
              </SigninButton>

              <SigninButton providerName="github" imgsrc="github.png">
                Sign in with Github
              </SigninButton>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SigninBox;
