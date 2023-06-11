"use client";
import { Header, HeroScreen, ProductList } from "@/containers";
import { getCartItems } from "@/store";
import { MyContext } from "@/store/MyContext";
import { useContext, useEffect } from "react";
import "tailwindcss/tailwind.css";

const Home = () => {
  const { state, dispatch } = useContext<any>(MyContext);
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
      <Header />
      <HeroScreen />
      <ProductList />
    </main>
  );
};

export default Home;
