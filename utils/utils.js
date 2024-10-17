export function CalculateCartTotalPrice(cart = []) {
  if (cart.length === 0) return;

  const cartTotalPrice = cart
    .map((item) => item.price * item.quantity)
    .reduce((acc, cur) => acc + cur);

  return cartTotalPrice;
}
