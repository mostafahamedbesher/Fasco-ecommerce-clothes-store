"use client";

import { getUniqueItems } from "@/utils/utils";
import { useMobileMenu } from "../contexts/mobileMenuContext";
import ButtonCloseMenu from "./ButtonCloseMenu";
import ButtonCollectionFilter from "./ButtonCollectionFilter";
import ButtonPriceFilter from "./ButtonPriceFilter";
import ButtonResetFilters from "./ButtonResetFilters";
import Color from "./Color";
import Filter from "./Filter";
import Size from "./Size";

function Filters({ allProductsColors, productsData }) {
  const { isOpenMenu, setIsOpenMenu } = useMobileMenu();

  //get all available colors(unique only)
  const colorsData = getUniqueItems(
    allProductsColors.map((item) => item.color),
  );

  // unique only
  const categoriesData = getUniqueItems(
    productsData.map((item) => item.category),
  );

  const sizesData = ["sm", "m", "l", "xl", "2xl"];

  const maxPrice = productsData
    .map((item) => item.price)
    .reduce((acc, cur) => {
      if (cur > acc) {
        acc = cur;
      }

      return acc;
    });

  return (
    <aside
      className={`mobile-overlay-list max-lg:overflow-scroll ${isOpenMenu ? "max-lg:menu-slideIn max-lg:block" : "max-lg:pointer-events-none max-lg:invisible max-lg:translate-x-[-100%] max-lg:opacity-0 max-lg:transition-all max-lg:duration-500"}`}
    >
      {/* will appear only in mobile devices */}
      <div className="hidden items-center justify-between max-lg:mb-4 max-lg:flex">
        <h2 className="text-2xl font-semibold tracking-wider">Filters</h2>
        <ButtonCloseMenu setIsOpenMenu={setIsOpenMenu} />
      </div>

      <div className="mb-14 flex items-center justify-between">
        <h2 className="text-2xl font-semibold tracking-wider max-lg:hidden">
          Filters
        </h2>
        <ButtonResetFilters />
      </div>

      {/* Size filter Box */}
      <Filter
        heading="Sizes"
        data={sizesData}
        render={(size, i) => (
          <li key={i}>
            <Size size={size}>{size}</Size>
          </li>
        )}
      />

      {/* Color filter Box */}
      <Filter
        heading="Colors"
        data={colorsData}
        render={(color) => (
          <li key={color}>
            <Color color={color} type="large" height="2.3rem" width="2.3rem">
              {color}
            </Color>
          </li>
        )}
      />

      {/* Prices filter Box */}
      <Filter heading="Prices" direction="vertical">
        <ButtonPriceFilter priceMax={100}>{"$0-$100"}</ButtonPriceFilter>
        <ButtonPriceFilter priceMax={200}>{"$100-$200"}</ButtonPriceFilter>
        <ButtonPriceFilter priceMax={300}>{"$200-$300"}</ButtonPriceFilter>
        <ButtonPriceFilter priceMax={400}>{"$300-$400"}</ButtonPriceFilter>
        <ButtonPriceFilter priceMax={maxPrice}>{"$400+"}</ButtonPriceFilter>
      </Filter>

      {/* Categories filter Box */}
      <Filter
        heading="Categories"
        direction="vertical"
        data={categoriesData}
        render={(category) => (
          <li key={category}>
            <ButtonCollectionFilter category={category}>
              {category}
            </ButtonCollectionFilter>
          </li>
        )}
      />
    </aside>
  );
}

export default Filters;
