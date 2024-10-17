"use client";

import { useCart } from "../contexts/cartContext";

function ButtonClearCart() {
  const { dispatch } = useCart();

  return (
    <button
      onClick={() => dispatch("cart/clear")}
      className="max-sm-l:px-12 w-[100%] whitespace-nowrap rounded-sm border border-solid border-secondary bg-primary px-32 py-3 text-center text-sm font-medium text-black transition-all duration-200 hover:opacity-75 max-sm:px-24"
    >
      Clear cart
    </button>
  );
}

export default ButtonClearCart;
