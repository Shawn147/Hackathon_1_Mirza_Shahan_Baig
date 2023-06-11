"use client";
import { CartCont, Header } from "@/containers";
import Sidebar from "@/containers/Sidebar";
import { getCartItems } from "@/store";
import { MyContext } from "@/store/MyContext";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useContext, useEffect, useState } from "react";
import "tailwindcss/tailwind.css";
const str = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY + "");

const Cart = () => {
  const { state, dispatch } = useContext<any>(MyContext);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    async function getData() {
      dispatch({ type: "ISLOADING", payload: true });
      const data = await getCartItems();
      dispatch({ type: "CART", payload: data });
    }
    try {
      getData();
    } finally {
      dispatch({ type: "ISLOADING", payload: false });
    }
  }, []);
  return (
    <main className="">
      <Elements stripe={str}>
        <Header handleToggleSidebar={handleToggleSidebar} />
        {isSidebarOpen ? <Sidebar /> : <CartCont />}
      </Elements>
    </main>
  );
};
export default Cart;
