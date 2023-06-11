import { SearchBar } from "@/components";
import Tabs from "./Tabs";
import Link from "next/link";

const Sidebar = ({}) => {
  return (
    <aside className="fixed flex flex-col top-24 left-0 w-64 h-screen bg-primary px-4 py-6">
      <SearchBar
        style={
          "w-full flex items-center bg-white text-placeholder rounded p-1 border-2 border-secondary focus:outline-none focus:ring focus:ring-primary"
        }
      />
      <div className="mt-4 pl-2">
        <Link className="block py-2 hover:text-gray-300" href="/">
          Home
        </Link>
        <Link className="block py-2 hover:text-gray-300 mb-2" href="/products">
          Products
        </Link>
        <Link className="block py-2 hover:text-gray-300 mb-2" href="/about">
          About
        </Link>
        <Link className="block py-2 hover:text-black-300 mb-2" href="/contact">
          Contact
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;

{
  /* <nav className="flex column">
        <Link
        className="hover:text-gray-300"
        href="/">
            Home
        </Link>
        <Link
        className="hover:text-gray-300"
        href="/products">
            Products
        </Link>
        <Link
        className="hover:text-gray-300"
        href="/about">
          About
        </Link>
        <Link 
        className="hover:text-gray-300"
        href="/contact">
            Contact
        </Link>
      </nav> */
}
