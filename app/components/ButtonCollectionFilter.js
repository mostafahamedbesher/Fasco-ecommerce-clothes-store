"use client";

import { useSearchParams } from "next/navigation";
import useSetFilter from "../hooks/useSetFilter";

function ButtonCollectionFilter({ children, category }) {
  const { handleSetFilter } = useSetFilter("category", category);
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");

  return (
    <button
      className={`rounded-sm px-2 text-lg uppercase ${categoryParam === category ? "bg-secondary-gray-0 text-primary" : "text-secondary-gray-0"}`}
      onClick={handleSetFilter}
    >
      {children}
    </button>
  );
}

export default ButtonCollectionFilter;
