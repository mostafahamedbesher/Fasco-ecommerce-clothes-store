import Heading from "../components/Heading";
import Product from "../components/Product";
import { getAllProducts } from "../lib/data-service";

//clear cache
export const revalidate = 0;

async function page() {
  const { data: products } = await getAllProducts();

  const filteredProducts = products.filter((product) => product.discount > 0);

  return (
    <div>
      <Heading>DEALS</Heading>
      <div className="max-sm-l:grid-cols-1 mt-28 grid grid-cols-5 gap-8 max-xl:grid-cols-4 max-lg:grid-cols-3 max-sm:grid-cols-2 max-sm:gap-6">
        {filteredProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default page;
