import Link from "next/link";
import {
  FaChild,
  FaFemale,
  FaMale,
  FaShirtsinbulk,
  FaTshirt,
} from "react-icons/fa";

const Tabs = () => (
  <nav className="hidden md:flex sm:space-x-4 md:space-x-8 space-x-12 sm:text-xs md:text-md lg:text-lg text-white">
    <Link className="hover:text-gray-300 flex items-center" href="/products">
      <FaFemale className="mr-1" />
      Female
    </Link>
    <Link className="hover:text-gray-300 flex items-center" href="/products">
      <FaMale className="mr-1" /> Male
    </Link>
    <Link className="hover:text-gray-300 flex items-center" href="/products">
      <FaChild className="mr-1" /> Kids
    </Link>
    <Link className="hover:text-gray-300 flex items-center" href="/products">
      <FaTshirt className="mr-1" /> All Products
    </Link>
  </nav>
);

export default Tabs;
