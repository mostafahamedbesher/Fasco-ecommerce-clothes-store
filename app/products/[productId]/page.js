import ImagePreview from "@/app/components/ImagePreview";
import ProductDetails from "@/app/components/ProductDetails";
import { getProduct, getAllProductVariants } from "@/app/lib/data-service";

//clear cache
export const revalidate = 0;

async function page({ params, searchParams }) {
  console.log("searchParams", searchParams);
  //get main product data
  const product = await getProduct(params.productId);

  //fetch all variants of this product
  const allProductVariants = await getAllProductVariants(params.productId);

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

  // const sizes = allProductVariants
  //   .map((item) => item.size)
  //   .filter((value, index, newArr) => newArr.indexOf(value) === index);

  /////sort sizes from smallest size("sm") to largest ("2xl")/////

  // Define the correct order
  const order = ["sm", "m", "l", "xl", "2xl"];

  // Use sort with a custom comparator
  const sortedSizes = sizes
    .slice()
    .sort((a, b) => order.indexOf(a) - order.indexOf(b));

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

  // //read size and color variants selected from the url
  // const ProductvariantSize = searchParams?.sizeVariant ?? sortedSizes.at(0);
  // const ProductvariantColor = searchParams?.colorVariant ?? colors.at(0);

  //get matched(size&color) product variant
  const [matchedProduct] = allProductVariants.filter(
    (variant) =>
      variant.size === ProductvariantSize &&
      variant.color === ProductvariantColor,
  );

  return (
    <div className="grid grid-cols-2 gap-12 max-xl:gap-8 max-lg:gap-6 max-md:grid-cols-1">
      <ImagePreview matchedProduct={matchedProduct} />
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
