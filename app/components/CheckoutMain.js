"use client";

import { useCart } from "../contexts/cartContext";

function CheckoutMain({ children }) {
  const { cart } = useCart();
  // if the cart is Empty
  if (cart.length === 0) {
    return;
  }

  return (
    <main className="grid grid-cols-2 max-md:grid-cols-1 max-md:gap-y-6">
      {children}
    </main>
  );
}

export default CheckoutMain;
