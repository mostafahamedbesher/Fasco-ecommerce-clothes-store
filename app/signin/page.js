import Image from "next/image";
import SigninBox from "../components/SigninBox";

function page() {
  return (
    <main className="grid grid-cols-2 rounded-2xl border border-primary-2 max-md:grid-cols-1">
      <div className="relative aspect-square w-full max-md:hidden">
        <Image
          src="/images/signin.jpg"
          alt="sign in image"
          fill
          className="rounded-sm object-cover"
        />
      </div>

      <SigninBox />
    </main>
  );
}

export default page;
