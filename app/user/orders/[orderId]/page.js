import OrderItemCard from "@/app/components/OrderItemCard";
import { getOrderItems } from "@/app/lib/data-service";

async function page({ params }) {
  const { orderId } = params;
  const orderItems = await getOrderItems(orderId);
  // console.log(orderItems);

  return (
    <ul className="grid grid-cols-2 gap-14 max-xl:grid-cols-1">
      {orderItems.map((item) => (
        <li key={item.id}>
          <OrderItemCard item={item} />
        </li>
      ))}
    </ul>
  );
}

export default page;
