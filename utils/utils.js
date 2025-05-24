export function CalculateCartTotalPrice(cart = []) {
  if (cart.length === 0) return;

  const cartTotalPrice = cart
    .map((item) => item.price * item.quantity)
    .reduce((acc, cur) => acc + cur);

  return cartTotalPrice;
}

export function getUniqueItems(arr) {
  const set = new Set(arr);
  return [...set];
}

export function filteredProducts(
  productsData = [],
  allVariants = [],
  filter,
  filterType = "size",
) {
  const filters = {
    size: "size",
    color: "color",
  };

  if (!productsData.length || !allVariants.length) return [];

  const displayedProducts = productsData?.filter((product) => {
    const productVariants = allVariants?.filter(
      (variant) => variant.productId === product.id,
    );
    const availableVariants = getUniqueItems(
      productVariants.map((productvar) => productvar[filters[filterType]]),
    );
    return availableVariants?.includes(filter);
  });

  return displayedProducts;
}
