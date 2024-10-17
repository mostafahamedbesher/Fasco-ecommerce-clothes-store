"use client";

import { usePathname, useRouter } from "next/navigation";

function ButtonResetFilters() {
  const router = useRouter();
  const pathname = usePathname();

  function handleClick() {
    // router.push("/products");
    router.replace(pathname, undefined, { shallow: true });
  }

  return (
    <button
      className="whitespace-nowrap rounded-sm border-2 border-black px-6 py-1 text-sm text-black transition-colors hover:text-secondary-gray-0 max-xl:px-4 max-xl:text-xs max-lg:mr-3"
      onClick={handleClick}
    >
      Reset Filters
    </button>
  );
}

export default ButtonResetFilters;
