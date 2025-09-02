import ImagePreview from "@/app/components/ImagePreview";
import ProductDetails from "@/app/components/ProductDetails";
import {
  getProduct,
  getAllProductVariants,
  getAllProductImages,
} from "@/app/lib/data-service";
import { sizesSchema } from "@/utils/constants";
import { sortByReferenceArray } from "@/utils/utils";

//clear cache
export const revalidate = 0;

async function page({ params, searchParams }) {
  //get main product data
  const product = await getProduct(params.productId);

  //fetch all variants of this product
  const allProductVariants = await getAllProductVariants(params.productId);

  // fetch product images from varinatImages table
  const allMainProductImages = await getAllProductImages(params.productId);

  //get current product colors & sizes (unique only ,so no duplicates)
  const colors = allProductVariants
    .map((item) => item.color)
    .filter((value, index, newArr) => newArr.indexOf(value) === index);

  //read color variants selected from the url
  const ProductvariantColor = searchParams?.colorVariant ?? colors.at(0);

  //get sizes for current selected color
  const sizes = allProductVariants
    .filter((item) => item.color === ProductvariantColor)
    .map((item) => item.size);

  /////sort sizes from smallest size("sm") to largest ("2xl")/////
  const sortedSizes = sortByReferenceArray(sizes, sizesSchema);

  //read size variants selected from the url
  let ProductvariantSize;

  // to check if the sizeVariant searchParam is exist or also if exist but this size not included in the different color
  if (!searchParams?.sizeVariant) {
    ProductvariantSize = sortedSizes.at(0);
  } else {
    // help when the size searchParam was stale(old) from previous selected color and the color changes
    if (!sortedSizes.includes(searchParams.sizeVariant)) {
      ProductvariantSize = sortedSizes.at(0);
    } else {
      ProductvariantSize = searchParams.sizeVariant;
    }
  }

  //get matched(size&color) product variant
  const [matchedProduct] = allProductVariants.filter(
    (variant) =>
      variant.size === ProductvariantSize &&
      variant.color === ProductvariantColor,
  );

  // get current product images according to current selected(matched) color
  const { images } =
    allMainProductImages.find((item) => item.color === matchedProduct.color) ||
    [];

  return (
    <div className="grid grid-cols-2 gap-12 max-xl:gap-8 max-lg:gap-6 max-md:grid-cols-1">
      <ImagePreview images={images} />
      <ProductDetails
        product={product}
        sizesAvailable={sortedSizes}
        ProductvariantSize={ProductvariantSize}
        ProductvariantColor={ProductvariantColor}
        matchedProduct={matchedProduct}
      />
    </div>
  );
}

export default page;
