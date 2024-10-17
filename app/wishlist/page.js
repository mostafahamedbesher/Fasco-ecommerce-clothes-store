import Heading from "../components/Heading";
import WishlistProductCard from "../components/WishlistProductCard";
import { auth } from "../lib/auth";
import { getItemsWishlistbyUserId } from "../lib/data-service";

export const revalidate = 0;

async function page() {
  const session = await auth();
  const wishlist = await getItemsWishlistbyUserId(session?.user.userId);
  // console.log(wishlist);

  return (
    <div>
      <Heading>WishList</Heading>

      {wishlist.length !== 0 ? (
        <ul className="max-sm-l:grid-cols-1 grid grid-cols-5 gap-x-10 gap-y-5 max-xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2">
          {wishlist.map((item) => (
            <WishlistProductCard key={item.id} item={item} />
          ))}
        </ul>
      ) : (
        <div className="mt-28 text-center text-2xl font-semibold">
          Wishlist is Empty
        </div>
      )}
    </div>
  );
}

export default page;
