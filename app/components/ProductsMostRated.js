import { getAllProducts } from "../lib/data-service";
import ContainerBox from "./ContainerBox";
import Heading from "./Heading";
import MostRatedCard from "./MostRatedCard";

async function ProductsMostRated() {
  const { data: products } = await getAllProducts();
  const mostRatedProducts = products.filter(
    (product) => product.ratingVal >= 4,
  );

  return (
    <ContainerBox>
      <Heading>Most Rated</Heading>

      <ul className="mt-24 grid grid-cols-3 gap-24 max-xl:grid-cols-2 max-lg:gap-8 max-md:gap-6 max-sm:grid-cols-1">
        {mostRatedProducts.slice(0, 6).map((product) => (
          <MostRatedCard key={product.id} product={product} />
        ))}
      </ul>
    </ContainerBox>
  );
}

export default ProductsMostRated;
