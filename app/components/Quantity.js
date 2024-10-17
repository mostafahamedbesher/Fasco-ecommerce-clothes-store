"use client";

import { useState } from "react";
import { useCart } from "../contexts/cartContext";

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
      dispatch({
        type: "cart/increaseItemQuantity",
        payload: {
          id: item.id,
        },
      });
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
    <div className="flex w-fit items-center justify-start border-2 border-solid border-primary-2">
      <span
        onClick={decreaseQuantity}
        className="inline-block cursor-pointer border-r-2 px-4 py-3 text-center text-sm font-semibold text-black max-sm:px-3 max-sm:py-2"
      >
        -
      </span>

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
          className="no-spinner inline-block w-20 py-3 text-center"
          {...register("quantity", {
            min: 1,
            max: maxQuantity,
            valueAsNumber: true,
          })}
        />
      )}

      <span
        onClick={increaseQuantity}
        className="inline-block cursor-pointer border-l-2 px-4 py-3 text-center text-sm font-semibold text-black max-sm:px-3 max-sm:py-2"
      >
        +
      </span>
    </div>
  );
}

export default Quantity;

// "use client";

// import { useState } from "react";

// function Quantity({ quantity: maxQuantity, register }) {
//   const [quantityVal, setQuantityVal] = useState(1);

//   function increaseQuantity() {
//     if (quantityVal < maxQuantity) {
//       setQuantityVal((q) => q + 1);
//     }
//   }

//   function decreaseQuantity() {
//     if (quantityVal > 1) {
//       setQuantityVal((q) => q - 1);
//     }
//   }

//   return (
//     <div className="flex items-center justify-start border-2 border-primary-2 border-solid w-fit">
//       <span
//         onClick={decreaseQuantity}
//         className="inline-block text-sm border-r-2 text-black font-semibold text-center py-3 px-4 cursor-pointer"
//       >
//         -
//       </span>

//       <input
//         type="number"
//         readOnly
//         // min={1}
//         // max={maxQuantity}
//         // defaultValue={1}
//         className="py-3 text-center no-spinner"
//         value={quantityVal}
//         {...register("quantity", {
//           min: {
//             value: 1,
//           },
//           max: {
//             value: maxQuantity,
//           },
//         })}
//       />

//       <span
//         onClick={increaseQuantity}
//         className="inline-block text-sm border-l-2 text-black font-semibold text-center py-3 px-4 cursor-pointer"
//       >
//         +
//       </span>
//     </div>
//   );
// }

// export default Quantity;
