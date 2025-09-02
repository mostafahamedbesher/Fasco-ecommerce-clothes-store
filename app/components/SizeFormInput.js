"use client";

import useSetFilter from "../hooks/useSetFilter";

function SizeFormInput({ i, size, register, ProductvariantSize }) {
  const { handleSetFilter } = useSetFilter("sizeVariant", size);

  return (
    <div>
      <label
        htmlFor={i}
        className={`${
          size === ProductvariantSize ? "bg-black text-primary" : ""
        } relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-md border-2 border-solid border-primary-2 p-4 text-sm font-normal uppercase text-black transition-all duration-200 hover:bg-black hover:text-primary`}
        onClick={handleSetFilter}
        // onClick={handleSizeChange}
      >
        {/* {variant.stokeQuantity === 0 && (
          <span className="absolute top-0 left-2/4 rotate-45 block h-[110%] w-[1.5px] bg-red-600"></span>
        )} */}
        {size}
      </label>

      <input
        type="radio"
        className="hidden"
        id={i}
        value={size}
        {...register("size")}
      />
    </div>
  );
}

export default SizeFormInput;
