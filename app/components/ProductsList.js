import Product from "./Product";

function ProductsList({ displayedProducts, range }) {
  return (
    <>
      {displayedProducts?.slice(0, range).map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </>
  );
}

export default ProductsList;
