"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

function ButtonFilterAll({ filterType }) {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();

  function handleClick() {
    const params = new URLSearchParams(searchParams);

    if (filterType === "Sizes") {
      params.set("size", "all");
    }

    if (filterType === "Colors") {
      params.set("color", "all");
    }

    if (filterType === "Categories") {
      params.set("category", "all");
    }

    if (filterType === "Prices") {
      params.set("priceMax", "all");
    }

    router.replace(`${pathName}?${params.toString()}`, { scroll: false });
  }

  return (
    <button
      className="rounded-sm border-b-2 border-black text-base uppercase text-black"
      onClick={handleClick}
    >
      all
    </button>
  );
}

export default ButtonFilterAll;
