"use client";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useCartTotalPrice } from "../hooks/useCartTotalPrice";

// Initialize Stripe with your publishable key
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

function PaymentProvider({ children, shippingPrice }) {
  const totalPrice = useCartTotalPrice(shippingPrice);

  return (
    <Elements
      stripe={stripePromise}
      options={{
        mode: "payment",
        amount: Math.round(totalPrice * 100), // in cents
        currency: "usd",
        appearance: {
          theme: "stripe", // Optional base theme
          variables: {
            colorPrimary: "#000", // Color for the border when focused
          },
          rules: {
            ".Input--focus": {
              borderColor: "#000",
              borderWidth: "1px",
              borderStyle: "solid",
            },
          },
        },
      }}
    >
      {children}
    </Elements>
  );
}

export default PaymentProvider;
