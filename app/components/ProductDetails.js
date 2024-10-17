import { auth } from "../lib/auth";
import {
  getItemsWishlistbyUserId,
  getProductColor,
  getProductVariants,
  getWishlistProducts,
} from "../lib/data-service";
import FormProductDetails from "./FormProductDetails";
import LabelDiscount from "./LabelDiscount";
import RatingStars from "./RatingStars";
import { HiOutlineFire } from "react-icons/hi2";

async function ProductDetails({
  product,
  sizesAvailable,
  ProductvariantSize,
  ProductvariantColor,
  matchedProduct,
}) {
  const { id, title, description, discount, ratingVal, ratingNo, available } =
    product;

  const productColors = await getProductColor(id);
  // console.log(productColors);
  const colors = productColors
    .map((item) => item.color)
    .filter((value, index, newArr) => newArr.indexOf(value) === index);

  // console.log(colors);

  const [variant] = await getProductVariants(matchedProduct.id);
  const { stokeQuantity } = variant;

  //get wishlist for specific user
  const session = await auth();
  let wishlist;

  if (session) {
    wishlist = await getItemsWishlistbyUserId(session?.user.userId);
  }
  // console.log(wishlist);

  return (
    <div className="flex flex-col gap-5">
      <div>
        <h3 className="mb-2 text-2xl font-bold text-black max-sm:text-xl">
          {title}
        </h3>
        <div className="flex items-center gap-2">
          <RatingStars ratingVal={ratingVal} />
          <span className="text-sm font-medium">{`(${ratingNo})`}</span>
        </div>
      </div>

      <p className="text-lg font-semibold text-black">
        {(matchedProduct.price - discount).toFixed(2)}${" "}
        {discount !== 0 && (
          <>
            <s className="ml-2 text-sm font-normal text-secondary-gray-0">
              {matchedProduct.price.toFixed(2)}$
            </s>
            <LabelDiscount discount={discount} price={matchedProduct.price} />
          </>
        )}
      </p>

      {stokeQuantity > 0 && stokeQuantity <= 5 && (
        <div className="flex items-center gap-2 rounded-sm bg-primary-2 p-2 max-sm-l:gap-1">
          <HiOutlineFire className="h-8 w-8 text-red-500 max-sm-l:h-7 max-sm-l:w-7" />
          <span className="text-sm text-red-500 max-sm-l:text-xs">
            Hurry! Only {stokeQuantity} Products are available
          </span>
        </div>
      )}

      <p className="text-sm text-secondary-gray-0">{description}</p>

      <FormProductDetails
        product={product}
        colors={colors}
        sizesAvailable={sizesAvailable}
        ProductvariantSize={ProductvariantSize}
        ProductvariantColor={ProductvariantColor}
        matchedProduct={matchedProduct}
        wishlist={wishlist}
        session={session}
      />
    </div>
  );
}

export default ProductDetails;
