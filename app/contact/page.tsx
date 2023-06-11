"use client";
import { Header } from "@/containers";
import Sidebar from "@/containers/Sidebar";
import { useState } from "react";
import "tailwindcss/tailwind.css";

const Contact = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <main className="">
      <Header handleToggleSidebar={handleToggleSidebar} />
      {isSidebarOpen && <Sidebar />}
      <p className="mt-24">Contact</p>
    </main>
  );
};
export default Contact;
