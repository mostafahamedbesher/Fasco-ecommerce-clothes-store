"use client";

import useSetFilter from "../hooks/useSetFilter";

function Color({ color, type = "mini", width = "1.5rem", height = "1.5rem" }) {
  const { handleSetFilter } = useSetFilter("color", color);

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
      onClick={handleClick}
      style={{ backgroundColor: color, height: height, width: width }}
      className={`h-6 ${
        type === "large" ? "cursor-pointer" : ""
      } rounded-full border border-solid border-gray-600`}
    ></div>
  );
}

export default Color;
