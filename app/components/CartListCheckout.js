"use client";

import { useEffect } from "react";
import { useCart } from "../contexts/cartContext";
import CartItemCheckout from "./CartItemCheckout";
import { redirect } from "next/navigation";
import { CalculateCartTotalPrice } from "@/utils/utils";

function CartListCheckout({ shippingPrice }) {
  const { cart } = useCart();

  // if the cart is Empty
  // if (cart.length === 0) {
  //   // redirect to products page
  //   redirect("/products");
  // }

  const cartTotalPrice = CalculateCartTotalPrice(cart);

  return (
    <>
      <ul className="flex list-none flex-col gap-6">
        {cart.map((item) => (
          <CartItemCheckout key={item.id} item={item} />
        ))}
      </ul>

      <div className="mt-10 flex flex-col gap-2 border-t-2 border-black pt-2">
        <div className="flex justify-between text-base">
          <span>SubTotal</span>
          <span>{cartTotalPrice.toFixed(2)}$</span>
        </div>

        <div className="flex justify-between text-base">
          <span>Shipping</span>
          <span>{shippingPrice}$</span>
        </div>

        <div className="flex justify-between text-base">
          <span>Total</span>
          <span className="font-semibold">
            {(cartTotalPrice + shippingPrice).toFixed(2)}$
          </span>
        </div>
      </div>
    </>
  );
}

export default CartListCheckout;
