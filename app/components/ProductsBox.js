"use client";

import { useEffect } from "react";
import { useGridView } from "../contexts/gridViewContext";
import useSetFilter from "../hooks/useSetFilter";

function ProductsBox({ children, displayedProductsLength }) {
  const { columnsNo } = useGridView();

  //use this and the (useEffect) to reset the range searchParam
  const { handleSetFilter } = useSetFilter("range", 6);

  useEffect(
    function () {
      handleSetFilter();
    },
    [displayedProductsLength],
  );

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
      className={`max-sm-l:grid-cols-1 mt-8 grid gap-6 gap-y-10 max-xl:gap-8 max-sm:grid-cols-2 ${gridCols} max-sm:gap-6`}
    >
      {children}
    </div>
  );
}

export default ProductsBox;
