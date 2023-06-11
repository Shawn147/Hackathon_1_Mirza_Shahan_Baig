"use client";

import { deleteCartEntry } from "@/store";
import { MyContext } from "@/store/MyContext";
import { CardElement } from "@stripe/react-stripe-js";
import { FormEvent, useContext, useState } from "react";
import { toast } from "react-hot-toast";

const CartSummary = () => {
  const [isComplete, setIsComplete] = useState(false);
  const { state, dispatch } = useContext<any>(MyContext);
  const subTotal = state.cartItems.reduce(
    (a: any, b: any) => parseInt(a) + parseInt(b.price),
    0
  );
  const tax = parseInt((subTotal / 100) * 2.5 + "");
  const total = subTotal + tax + 15 - 20;
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // Create a Checkout Session.
    dispatch({ type: "ISLOADING", payload: true });
    fetch("/api/cart/payment", {
      method: "POST",
      body: JSON.stringify({ total, product: state.cartItems[0]?.productid }),
    })
      .then((checkoutSession) => {
        return checkoutSession.json();
      })
      .then(({ data, message }) => {
        toast.success("Payment Successful!");
        toast.success("Thank you for your payment.");
        toast.success("Your Checkout ID is: " + data.clientSecret);
        return deleteCartEntry("truncate");
      })
      .then((data) => {
        dispatch({ type: "CART", payload: [] });
      })
      .catch((err) => {
        console.log("Catch Error", err);
      })
      .finally(() => {
        dispatch({ type: "ISLOADING", payload: false });
      });
  };
  const sumStyle =
    !isComplete || !state.cartItems.length
      ? "bg-gray-300 cursor-not-allowed text-white w-full h-12 rounded"
      : "bg-primary hover:bg-primaryLight text-white w-full h-12 rounded";
  return (
    <div className="w-full mt-12 md:mt-0 ml-0 md:ml-8 md:w-2/6">
      <CardElement
        options={{
          hidePostalCode: true,
          style: {
            base: {
              fontSize: "18px",
              padding: "18px",
            },
          },
        }}
        onChange={(c) => {
          if (c.complete) {
            setIsComplete(true);
          } else if (!c.complete && isComplete) {
            setIsComplete(false);
          }
        }}
      />
      <div className="w-full h-96  bg-white text-black shadow-lg rounded-lg p-4">
        <h2 className="text-xl font-bold mb-4">Cart Summary</h2>
        <div className="flex justify-between mb-2">
          <span>Subtotal:</span>
          <span>${subTotal}.00</span>
        </div>

        <div className="flex justify-between mb-2">
          <span>Tax:</span>
          <span>${tax}.00</span>
        </div>

        <div className="flex justify-between mb-2">
          <span>Shipping:</span>
          <span>$15.00</span>
        </div>

        <div className="flex justify-between mb-2">
          <span>Discount:</span>
          <span>-$20.00</span>
        </div>

        <hr className="my-4" />

        <div className="flex justify-between">
          <span className="font-bold">Total:</span>
          <span className="font-bold">${total}.00</span>
        </div>

        <div className="mt-6 flex justify-center">
          <button
            disabled={!isComplete || !state.cartItems.length}
            onClick={handleSubmit}
            className={sumStyle}
          >
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
