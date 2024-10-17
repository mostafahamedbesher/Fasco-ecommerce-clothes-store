import CartListCheckout from "../components/CartListCheckout";
import CheckoutMain from "../components/CheckoutMain";
import FormDelivery from "../components/FormDelivery";
import Heading from "../components/Heading";
import PaymentProvider from "../components/PaymentProvider";
import { auth } from "../lib/auth";
import { getCountries } from "../lib/data-service";

async function page() {
  const data = await getCountries();
  const countries = data.map((country) => country.name);

  const shippingPrice = 40;

  const session = await auth();
  const userId = session?.user?.userId;

  return (
    <div>
      <Heading>Checkout</Heading>

      <CheckoutMain>
        <PaymentProvider shippingPrice={shippingPrice}>
          <FormDelivery
            countries={countries}
            shippingPrice={shippingPrice}
            userId={userId}
          />
        </PaymentProvider>

        <div className="bg-primary-2 px-10 py-8 max-xl:px-8 max-lg:px-6 max-sm:px-3">
          <CartListCheckout shippingPrice={shippingPrice} />
        </div>
      </CheckoutMain>
    </div>
  );
}

export default page;
