"use client";
import { Header, HeroScreen, ProductList } from "@/containers";
import Sidebar from "@/containers/Sidebar";
import { getCartItems } from "@/store";
import { MyContext } from "@/store/MyContext";
import { useContext, useEffect, useState } from "react";
import "tailwindcss/tailwind.css";

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <main className="">
      <Header handleToggleSidebar={handleToggleSidebar} />
      {isSidebarOpen && <Sidebar />}

      <HeroScreen />
      <ProductList />
    </main>
  );
};

export default Home;
