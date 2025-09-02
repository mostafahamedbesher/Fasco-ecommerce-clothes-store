"use client";

import { useSearchParams } from "next/navigation";
import useSetFilter from "../hooks/useSetFilter";

function Color({ color, type = "mini", width = "1.5rem", height = "1.5rem" }) {
  const { handleSetFilter } = useSetFilter("color", color);
  const searchParams = useSearchParams();
  const colorParam = searchParams.get("color");

  function handleClick() {
    if (type === "mini") {
      return;
    }

    if (type === "large") {
      handleSetFilter();
    }
  }

  return (
    <div
      className={`p-[3px] transition-all duration-150 ${type === "large" ? "hover:rounded-full hover:ring-2 hover:ring-black" : ""} ${colorParam === color && type === "large" ? "rounded-full ring-2 ring-black" : ""}`}
    >
      <div
        onClick={handleClick}
        style={{ backgroundColor: color, height: height, width: width }}
        className={`h-6 ${type === "large" ? "cursor-pointer" : ""} rounded-full border border-solid border-gray-600`}
      ></div>
    </div>
  );
}

export default Color;
