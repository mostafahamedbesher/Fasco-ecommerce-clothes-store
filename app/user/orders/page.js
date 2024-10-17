import ModalWindow from "@/app/components/ModalWindow";
import OrderCard from "@/app/components/OrderCard";
import WindowDelete from "@/app/components/WindowDelete";
import { ModalProvider } from "@/app/contexts/ModalContext";
import { auth } from "@/app/lib/auth";
import { getOrders } from "@/app/lib/data-service";
import { differenceInSeconds } from "date-fns";
import Link from "next/link";

export const revalidate = 0;

async function page() {
  const session = await auth();
  const userId = session.user.userId;
  const orders = await getOrders(userId);
  // const orders = [];

  if (orders.length === 0) {
    return (
      <div className="mt-8 flex flex-col items-center justify-center gap-4">
        <p>You Have Not Made Any Orders</p>
        <Link
          href="/products"
          className="border-b-2 border-black text-xl font-semibold"
        >
          Shop Now &rarr;
        </Link>
      </div>
    );
  }

  const sortedOrders = orders
    .slice()
    .sort((a, b) => -differenceInSeconds(a.created_at, b.created_at));
  // console.log(sortedOrders);
  // console.log(orders);

  return (
    <ModalProvider>
      <ul className="flex flex-col gap-8">
        {sortedOrders.map((order) => (
          <li key={order.id}>
            <OrderCard order={order} />
          </li>
        ))}
      </ul>
    </ModalProvider>
  );
}

export default page;
