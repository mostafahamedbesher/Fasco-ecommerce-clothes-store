import { supabase } from "./supabase";

/////////////
// GET

export async function getAllProducts() {
  const { data, error, count } = await supabase
    .from("products")
    .select("*", { count: "exact" });

  if (error) {
    throw new Error("Products couldnot be loaded!!");
  }

  return { data, error, count };
}

export async function getProduct(id) {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", id)
    .single();

  // For testing
  // await new Promise((res) => setTimeout(res, 1000));

  if (error) {
    throw new Error("Product details couldnot be loaded!!");
  }

  return data;
}

export async function getAllColors() {
  let { data, error } = await supabase.from("productVariants").select("color");

  if (error) {
    throw new Error("Product Colors couldnot be loaded!!");
  }

  return data;
}

export async function getProductColor(productId) {
  let { data, error } = await supabase
    .from("productVariants")
    .select("color")
    .eq("productId", productId);

  if (error) {
    throw new Error("Product Colors couldnot be loaded!!");
  }

  return data;
}

export async function getAllProductVariants(productId) {
  const { data, error } = await supabase
    .from("productVariants")
    .select("*")
    .eq("productId", productId);

  if (error) {
    throw new Error("All Product Variants couldnot be loaded!!");
  }

  return data;
}

export async function getProductVariants(variantId) {
  const { data, error } = await supabase
    .from("productVariants")
    .select("*")
    .eq("id", variantId);

  if (error) {
    throw new Error("Product Variants couldnot be loaded!!");
  }

  return data;
}

export async function getCountries() {
  try {
    const res = await fetch("https://restcountries.com/v2/all?fields=name");
    const countries = await res.json();
    return countries;
  } catch {
    throw new Error("Could not fetch countries");
  }
}

export async function getUser(email) {
  const { data } = await supabase
    .from("users")
    .select("*")
    .eq("email", email)
    .single();

  return data;
}

export async function getOrders(userId) {
  const { data: orders, error } = await supabase
    .from("orders")
    .select("*")
    .eq("userId", userId);

  if (error) {
    throw new Error("Orders couldnot be loaded!!");
  }

  return orders;
}

export async function getOrderItems(orderId) {
  const { data: orderItems, error } = await supabase
    .from("orderItems")
    .select("*")
    .eq("orderId", orderId);

  if (error) {
    throw new Error("Order Items couldnot be loaded!!");
  }

  return orderItems;
}

export async function getProductImages(productId) {
  const { data: productImages, error } = await supabase
    .from("productVariants")
    .select("images")
    .eq("id", productId);

  if (error) {
    throw new Error("Product image couldnot be loaded!!");
  }

  return productImages;
}

// export async function getWishlistProducts() {
//   const { data: wishlist, error } = await supabase.from("wishlist").select("*");

//   if (error) {
//     throw new Error("Wishlist Products couldnot be loaded!!");
//   }

//   return wishlist;
// }

export async function getItemsFromWishlist(productId) {
  const { data, error } = await supabase
    .from("wishlist")
    .select("*")
    .eq("productId", productId);

  if (error) {
    throw new Error("wishlist item couldnot be loaded!!");
  }

  return data;
}

export async function getItemsWishlistbyUserId(userId) {
  const { data, error } = await supabase
    .from("wishlist")
    .select("*")
    .eq("userId", userId);

  if (error) {
    throw new Error("wishlist item couldnot be loaded!!");
  }

  return data;
}

export async function getAllVariants() {
  const { data, error } = await supabase.from("productVariants").select("*");

  if (error) {
    throw new Error("all variants couldnot be loaded!!");
  }

  return data;
}

/////////////
// CREATE
export async function createOrder(orderData) {
  const { data, error } = await supabase
    .from("orders")
    .insert([orderData])
    .select();

  if (error) {
    throw new Error("Order couldnot be created!!");
  }

  return data;
}

export async function addOrderItems(orderItems) {
  const { data, error } = await supabase
    .from("orderItems")
    .insert(orderItems)
    .select();

  if (error) {
    throw new Error("Order Items couldnot be Added!!");
  }

  return data;
}

export async function createUser(user) {
  const { data, error } = await supabase.from("users").insert([user]).select();

  if (error) {
    throw new Error("User couldnot be Created!!");
  }

  return data;
}

export async function insertToWishlist(item) {
  const { data, error } = await supabase
    .from("wishlist")
    .insert([item])
    .select();

  if (error) {
    throw new Error("wishlist item couldnot be created!!");
  }

  return data;
}

/////////////
// UPDATE
export async function updateProductStokeQuantity(id, newQuantity) {
  const { data, error } = await supabase
    .from("productVariants")
    .update({ stokeQuantity: newQuantity })
    .eq("id", id)
    .select();

  if (error) {
    throw new Error("Product Stoke Quantity couldnot be Updated!!");
  }

  return data;
}

export async function updateOrderStatus(id, status = "canceled") {
  const { data, error } = await supabase
    .from("orders")
    .update({ status: status })
    .eq("id", id)
    .select();

  if (error) {
    throw new Error("order status couldnot be Updated!!");
  }

  return data;
}

/////////////
// Delete
export async function DeleteOrderItems(orderId) {
  const { error } = await supabase
    .from("orderItems")
    .delete()
    .eq("orderId", orderId);

  if (error) {
    throw new Error("order items couldnot be Deleted!!");
  }
}

export async function deleteWishlistItem(id) {
  const { error } = await supabase.from("wishlist").delete().eq("id", id);

  if (error) {
    throw new Error("wishlist item couldnot be Deleted!!");
  }
}
