"use client";

import Image from "next/image";

import { HiOutlineTrash } from "react-icons/hi2";
import { useCart } from "../contexts/cartContext";
import Quantity from "./Quantity";

function CartItem({ item }) {
  const { dispatch } = useCart();

  const productPrice = item.price;

  return (
    <li className="flex gap-8 border-b-2 border-solid border-primary-2 py-4 max-xl:gap-6 max-lg:gap-4 max-sm-l:gap-3">
      <div className="relative aspect-square h-52 max-lg:h-56 max-sm:h-44 max-sm-l:h-24">
        <Image
          src={item.images[0]}
          fill
          alt="product image"
          className="rounded-sm object-fill"
        />
      </div>

      <div className="space-y-4 max-sm:space-y-3">
        <p className="text-base font-semibold text-black max-md:text-sm max-sm-l:text-xs">
          {item.title}
        </p>

        <div className="flex items-center gap-2 text-secondary-gray-0">
          <span className="max-lg:text-sm">Color :</span>
          <span
            style={{ backgroundColor: item.color }}
            className="inline-block h-5 w-5 rounded-full border border-gray-700"
          ></span>
        </div>

        <p className="text-secondary-gray-0 max-lg:text-sm">
          Size : {item.size.toUpperCase()}
        </p>

        <p className="text-lg font-semibold text-black max-md:text-base">
          {(item.quantity * productPrice).toFixed(2)} $
        </p>

        {/* second column */}
        <div className="flex items-center gap-16 max-sm:gap-8 max-sm-l:gap-6">
          <div>
            <Quantity
              quantity={item.maxQuantity}
              item={item}
              compPlace="cart"
            />
          </div>

          <div>
            <button
              className="rounded-sm border-2 border-primary-2 p-1 transition-all duration-200 hover:bg-primary-2 hover:text-red-600"
              onClick={() =>
                dispatch({
                  type: "cart/deleteItem",
                  payload: {
                    id: item.id,
                  },
                })
              }
            >
              <HiOutlineTrash className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}

export default CartItem;
