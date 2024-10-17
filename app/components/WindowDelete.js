"use client";

import { HiXMark } from "react-icons/hi2";
import { useModal } from "../contexts/ModalContext";
import { cancelOrder } from "../lib/actions";
import { useEffect, useRef } from "react";
import toast from "react-hot-toast";
import SpinnerMini from "./SpinnerMini";

function WindowDelete({ orderId }) {
  const { closeWindow, setIsLoading, isLoading } = useModal();
  const windowRef = useRef();

  useEffect(
    function () {
      //handle click outside the window
      function handleClick(e) {
        if (windowRef.current && !windowRef.current.contains(e.target)) {
          closeWindow();
        }
      }

      // true here to handle event on capturing phase so when the event first happens not when bubbling up
      // because handling event here in the bubbling phase will cause the modal window to open and closes instantly
      // because it will detect the click as outside click
      document.addEventListener("click", handleClick, true);

      //clean up function to remove the event listner to prevent memory leaks or attaching multiple active event listners which might lead
      // to unexpected behavior
      return () => document.removeEventListener("click", handleClick);
    },
    [closeWindow],
  );

  return (
    <div
      className="relative flex max-w-[85%] flex-col gap-6 rounded-lg bg-primary p-10 shadow-lg max-sm:p-6"
      ref={windowRef}
    >
      <button
        className="absolute right-3 top-2 block rounded-md p-1 transition-all hover:bg-primary-2"
        onClick={closeWindow}
      >
        <HiXMark className="h-6 w-6" />
      </button>

      <h3 className="max-sm-l:text-base text-lg font-semibold text-secondary">
        Cancel Order
      </h3>
      <p className="max-sm-l:text-sm text-base font-medium text-secondary">
        Are You Sure You Want To Cancel This Order ?
      </p>

      <div className="ml-auto flex items-center gap-8">
        <button
          className="rounded-md border-2 border-primary-2 px-6 py-3 font-medium text-secondary"
          onClick={closeWindow}
        >
          No
        </button>
        {/* // this button when cancel will do
            // - change order status to "canceled"
            // - delete all order items related to it from orderItems table
            // - I used this server action(cancelOrder) to handle this */}

        <button
          onClick={async () => {
            setIsLoading(true);
            //call server action
            await cancelOrder(orderId);
            //close window
            closeWindow();
            //delete toaster
            //toast notification
            toast.success("Order Successfully Removed ");
            setIsLoading(false);
          }}
          className="rounded-md bg-red-600 px-6 py-3 font-medium text-primary transition-colors hover:bg-red-700"
        >
          {isLoading ? (
            <SpinnerMini spinnerColor="border-primary" marginY="my-1" />
          ) : (
            "Yes"
          )}
        </button>
      </div>
    </div>
  );
}

export default WindowDelete;
