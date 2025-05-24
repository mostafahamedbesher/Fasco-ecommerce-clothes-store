"use client";

import { useSearchParams } from "next/navigation";
import useSetFilter from "../hooks/useSetFilter";

function ButtonPriceFilter({ children, priceMax }) {
  const { handleSetFilter } = useSetFilter("priceMax", priceMax);
  const searchParams = useSearchParams();
  const priceParam = searchParams.get("priceMax");

  return (
    <button
      className={`rounded-sm px-2 text-lg transition-colors duration-150 hover:bg-secondary-gray-0 hover:text-primary ${priceParam === String(priceMax) ? "bg-secondary-gray-0 text-primary" : "text-secondary-gray-0"}`}
      onClick={handleSetFilter}
    >
      {children}
    </button>
  );
}

export default ButtonPriceFilter;
