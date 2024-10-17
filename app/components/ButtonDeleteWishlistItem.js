"use client";

import toast from "react-hot-toast";
import { deleteWishlistItemAction } from "../lib/actions";
import Button from "./Button";

function ButtonDeleteWishlistItem({ id }) {
  async function handleClick() {
    await deleteWishlistItemAction(id);
    //toast notification
    toast.success("Product Removed from Wishlist");
  }

  return (
    <div role="button" onClick={handleClick} className="border-2 border-black">
      <Button
        width="100%"
        bgColor="transparent"
        TxtColor="text-black"
        padding="px-2 py-2"
      >
        Remove
      </Button>
    </div>
  );
}

export default ButtonDeleteWishlistItem;
