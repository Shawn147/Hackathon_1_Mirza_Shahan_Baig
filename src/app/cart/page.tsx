"use client";
import { CartCont, Header } from "@/containers";
import Sidebar from "@/containers/Sidebar";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";
import "tailwindcss/tailwind.css";
const str = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY + "");

const Cart = () => {
  return (
    <main className="">
      <Elements stripe={str}>
        <Header />
      </Elements>
    </main>
  );
};
export default Cart;
