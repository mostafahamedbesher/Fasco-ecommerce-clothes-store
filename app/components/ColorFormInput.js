"use client";

import useSetFilter from "../hooks/useSetFilter";

function ColorFormInput({ i, color, register, ProductvariantColor }) {
  const { handleSetFilter } = useSetFilter("colorVariant", color);

  return (
    <div
      className={`${
        color === ProductvariantColor
          ? "rounded-full border-2 border-solid border-black p-[1px]"
          : ""
      }`}
    >
      <label
        htmlFor={i + 10}
        style={{ backgroundColor: color }}
        className="block h-8 w-8 cursor-pointer rounded-full border-2 border-solid border-ternary hover:opacity-75"
        onClick={handleSetFilter}
        // onClick={handleColorChange}
      />

      <input
        type="radio"
        className="hidden"
        id={i + 10}
        value={color}
        {...register("color")}
      />
    </div>
  );
}

export default ColorFormInput;
