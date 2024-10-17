import Filters from "../components/Filters";
import Products from "../components/Products";
import { getAllColors, getAllProducts } from "../lib/data-service";
import { GridViewProvider } from "../contexts/gridViewContext";
// import ProductsList from "../components/ProductsList";
import { MobileMenuProvider } from "../contexts/mobileMenuContext";
import ButtonMenu from "../components/ButtonMenu";
import { HiOutlineFunnel } from "react-icons/hi2";
// import GridType from "../components/GridType";

export const revalidate = 0;

async function page({ searchParams }) {
  const { data: productsData, count } = await getAllProducts();
  // console.log(productsData);
  const range = searchParams?.range ?? 6;

  const allProductsColors = await getAllColors();
  // console.log("allProductsColors", allProductsColors);

  const filterSize = searchParams?.size ?? "all";
  const filterColor = searchParams.color ?? "all";
  const filterCategory = searchParams.category ?? "all";
  const filterPrice = searchParams.priceMax ?? "all";

  return (
    <div className="grid grid-cols-[1fr_3fr] gap-10 max-xl:gap-6 max-lg:grid-cols-1">
      <MobileMenuProvider>
        <Filters
          productsData={productsData}
          allProductsColors={allProductsColors}
        />

        {/* will appear only in mobile devices */}
        <ButtonMenu>
          <div className="flex items-center gap-1">
            <HiOutlineFunnel className="max-lg:h-7 max-lg:w-7 max-md:h-6 max-md:w-6" />
            <p className="font-medium text-secondary max-lg:text-lg max-md:text-base">
              Filters
            </p>
          </div>
        </ButtonMenu>
      </MobileMenuProvider>

      <GridViewProvider>
        <Products
          filterSize={filterSize}
          filterColor={filterColor}
          filterCategory={filterCategory}
          filterPrice={filterPrice}
          productsData={productsData}
          count={count}
          range={range}
        />
      </GridViewProvider>
    </div>
  );
}

export default page;
