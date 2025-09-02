"use client";

import { useState } from "react";
import useSetFilter from "../hooks/useSetFilter";

function ButtonPagination({ count, displayedProductsLength, itemsPerPage }) {
  const [range, setRange] = useState(itemsPerPage);

  const { handleSetFilter } = useSetFilter(
    "range",
    range + itemsPerPage < displayedProductsLength
      ? range + itemsPerPage
      : displayedProductsLength,
  );

  function handleClick() {
    if (range + itemsPerPage < displayedProductsLength) {
      setRange((r) => r + itemsPerPage);
    } else {
      setRange(displayedProductsLength);
    }

    handleSetFilter();
  }

  return (
    <button
      onClick={handleClick}
      className="mx-auto block border-2 border-black px-8 py-2 text-base text-black transition-colors hover:bg-black hover:text-primary"
    >
      More Products...
    </button>
  );
}

export default ButtonPagination;

// "use client";

// import { useState } from "react";
// import useSetFilter from "../hooks/useSetFilter";

// function ButtonPagination({ count, displayedProductsLength,itemsPerPage }) {
//   const [range, setRange] = useState(6);

//   const { handleSetFilter } = useSetFilter(
//     "range",
//     range + 6 < displayedProductsLength ? range + 6 : displayedProductsLength,
//   );

//   function handleClick() {
//     if (range + 6 < displayedProductsLength) {
//       setRange((r) => r + 6);
//     } else {
//       setRange(displayedProductsLength);
//     }

//     handleSetFilter();
//   }

//   return (
//     <button
//       onClick={handleClick}
//       className="mx-auto block border-2 border-black px-8 py-2 text-base text-black transition-colors hover:bg-black hover:text-primary"
//     >
//       More Products...
//     </button>
//   );
// }

// export default ButtonPagination;
