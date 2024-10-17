import CartEmpty from "../components/CartEmpty";
import CartList from "../components/CartList";
import Heading from "../components/Heading";

function page() {
  return (
    <div>
      <Heading>Shopping Cart</Heading>

      <CartList CartEmpty={<CartEmpty />} />
    </div>
  );
}

export default page;
