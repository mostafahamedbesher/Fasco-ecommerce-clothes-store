"use client";

import useSetFilter from "../hooks/useSetFilter";

function Size({ children, size }) {
  const { handleSetFilter } = useSetFilter("size", size);

  return (
    <button
      onClick={handleSetFilter}
      className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-md border-2 border-solid border-secondary-gray-0 text-sm font-semibold uppercase text-secondary-gray-0 max-xl:h-10 max-xl:w-10"
    >
      {children}
    </button>
  );
}

export default Size;
