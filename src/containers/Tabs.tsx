import { SearchBar } from "@/components";
import Link from "next/link";
import React from "react";
import { RiSearchLine } from "react-icons/ri";

const Tabs = ({}) => {
  return (
    <>
      {/* Navigation Tabs */}
      <nav className="hidden md:flex sm:space-x-4 md:space-x-8 space-x-12 sm:text-xs md:text-md lg:text-lg text-white">
        <Link className="hover:text-gray-300" href="/">
          Home
        </Link>
        <Link className="hover:text-gray-300" href="/products">
          Products
        </Link>
        <Link className="hover:text-gray-300" href="/about">
          About
        </Link>
        <Link className="hover:text-gray-300" href="/contact">
          Contact
        </Link>
      </nav>
    </>
  );
};

export default Tabs;
