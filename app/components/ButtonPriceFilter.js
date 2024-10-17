"use client";

import useSetFilter from "../hooks/useSetFilter";

function ButtonPriceFilter({ children, priceMax }) {
  const { handleSetFilter } = useSetFilter("priceMax", priceMax);

  return (
    <button className="text-lg text-secondary-gray-0" onClick={handleSetFilter}>
      {children}
    </button>
  );
}

export default ButtonPriceFilter;
