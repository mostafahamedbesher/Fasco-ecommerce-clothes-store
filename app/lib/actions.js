"use server";

import { redirect } from "next/navigation";
import {
  addOrderItems,
  createOrder,
  DeleteOrderItems,
  deleteWishlistItem,
  getAllProductVariants,
  getItemsFromWishlist,
  getProduct,
  insertToWishlist,
  updateOrderStatus,
  updateProductStokeQuantity,
} from "./data-service";
import { auth, signIn, signOut } from "./auth";
import { revalidatePath } from "next/cache";

export async function submitOrder(orderData, cart) {
  //1- create order in database
  const [order] = await createOrder(orderData);
  const { id: orderId } = order;

  //add ordered products in database(orderItems table which holds products that the user bought)
  const orderItems = cart.map((item) => {
    return {
      orderId,
      productId: item.id,
      quantity: item.quantity,
      price: item.price * item.quantity.toFixed(2),
      title: item.title,
      color: item.color,
      size: item.size,
    };
  });
  // console.log("orderItems", orderItems);
  await addOrderItems(orderItems);

  //2- update(decrease) products stokeQuantity
  cart.map(async (item) => {
    await updateProductStokeQuantity(item.id, item.maxQuantity - item.quantity);
  });

  //3- manual revalidate cache
  revalidatePath("/user/orders");

  //4- redirect user to success page
  redirect("/order-completed");
}

export async function signinAction(providerName) {
  await signIn(providerName, { redirectTo: "/user" });
}

export async function signoutAction() {
  await signOut({ redirectTo: "/" });
}

export async function cancelOrder(orderId) {
  // - change order status to "canceled"
  await updateOrderStatus(orderId);
  // - delete all order items related to it from orderItems table
  await DeleteOrderItems(orderId);
  //clear cache
  revalidatePath("/user/orders");
}

export async function addToWishlistAction(productId, variantColor) {
  //get current user
  const session = await auth();

  if (!session) return;

  //check if the product already in wishlist
  const wishlistItems = await getItemsFromWishlist(productId);
  let itemExist;

  if (wishlistItems.length > 0) {
    itemExist = wishlistItems.find((item) => item.color === variantColor);
  }

  // console.log("itemExist", itemExist);

  if (!itemExist) {
    //get current main product to add to wishlist
    const product = await getProduct(productId);
    //get product variant Price depending only on color with main product Id
    const { price: variantPrice, images } = (
      await getAllProductVariants(productId)
    ).find((variant) => variant.color === variantColor);

    const item = {
      userId: session.user.userId,
      productId: product.id,
      title: product.title,
      price: variantPrice - product.discount,
      image: images[0],
      color: variantColor,
    };
    //insert product to wishlist
    await insertToWishlist(item);

    //clear cache to see the wishlist updated with the new added item
    revalidatePath("/wishlist");
  }
}

export async function deleteWishlistItemAction(id) {
  //Delete item from wishlist
  await deleteWishlistItem(id);
  //clear cache to see the wishlist updated
  revalidatePath("/wishlist");
}
