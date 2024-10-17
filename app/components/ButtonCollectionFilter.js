"use client";

import useSetFilter from "../hooks/useSetFilter";

function ButtonCollectionFilter({ children, category }) {
  const { handleSetFilter } = useSetFilter("category", category);

  return (
    <button
      className="text-lg uppercase text-secondary-gray-0"
      onClick={handleSetFilter}
    >
      {children}
    </button>
  );
}

export default ButtonCollectionFilter;
