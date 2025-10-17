"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import formSchema from "../lib/schemaValidation";
import { submitOrder } from "../lib/actions";
import Button from "./Button";
import Heading from "./Heading";
import Input from "./Input";
import { useCart } from "../contexts/cartContext";
import { useEffect, useState } from "react";

import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import SpinnerMini from "./SpinnerMini";
import { useCartTotalPrice } from "../hooks/useCartTotalPrice";
import toast from "react-hot-toast";
import InputErrorText from "./InputErrorText";
import { getUTCDateFromLocal } from "@/utils/utils";

function FormDelivery({ countries, shippingPrice, userId }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const { cart, dispatch } = useCart();
  const totalPrice = useCartTotalPrice(shippingPrice);

  //payment
  const stripe = useStripe();
  const elements = useElements();

  //payment states
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [clientSecret, setClientSecret] = useState("");
  const [isPaymentFailed, setIsPaymentFailed] = useState(false);

  useEffect(() => {
    // Fetch the client secret from the API route when the component mounts
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: Math.round(totalPrice * 100) }), // Amount in cents
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  async function onSubmit(formData) {
    /////////handle stripe payment//////////
    setIsProcessingPayment(true);

    if (!stripe || !elements) {
      return;
    }

    const { error: submitError } = await elements.submit();
    if (submitError) {
      setIsProcessingPayment(false);
      return;
    }
    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: "http://www.localhost:3000",
      },
      redirect: "if_required", //to prevent auto redirect
    });

    if (error) {
      // This point is only reached if there's an immediate error when
      // confirming the payment. Show the error to your customer (for example, payment details incomplete)
      console.error(error.message);
      setIsPaymentFailed(true);
      return;
    } else {
      // The payment UI automatically closes with a success animation.
      // Your customer is redirected to your `return_url`.
      // alert("Payment successful!");
      setIsPaymentFailed(false);
    }

    setIsProcessingPayment(false);

    /////////handle creating order using submitted form data/////////
    const orderData = {
      ...formData,
      userId,
      status: "pending",
      shippingPrice: shippingPrice.toFixed(2),
      totalPrice: totalPrice,
      isPaid: true,
      created_at: getUTCDateFromLocal(),
    };

    //create order using server action
    await submitOrder(orderData, cart);

    //toast notification
    toast.success("Order Completed Successfully");

    //clear cart
    dispatch({ type: "cart/clear" });
  }

  const paymentElementOptions = {
    style: {
      base: {
        color: "#000",
        fontFamily: "Poppins, ui-sans-serif, system-ui, -apple-system", // Tailwind default font
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#8a8a8a",
        },
      },
      invalid: {
        color: "#ef4444", // Tailwind 'red-500'
        iconColor: "#ef4444", // Tailwind 'red-500'
      },
    },
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 px-6 max-md:order-2 max-md:px-0"
    >
      <Heading type="headingBox">Delivery</Heading>

      <div>
        <select
          className="w-[100%] rounded-sm border-2 border-solid border-secondary-gray-0 px-3 py-3 text-sm text-black focus:border-secondary max-lg:text-xs"
          name="country"
          {...register("country")}
          disabled={isSubmitting || isProcessingPayment}
        >
          <option className="text-sm" value="">
            Country / Region
          </option>
          {countries.map((country) => (
            <option
              className="text-sm text-black"
              key={country}
              value={country}
            >
              {country}
            </option>
          ))}
        </select>
        {errors.country && (
          <InputErrorText>{errors.country.message}</InputErrorText>
        )}
      </div>

      <div className="flex items-start gap-4 max-sm-l:block max-sm-l:space-y-4">
        <div className="w-[50%] max-sm-l:w-full">
          <Input
            type="text"
            placeholder="First Name"
            width="100%"
            register={register}
            name="firstName"
            disabled={isSubmitting || isProcessingPayment}
          />
          {errors?.firstName && (
            <InputErrorText>{errors.firstName?.message}</InputErrorText>
          )}
        </div>

        <div className="w-[50%] max-sm-l:w-full">
          <Input
            type="text"
            placeholder="Last Name"
            width="100%"
            register={register}
            name="lastName"
            disabled={isSubmitting || isProcessingPayment}
          />
          {errors?.lastName && (
            <InputErrorText>{errors.lastName?.message}</InputErrorText>
          )}
        </div>
      </div>

      <div>
        <Input
          type="text"
          placeholder="Address"
          width="100%"
          register={register}
          name="address"
          disabled={isSubmitting || isProcessingPayment}
        />
        {errors?.address && (
          <InputErrorText> {errors.address?.message}</InputErrorText>
        )}
      </div>

      <div className="flex items-start gap-4 max-sm-l:block max-sm-l:space-y-4">
        <div className="w-[50%] max-sm-l:w-full">
          <Input
            type="text"
            placeholder="City"
            width="100%"
            register={register}
            name="city"
            disabled={isSubmitting || isProcessingPayment}
          />
          {errors?.city && (
            <InputErrorText>{errors.city?.message}</InputErrorText>
          )}
        </div>

        <div className="w-[50%] max-sm-l:w-full">
          <Input
            type="text"
            placeholder="Postal Code"
            width="100%"
            register={register}
            name="postalCode"
            disabled={isSubmitting || isProcessingPayment}
          />

          {errors?.postalCode && (
            <InputErrorText>{errors.postalCode?.message}</InputErrorText>
          )}
        </div>
      </div>

      <div>
        <Input
          type="tel"
          placeholder="Phone Number"
          width="100%"
          register={register}
          name="phoneNumber"
          disabled={isSubmitting || isProcessingPayment}
        />
        {errors?.phoneNumber && (
          <InputErrorText>{errors.phoneNumber?.message}</InputErrorText>
        )}
      </div>

      {/* payment */}
      <Heading type="headingBox">Payment</Heading>

      {/* stripe form element */}
      {clientSecret ? (
        <PaymentElement options={paymentElementOptions} />
      ) : (
        <SpinnerMini />
      )}

      <div className="mt-6 w-full">
        <Button width="100%" disabled={isSubmitting || isProcessingPayment}>
          {isSubmitting ? "processing..." : "Pay Now"}
        </Button>
      </div>

      {isPaymentFailed && (
        <div className="text-center text-lg text-red-600 max-lg:text-xs">
          Payment Failed!
        </div>
      )}
    </form>
  );
}

export default FormDelivery;
