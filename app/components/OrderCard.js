import { format } from "date-fns";
import { FaBoxOpen } from "react-icons/fa";
import { HiCheck } from "react-icons/hi2";
import { IoCheckmarkDone } from "react-icons/io5";
import { IoInformationCircleOutline } from "react-icons/io5";
import { getOrderItems } from "../lib/data-service";
import OrderCancelButton from "./OrderCancelButton";
import Link from "next/link";
import ModalWindow from "./ModalWindow";
import WindowDelete from "./WindowDelete";

const statusColors = {
  pending: "bg-orange-400",
  shipped: "bg-blue-400",
  delivered: "bg-green-500 text-black",
  canceled: "bg-red-500 text-primary",
};

async function OrderCard({ order }) {
  const {
    id,
    firstName,
    lastName,
    address,
    country,
    city,
    phoneNumber,
    created_at,
    status,
    totalPrice,
    isPaid,
  } = order;

  const formattedDate = format(created_at, "EEE, MMM dd yyyy 'at' h:mm a");

  //get order items
  const orderItems = await getOrderItems(id);
  // order items size
  const ordersItemsNumber = orderItems.length;

  //make status first charcter to be uppercase
  const statusNew = status.slice(0, 1).toUpperCase() + status.slice(1);
  // className="flex w-full justify-between gap-2 max-sm:overflow-x-scroll"
  return (
    <div className="max-sm-l:min-h-40 flex justify-between gap-2 border-2 border-black">
      <div className="grid w-full grid-cols-[1fr_3fr_2fr] gap-4 max-sm:overflow-x-scroll">
        <div className="flex items-center justify-center border-r-2 border-black p-4 max-sm:p-2">
          <FaBoxOpen className="h-16 w-16 max-lg:h-14 max-lg:w-14 max-md:h-12 max-md:w-12" />
        </div>

        <div className="max-sm-l:justify-between flex flex-grow flex-col gap-2 py-2">
          <p className="font-medium max-xl:text-sm">{`${firstName} ${lastName}`}</p>
          <p className="max-xl:text-sm">{`${country}, ${city}, ${address}`}</p>
          <p className="max-xl:text-sm">{phoneNumber}</p>
          <div className="flex items-center gap-6 max-xl:gap-2 max-sm:min-w-[11rem]">
            <p className="font-semibold max-sm:text-sm">
              ${totalPrice.toFixed(2)}
            </p>
            {ordersItemsNumber !== 0 && (
              <>
                <p className="max-xl:text-sm max-sm:text-xs">{"->"}</p>
                <p className="rounded-md bg-primary-2 px-3 max-xl:text-sm max-sm:text-xs">
                  {`${ordersItemsNumber}x ${
                    ordersItemsNumber === 1 ? "item" : "items"
                  }`}
                </p>
              </>
            )}
          </div>
        </div>

        <div className="flex flex-col items-end justify-between py-2 max-sm:min-w-[12rem]">
          <div
            className={`${statusColors[status]} mt-2 flex items-center gap-1 rounded-md px-6 py-1 text-sm max-xl:text-xs`}
          >
            <span>{statusNew}</span>
            {status === "delivered" && <IoCheckmarkDone className="h-5 w-5" />}
          </div>

          <div
            className={`${
              isPaid ? "bg-green-400" : "bg-red-400"
            } mt-2 flex items-center gap-1 rounded-md px-6 py-1 text-sm max-xl:text-xs`}
          >
            {isPaid ? (
              <>
                <span>Paid</span>
                <HiCheck className="h-4 w-4" />
              </>
            ) : (
              <span>Not Paid</span>
            )}
          </div>

          <p className="max-xl:text-xs">{formattedDate}</p>
        </div>
      </div>
      {/*  */}
      <div className="ml-auto flex w-[9rem] flex-col border-l-2 border-black max-md:w-[3rem]">
        {status !== "canceled" && (
          <>
            <div
              className={`${
                status === "pending" ? "hover:bg-primary-2" : ""
              } flex h-[50%] items-center justify-center border-b-2 border-black transition-colors`}
            >
              {status === "pending" && <OrderCancelButton openId={id} />}
              <ModalWindow openId={id}>
                <WindowDelete orderId={id} />
              </ModalWindow>
            </div>

            <div className="h-[50%] transition-colors hover:bg-primary-2">
              <Link
                href={`/user/orders/${id}`}
                className="flex h-full w-full items-center justify-center whitespace-nowrap px-4 py-3 max-xl:px-2 max-xl:text-sm"
              >
                <span className="max-md:hidden">Items Details</span>
                {/* icon will appear on mobile devices only */}
                <IoInformationCircleOutline className="hidden max-md:block max-md:h-7 max-md:w-7" />
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default OrderCard;
