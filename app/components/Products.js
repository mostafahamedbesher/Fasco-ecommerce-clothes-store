// import { Suspense } from "react";
import GridType from "./GridType";
// import Spinner from "./Spinner";
// import { GridViewProvider } from "../contexts/gridViewContext";
import ProductsBox from "./ProductsBox";
import ProductNotFound from "./ProductNotFound";
import ProductsList from "./ProductsList";
import ButtonPagination from "./ButtonPagination";
import { filteredProducts, getUniqueItems } from "@/utils/utils";
import { getAllSettings } from "../lib/data-service";

async function Products({
  filterSize,
  filterColor,
  filterCategory,
  filterPrice,
  productsData,
  allVariants,
  count,
  range,
  itemsPerPage,
}) {
  // get settings to get number of items per page (pagination number value)
  const { data } = await getAllSettings();
  const { showOutofStockProducts } = data;

  let displayedProducts = productsData;

  //size filter
  if (filterSize === "all") {
    displayedProducts = productsData;
  } else {
    // displayedProducts = productsData.filter((product) =>
    //   product.sizes?.includes(filterSize),
    // );

    displayedProducts = filteredProducts(
      productsData,
      allVariants,
      filterSize,
      "size",
    );
  }

  //color filter
  if (filterColor !== "all") {
    // displayedProducts = displayedProducts.filter((product) =>
    //   product.colors?.includes(filterColor),
    // );

    displayedProducts = filteredProducts(
      displayedProducts,
      allVariants,
      filterColor,
      "color",
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

  // donot show out of stock products if (showOutofStockProducts) is false
  if (!showOutofStockProducts) {
    displayedProducts = displayedProducts.filter(
      (product) => product.available === true,
    );
  }

  if (displayedProducts?.length === 0) return <ProductNotFound />;

  return (
    <section>
      <GridType />

      <ProductsBox
        displayedProductsLength={displayedProducts.length}
        itemsPerPage={itemsPerPage}
      >
        <ProductsList displayedProducts={displayedProducts} range={range} />
      </ProductsBox>

      {displayedProducts.length >= itemsPerPage &&
        range < displayedProducts.length && (
          <div className="mt-14 w-full">
            <ButtonPagination
              count={count}
              displayedProductsLength={displayedProducts.length}
              itemsPerPage={itemsPerPage}
            />
          </div>
        )}
    </section>
  );
}

export default Products;
