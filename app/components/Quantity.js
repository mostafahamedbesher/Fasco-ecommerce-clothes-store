"use client";

import { useState } from "react";
import { useCart } from "../contexts/cartContext";

import { HiMiniPlusSmall } from "react-icons/hi2";
import { HiMiniMinusSmall } from "react-icons/hi2";

function Quantity({
  quantity: maxQuantity,
  register,
  setValue,
  compPlace = "",
  item,
}) {
  const [quantityVal, setQuantityVal] = useState(1);
  const { dispatch } = useCart();

  function increaseQuantity() {
    if (compPlace === "cart") {
      if (item.quantity < maxQuantity) {
        dispatch({
          type: "cart/increaseItemQuantity",
          payload: {
            id: item.id,
          },
        });
      }

      return;
    }

    if (quantityVal < maxQuantity) {
      const newQuantity = quantityVal + 1;
      setQuantityVal(newQuantity);
      setValue("quantity", newQuantity); // Update form value
    }
  }

  function decreaseQuantity() {
    if (compPlace === "cart") {
      if (item.quantity > 1) {
        dispatch({
          type: "cart/decreaseItemQuantity",
          payload: {
            id: item.id,
          },
        });
      }
      return;
    }

    if (quantityVal > 1) {
      const newQuantity = quantityVal - 1;
      setQuantityVal(newQuantity);
      setValue("quantity", newQuantity); // Update form value
    }
  }

  return (
    <div className="flex w-fit items-center justify-start rounded-sm border-2 border-solid border-primary-2">
      <button
        type="button"
        onClick={decreaseQuantity}
        className="inline-block h-12 cursor-pointer border-r-2 px-4 py-3 text-center text-sm font-semibold text-black transition-colors duration-200 hover:bg-primary-2 max-sm:px-3 max-sm:py-2"
      >
        <HiMiniMinusSmall className="h-4 w-4" />
      </button>

      {compPlace === "cart" ? (
        <input
          type="number"
          readOnly
          // value={quantityVal}
          value={item.quantity}
          className="no-spinner inline-block w-12 py-3 text-center max-sm:w-10 max-sm:py-2"
          onChange={(e) => setQuantityVal(item.quantity)}
          // onChange={(e) => setQuantityVal(Number(e.target.value))}
        />
      ) : (
        <input
          type="number"
          readOnly
          value={quantityVal}
          className="no-spinner inline-block w-20 text-center"
          {...register("quantity", {
            min: 1,
            max: maxQuantity,
            valueAsNumber: true,
          })}
        />
      )}

      <button
        type="button"
        onClick={increaseQuantity}
        className="inline-block h-12 cursor-pointer border-l-2 px-4 py-3 text-center text-sm font-semibold text-black transition-colors duration-200 hover:bg-primary-2 max-sm:px-3 max-sm:py-2"
      >
        <HiMiniPlusSmall className="h-4 w-4" />
      </button>
    </div>
  );
}

export default Quantity;
