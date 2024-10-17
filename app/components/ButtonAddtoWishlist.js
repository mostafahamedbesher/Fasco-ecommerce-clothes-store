"use client";

import { HiOutlineStar } from "react-icons/hi2";
import { addToWishlistAction } from "../lib/actions";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

function ButtonAddtoWishlist({
  productId,
  variantColor,
  isExistItem,
  session,
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  async function handleClick() {
    if (!session) {
      //redirect user to signin page
      router.push("/signin");
      return;
    }

    setIsLoading(true);
    await addToWishlistAction(productId, variantColor);
    setIsLoading(false);
    //toast notification
    toast.success("Product Added to Wishlist");
  }

  function handleOnMouseEnter() {
    //only if item is not in wishlist
    if (!isExistItem) {
      setIsHovered(true);
    }
  }

  function handleOnMouseLeave() {
    //only if item is not in wishlist
    if (!isExistItem) {
      setIsHovered(false);
    }
  }

  return (
    <button
      onClick={handleClick}
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
      disabled={isLoading}
      type="button"
      className={`transition-200 max-sm-l:scale-95 mr-8 cursor-pointer rounded-full border border-solid border-primary-2 p-2 transition-all max-lg:mr-1 ${
        isHovered || isExistItem ? "bg-black" : "bg-transparent"
      }`}
    >
      <HiOutlineStar
        className={`h-6 w-6 ${
          isHovered || isExistItem
            ? "fill-primary stroke-primary"
            : "fill-transparent stroke-black"
        }`}
      />
    </button>
  );
}

export default ButtonAddtoWishlist;
