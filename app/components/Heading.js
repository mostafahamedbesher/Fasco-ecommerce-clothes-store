"use client";

import { Volkhov } from "next/font/google";

const volkhov_font = Volkhov({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  style: ["normal"],
});

function Heading({ children, type }) {
  if (type === "headingBox") {
    return (
      <h3
        className={`${volkhov_font.className} mb-2 text-2xl font-semibold tracking-wider text-black`}
      >
        {children}
      </h3>
    );
  }

  return (
    <h2
      className={`${volkhov_font.className} mb-12 text-center text-3xl font-bold tracking-wider text-black max-lg:text-2xl`}
    >
      {children}
    </h2>
  );
}

export default Heading;
