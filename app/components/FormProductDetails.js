"use client";

import { HiOutlineTruck } from "react-icons/hi2";
import { PiTShirt } from "react-icons/pi";

import React, { useEffect, useState } from "react";

import ButtonAddToCart from "./ButtonAddToCart";
import { useCart } from "../contexts/cartContext";
import Quantity from "./Quantity";
import { useForm } from "react-hook-form";
import SizeForm from "./SizeForm";
import ColorForm from "./ColorForm";
import ButtonSoldout from "./ButtonSoldout";

import namer from "color-namer";
import { addDays, format } from "date-fns";
import ButtonAddtoWishlist from "./ButtonAddtoWishlist";
import toast from "react-hot-toast";

function FormProductDetails({
  product,
  colors,
  sizesAvailable,
  ProductvariantSize,
  ProductvariantColor,
  matchedProduct,
  wishlist,
  session,
}) {
  const { register, handleSubmit, setValue } = useForm();

  const { title, discount, material } = product;

  // //edit
  // const sizes = ["sm", "m", "l", "xl", "2xl"];

  const { dispatch } = useCart();
  const today = format(new Date(), "MMMM d");
  const afterThreeDays = format(addDays(today, 3), "MMMM d");
  const afterFiveDays = format(addDays(today, 5), "MMMM d");

  //wishlist
  const [isExistItem, setIsExistItem] = useState(false);

  useEffect(
    function () {
      if (session) {
        const itemExist = wishlist?.find(
          (item) =>
            item.productId === product.id && item.color === ProductvariantColor,
        );

        if (itemExist) {
          setIsExistItem(true);
        } else {
          setIsExistItem(false);
        }
      }
    },
    [
      ProductvariantColor,
      product.id,
      isExistItem,
      wishlist?.length,
      session,
      wishlist,
    ],
  );

  function onSubmit(data) {
    // console.log(data);
    const { size, color, quantity } = data;

    // add data to cart state in reducer
    dispatch({
      type: "cart/addItem",
      payload: {
        id: matchedProduct.id,
        price: matchedProduct.price - discount,
        title,
        images: matchedProduct.images,
        size: size ?? sizesAvailable[0],
        color: color ?? colors[0],
        quantity: quantity ?? 1,
        maxQuantity: matchedProduct.stokeQuantity,
      },
    });

    //toast notification
    toast.success("Product Added to Cart");
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-3">
        <p className="text-sm font-semibold text-black">
          Size : {ProductvariantSize.toUpperCase()}
        </p>

        <fieldset className="flex items-center gap-2">
          {sizesAvailable.map((size, i) => (
            <SizeForm
              key={i}
              i={i}
              size={size}
              register={register}
              ProductvariantSize={ProductvariantSize}
            />
          ))}
        </fieldset>
      </div>

      <div className="flex flex-col gap-3">
        <p className="text-sm font-semibold text-black">
          Color : {namer(ProductvariantColor).html[0].name}
        </p>

        <fieldset className="flex items-center gap-2">
          {colors.map((color, i) => (
            <ColorForm
              key={i}
              i={i}
              color={color}
              register={register}
              ProductvariantColor={ProductvariantColor}
            />
          ))}
        </fieldset>
      </div>

      <div className="flex flex-col gap-3">
        <p className="text-sm font-semibold text-black">Quantity :</p>
        <Quantity
          quantity={matchedProduct.stokeQuantity}
          register={register}
          setValue={setValue}
        />
      </div>

      <div className="flex w-[70%] flex-col gap-2 rounded-sm bg-primary-2 p-2 text-sm max-xl:w-[85%] max-lg:w-full max-lg:text-xs">
        <div className="flex items-end gap-1">
          <PiTShirt className="h-6 w-6" />
          <span className="font-bold">Material : </span>
          <span className="font-medium">{material}</span>
        </div>

        <div className="flex items-end gap-1 max-sm-l:flex-wrap">
          <HiOutlineTruck className="h-6 w-6" />
          <span className="font-bold">Estimated Delivery : </span>
          <span className="font-medium">
            {afterThreeDays} - {afterFiveDays}
          </span>
        </div>
      </div>

      <div className="flex justify-between">
        {matchedProduct.stokeQuantity ? (
          <ButtonAddToCart />
        ) : (
          <ButtonSoldout disabled={matchedProduct.stokeQuantity === 0} />
        )}
        <ButtonAddtoWishlist
          productId={product.id}
          variantColor={ProductvariantColor}
          isExistItem={isExistItem}
          session={session}
        />
      </div>
    </form>
  );
}

export default FormProductDetails;
