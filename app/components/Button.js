"use client";

import Link from "next/link";

function Button({
  children,
  bgColor = "#000",
  TxtColor = "#fefefe",
  href = "",
  disabled = false,
  width = "",
  rounded = "",
  padding = "",
  border = "",
}) {
  if (href)
    return (
      <Link
        href={href}
        style={{ backgroundColor: bgColor, color: TxtColor }}
        // className="inline-block  w-[100%] text-center rounded-sm px-32 py-3 text-sm font-medium hover:opacity-75 transition-all duration-200"
        className={`block w-full whitespace-nowrap text-center ${
          rounded ? rounded : "rounded-sm"
        } ${
          padding ? padding : "px-32 py-3 max-lg:px-28"
        } text-sm font-medium transition-all duration-200 hover:opacity-75`}
      >
        {children}
      </Link>
    );

  return (
    <button
      style={{ backgroundColor: bgColor, color: TxtColor, width: width }}
      className={`${disabled ? "opacity-60" : "hover:opacity-75"} ${
        padding ? padding : "px-32 py-3 max-lg:px-28"
      } ${
        border ? border : ""
      } whitespace-nowrap rounded-sm text-center text-sm font-medium transition-all duration-200`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;

// className="text-center rounded-sm px-32 py-3 bg-black text-sm text-primary font-medium hover:opacity-75 transition-all duration-200"
