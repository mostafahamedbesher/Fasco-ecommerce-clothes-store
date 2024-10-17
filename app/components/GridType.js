"use client";

import { HiBars2 } from "react-icons/hi2";
import { HiBars3 } from "react-icons/hi2";
import { HiBars4 } from "react-icons/hi2";
import { useGridView } from "../contexts/gridViewContext";

// function GridType({ setColumnsNo, columnsNo })

function GridType() {
  const { columnsNo, setColumnsNo } = useGridView();

  function handleClick(value) {
    setColumnsNo(value);
  }

  return (
    <ul className="flex list-none items-center justify-end gap-4 max-md:hidden">
      <li>
        <p className="text-sm uppercase">view as</p>
      </li>
      <li
        style={{
          borderColor: `${
            columnsNo === 2 ? "var(--color-secondary)" : "var(--color-ternary)"
          }`,
        }}
        className="cursor-pointer border-2 border-solid p-1 transition-all hover:bg-ternary"
        onClick={() => handleClick(2)}
      >
        <HiBars2 className="h-7 w-7 rotate-90" />
      </li>
      <li
        style={{
          borderColor: `${
            columnsNo === 3 ? "var(--color-secondary)" : "var(--color-ternary)"
          }`,
        }}
        className="cursor-pointer border-2 border-solid p-1 transition-all hover:bg-ternary"
        onClick={() => handleClick(3)}
      >
        <HiBars3 className="h-7 w-7 rotate-90" />
      </li>
      <li
        style={{
          borderColor: `${
            columnsNo === 4 ? "var(--color-secondary)" : "var(--color-ternary)"
          }`,
        }}
        className="cursor-pointer border-2 border-solid p-1 transition-all hover:bg-ternary max-xl:hidden"
        onClick={() => handleClick(4)}
      >
        <HiBars4 className="h-7 w-7 rotate-90" />
      </li>
    </ul>
  );
}

export default GridType;
