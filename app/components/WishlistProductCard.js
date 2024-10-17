"use client";

import Image from "next/image";
import Button from "./Button";
import { useRouter, useSearchParams } from "next/navigation";
import ButtonDeleteWishlistItem from "./ButtonDeleteWishlistItem";

function WishlistProductCard({ item }) {
  const { image, title, price, productId, color, id } = item;

  const searchParams = useSearchParams();
  const router = useRouter();

  function handleClick() {
    const params = new URLSearchParams(searchParams);
    params.set("colorVariant", color);
    router.replace(`/products/${productId}?${params.toString()}`, {
      scroll: false,
    });
  }

  return (
    <li className="row-span-5 grid grid-rows-subgrid">
      <div className="relative aspect-[4/5]">
        <Image
          fill
          quality={90}
          className="rounded-sm object-cover"
          src={image}
          alt={title}
        />
      </div>

      <p className="font-semibold">{title}</p>

      <div className="flex items-center justify-between">
        <p className="font-semibold">{price.toFixed(2)} $</p>

        <div className="flex items-center gap-1">
          <span className="text-base">color: </span>
          <span
            style={{ backgroundColor: color }}
            className="h-4 w-4 rounded-full"
          ></span>
        </div>
      </div>

      <div className="mt-1" onClick={handleClick}>
        <Button padding="px-2 py-3" width="100%">
          Select Options
        </Button>
      </div>

      <ButtonDeleteWishlistItem id={id} />
    </li>
  );
}

export default WishlistProductCard;
