"use client";
import { CartCont, Header } from "@/containers";
import { getCartItems } from "@/store";
import { MyContext } from "@/store/MyContext";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useContext, useEffect } from "react";
import "tailwindcss/tailwind.css";
const str = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const Cart = () => {
  const { state, dispatch } = useContext(MyContext);
  useEffect(() => {
    try {
      async function getData() {
        dispatch({ type: "ISLOADING", payload: true });
        const data = await getCartItems();
        dispatch({ type: "CART", payload: data });
      }
      getData();
    } finally {
      dispatch({ type: "ISLOADING", payload: false });
    }
  }, []);
  return (
    <main className="">
      <Elements stripe={str}>
        <Header />
        <CartCont />
      </Elements>
    </main>
  );
};
export default Cart;
