// import { Suspense } from "react";
import GridType from "./GridType";
// import Spinner from "./Spinner";
// import { GridViewProvider } from "../contexts/gridViewContext";
import ProductsBox from "./ProductsBox";
import ProductNotFound from "./ProductNotFound";
import ProductsList from "./ProductsList";
import ButtonPagination from "./ButtonPagination";

function Products({
  filterSize,
  filterColor,
  filterCategory,
  filterPrice,
  productsData,
  count,
  range,
}) {
  let displayedProducts = productsData;
  //size filter
  if (filterSize === "all") {
    displayedProducts = productsData;
  } else {
    displayedProducts = productsData.filter((product) =>
      product.sizes.includes(filterSize),
    );
  }

  //color filter
  if (filterColor !== "all") {
    displayedProducts = displayedProducts.filter((product) =>
      product.colors.includes(filterColor),
    );
  }

  //category filter
  if (filterCategory !== "all") {
    displayedProducts = displayedProducts.filter(
      (product) => product.category === filterCategory,
    );
  }

  //Price filter
  if (filterPrice !== "all") {
    displayedProducts = displayedProducts.filter(
      (product) =>
        product.price >= filterPrice - 100 && product.price <= filterPrice,
    );
  }

  // console.log("displayedProducts.length = ", displayedProducts.length);
  // console.log("range = ", range);

  if (displayedProducts?.length === 0) return <ProductNotFound />;

  return (
    <section>
      <GridType />

      <ProductsBox displayedProductsLength={displayedProducts.length}>
        <ProductsList displayedProducts={displayedProducts} range={range} />
      </ProductsBox>

      {displayedProducts.length >= 6 && range < displayedProducts.length && (
        <div className="mt-14 w-full">
          <ButtonPagination
            count={count}
            displayedProductsLength={displayedProducts.length}
          />
        </div>
      )}
    </section>
  );
}

export default Products;
