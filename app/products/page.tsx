"use client";
import { Header, ProductList } from "@/containers";
import Sidebar from "@/containers/Sidebar";
import { useState } from "react";
import "tailwindcss/tailwind.css";

const Page = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  console.log("manhat");
  return (
    <main className="">
      <Header handleToggleSidebar={handleToggleSidebar} />
      {isSidebarOpen && <Sidebar />}
      <div className=" my-32">
        <ProductList />
      </div>
    </main>
  );
};
export default Page;
