"use client";

import { CalculateCartTotalPrice } from "@/utils/utils";
import { useCart } from "../contexts/cartContext";
import Button from "./Button";
import ButtonClearCart from "./ButtonClearCart";
// import CartEmpty from "./CartEmpty";
import CartItem from "./CartItem";

function CartList({ CartEmpty }) {
  const { cart } = useCart();
  // console.log(cart);

  if (cart.length === 0) {
    return <div>{CartEmpty}</div>;
  }

  const cartTotalPrice = CalculateCartTotalPrice(cart);
  // className="grid grid-cols-[4fr_1fr] gap-8 border-b-2 border-solid border-primary-2 pb-4 text-base font-semibold text-black max-xl:gap-6 max-lg:grid-cols-[4.25fr_1fr] max-lg:gap-4"

  return (
    <>
      <ul className="list-none">
        {cart.map((item, i) => (
          <CartItem key={i} item={item} />
        ))}
      </ul>

      <div className="ml-auto mt-8 flex w-fit flex-col items-end gap-4">
        <div className="flex w-[100%] items-center justify-between">
          <p className="text-base font-semibold text-black">Subtotal</p>
          <p className="text-base font-semibold text-black">
            {cartTotalPrice.toFixed(2)}$
          </p>
        </div>
        <Button href="/checkout">Checkout</Button>
        <ButtonClearCart />
      </div>
    </>
  );
}

export default CartList;
