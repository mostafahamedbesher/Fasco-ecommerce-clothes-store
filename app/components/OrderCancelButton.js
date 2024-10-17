"use client";

import { useModal } from "../contexts/ModalContext";
import SpinnerMini from "./SpinnerMini";

import { HiOutlineTrash } from "react-icons/hi2";

function OrderCancelButton({ openId }) {
  const { openWindow, windowOpenId, isLoading } = useModal();

  // this button when cancel will only open Delete Modal Window and the "Yes" button in this window
  //  will call the server action that will cancel the order

  return (
    <button
      disabled={isLoading}
      className="h-full w-full whitespace-nowrap px-4 py-3 max-xl:px-2 max-xl:text-sm max-md:text-center"
      onClick={() => openWindow(openId)}
    >
      {windowOpenId === openId && isLoading ? (
        <SpinnerMini />
      ) : (
        <div className="max-md:flex max-md:justify-center">
          <span className="max-md:hidden">Cancel Order</span>{" "}
          <HiOutlineTrash className="hidden text-red-600 max-md:block max-md:h-7 max-md:w-7" />
        </div>
      )}
    </button>
  );
}

export default OrderCancelButton;
