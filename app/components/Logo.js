import Link from "next/link";
import { Volkhov } from "next/font/google";

const volkhov_font = Volkhov({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  style: ["normal"],
});

function Logo({ textSize = "" }) {
  return (
    <div
      className={`${volkhov_font.className} uppercase ${
        textSize ? textSize : "max-sm-l:text-2xl text-4xl max-lg:text-3xl"
      } text-secondary`}
    >
      <Link href="/">Fasco</Link>
    </div>
  );
}

export default Logo;
