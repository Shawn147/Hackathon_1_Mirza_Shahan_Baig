"use client";
import { SearchBar } from "@/components";
import { MyContext } from "@/store/MyContext";
import Link from "next/link";
import { useContext, useState } from "react";
import { FaBars, FaShoppingCart } from "react-icons/fa";
import Sidebar from "./Sidebar";
import Tabs from "./Tabs";

const Header = ({}) => {
  const { state, dispatch } = useContext<any>(MyContext);
  const handleToggleSidebar = () => {
    dispatch({ type: "SIDEBAR", payload: !state.sideBar });
  };

  return (
    <header className="fixed top-0 left-0 z-50 bg-primary flex items-center w-full justify-between px-4 md:px-24 h-24">
      {/* Sidebar Toggle Button */}
      <div className="md:hidden">
        <FaBars onClick={handleToggleSidebar} className="text-2xl text-white" />
      </div>

      {/* Logo */}
      <div className="flex w-32 h-32 items-center">
        <img className=" w-32 h-32 object-contain" src="/Logo.png" alt="Logo" />
      </div>
      <Tabs />
      <SearchBar
        style={
          " flex items-center h-10 hidden md:block w-1/5 bg-white text-placeholder rounded-full border-2 overflow-hidden p-1 border-secondary focus:outline-none focus:ring focus:ring-primary "
        }
      />
      {/* Cart Icon */}
      <Link href="/cart" className="relative bg-white p-3 rounded-full">
        {state.cartItems?.length ? (
          <p className="text-badge absolute text-white bg-secondary w-3 text-center top-0 right-1 rounded-full">
            {state.cartItems?.length}
          </p>
        ) : null}

        <FaShoppingCart className="text-primary text-2xl" />
      </Link>

      {/* Sidebar */}
    </header>
  );
};

export default Header;
