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
      className={`p-[3px] ${colorParam === color && type === "large" ? "rounded-full border-2 border-solid border-black" : ""}`}
    >
      <div
        onClick={handleClick}
        style={{ backgroundColor: color, height: height, width: width }}
        className={`h-6 ${
          type === "large" ? "cursor-pointer" : ""
        } rounded-full border border-solid border-gray-600`}
      ></div>
    </div>
  );
}

export default Color;
