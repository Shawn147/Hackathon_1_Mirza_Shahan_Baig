"use client";
import { Header, HeroScreen, ProductList } from "@/containers";
import { getCartItems } from "@/store";
import { MyContext } from "@/store/MyContext";
import { useContext, useEffect } from "react";
import "tailwindcss/tailwind.css";

const Home = () => {
  return (
    <main className="">
      <Header />
      <HeroScreen />
      <ProductList />
    </main>
  );
};

export default Home;
