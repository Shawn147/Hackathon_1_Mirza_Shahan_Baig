"use client";
import { SearchBar } from "@/components";
import { MyContext } from "@/store/MyContext";
import Link from "next/link";
import { useContext, useState } from "react";
import { FaBars, FaShoppingCart } from "react-icons/fa";
import Sidebar from "./Sidebar";
import Tabs from "./Tabs";

const Header = ({ cartCount }: { cartCount?: number | string }) => {
  const { state, dispatch } = useContext<any>(MyContext);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className=" bg-primary flex items-center w-full justify-between px-4 md:px-24 h-24">
      {/* Sidebar Toggle Button */}
      <div className="md:hidden">
        <FaBars onClick={handleToggleSidebar} className="text-2xl text-white" />
      </div>

      {/* Logo */}
      <div className="flex w-32 h-32 items-center">
        <img
          className="w-48 h-24 md:w-full md:h-full object-contain"
          src="/logo.webp"
          alt="Logo"
        />
      </div>
      <Tabs />
      <SearchBar
        style={
          " flex items-center h-10 hidden md:block w-1/4 bg-white text-placeholder rounded p-1 border-2 border-secondary focus:outline-none focus:ring focus:ring-primary "
        }
      />
      {/* Cart Icon */}
      <Link href="/cart" className="relative">
        {state.cartItems?.length ? (
          <p className="text-badge absolute text-white bg-secondary w-3 text-center top-0 right-1 rounded-full">
            {state.cartItems?.length}
          </p>
        ) : null}

        <FaShoppingCart className="text-white text-2xl" />
      </Link>

      {/* Sidebar */}
      {isSidebarOpen && <Sidebar />}
    </header>
  );
};

export default Header;
