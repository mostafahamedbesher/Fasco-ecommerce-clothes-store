"use client";

import { useEffect } from "react";
import { useGridView } from "../contexts/gridViewContext";
import useSetFilter from "../hooks/useSetFilter";
import { useSearchParams } from "next/navigation";

function ProductsBox({ children, displayedProductsLength, itemsPerPage }) {
  const { columnsNo } = useGridView();

  //use this and the below (useEffect) to reset the range searchParam(needed when filtering products)
  const { handleSetFilter } = useSetFilter("range", itemsPerPage);
  const searchParams = useSearchParams();

  useEffect(
    function () {
      if (
        displayedProductsLength < itemsPerPage ||
        !searchParams.has("range")
      ) {
        handleSetFilter();
      }
    },
    [displayedProductsLength],
  );

  // useEffect(
  //   function () {
  //     handleSetFilter();
  //   },
  //   [displayedProductsLength],
  // );

  // the below effect is to make the product available to false if all of his variants products stock Quantaties are zero
  // (will be made -- this is not the above effect)
  // useEffect(function(){},[]);

  let gridCols = "";

  if (columnsNo === 4) {
    gridCols = "grid-cols-4";
  } else if (columnsNo === 3) {
    gridCols = "grid-cols-3";
  } else if (columnsNo === 2) {
    gridCols = "grid-cols-2";
  }

  return (
    <div
      // style={{ gridTemplateColumns: `repeat(${columnsNo},1fr)` }}
      className={`mt-8 grid gap-6 gap-y-10 max-xl:gap-8 max-sm:grid-cols-2 max-sm-l:grid-cols-1 ${gridCols} max-sm:gap-6`}
    >
      {children}
    </div>
  );
}

export default ProductsBox;
