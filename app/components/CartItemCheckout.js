"use client";

import Image from "next/image";
import namer from "color-namer";

function CartItemCheckout({ item }) {
  return (
    <li className="flex gap-2">
      <div className="max-sm-l:h-16 relative aspect-square h-24 max-lg:h-16 max-md:h-20">
        <Image
          src={item.images[0]}
          fill
          alt="product image"
          className="rounded-sm object-fill"
        />
        <span className="absolute right-[-8px] top-[-11px] w-6 rounded-sm bg-red-500 p-1 text-center text-xs text-primary">
          {item.quantity}x
        </span>
      </div>

      <div className="flex w-full items-center justify-between gap-2 px-2">
        <div className="flex flex-col gap-2">
          <span className="max-sm-l:text-[10px] text-sm font-semibold max-lg:text-xs">
            {item.title}
          </span>
          <div className="flex items-center gap-1">
            <span className="max-sm-l:text-[10px] text-sm text-secondary-gray-0 max-lg:text-xs">
              Color :{" "}
            </span>
            <span className="max-sm-l:text-[10px] text-sm max-lg:text-xs">
              {namer(item.color).html[0].name}
            </span>

            {/* <span
              style={{ backgroundColor: item.color }}
              className="inline-block w-4 h-4 rounded-full"
            ></span> */}
          </div>

          <div className="flex items-center gap-1">
            <span className="text-sm text-secondary-gray-0 max-lg:text-xs">
              Size :{" "}
            </span>
            <span className="text-sm text-secondary-gray-0 max-lg:text-xs">
              {item.size}
            </span>
          </div>
        </div>

        <span className="max-sm-l:text-xs font-semibold max-lg:text-sm">
          {(item.quantity * item.price).toFixed(2)}$
        </span>
      </div>
    </li>
  );
}

export default CartItemCheckout;
