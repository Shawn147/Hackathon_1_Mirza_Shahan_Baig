"use client";
import { Header, HeroScreen, ProductList } from "@/containers";
import Sidebar from "@/containers/Sidebar";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
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
      <Toaster position="top-right" reverseOrder={false} />
    </main>
  );
};

export default Home;
