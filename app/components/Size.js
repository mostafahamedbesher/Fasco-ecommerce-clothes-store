"use client";

import { useSearchParams } from "next/navigation";
import useSetFilter from "../hooks/useSetFilter";

function Size({ children, size }) {
  const { handleSetFilter } = useSetFilter("size", size);
  const searchParams = useSearchParams();
  const sizeParam = searchParams.get("size");

  return (
    <button
      onClick={handleSetFilter}
      className={`flex h-12 w-12 cursor-pointer items-center justify-center rounded-md border-2 border-solid border-secondary-gray-0 text-sm font-semibold uppercase ${sizeParam === size ? "bg-secondary-gray-0 text-primary" : "text-secondary-gray-0"} max-xl:h-10 max-xl:w-10`}
    >
      {children}
    </button>
  );
}

export default Size;
