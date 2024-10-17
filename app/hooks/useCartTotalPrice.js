import { CalculateCartTotalPrice } from "@/utils/utils";
import { useCart } from "../contexts/cartContext";

export function useCartTotalPrice(shippingPrice) {
  const { cart } = useCart();

  const cartTotalPrice = CalculateCartTotalPrice(cart);
  const totalPrice = (cartTotalPrice + shippingPrice).toFixed(2);

  return totalPrice;
}
