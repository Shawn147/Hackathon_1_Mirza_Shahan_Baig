import Image from "next/image";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";

const HeroScreen = () => {
  return (
    <div className="w-full mt-24 flex-wrap md:flex-nowrap flex flex-row justify-between text-black">
      <div className="w-full p-12 md:p-24 flex flex-col justify-center">
        <div className="flex items-center space-x-4 ">
          <button className="flex items-center space-x-2 font-bold bg-primaryLight text-primary px-4 py-2 rounded">
            Sale 70%
          </button>
        </div>
        <h1 className="text-5xl mt-4 font-bold">
          An Industrial Take on Streetwear
        </h1>
        <p className=" mt-4">
          Anyone can beat you but no one can beat your outfit as long as you
          wear Dine outfits.
        </p>
        <div className="flex mt-4 items-center space-x-4">
          <Link
            href={"/products"}
            className="flex items-center space-x-2 bg-secondary text-white px-4 py-2 rounded"
          >
            <FaShoppingCart className="text-2xl" />
            <span>Start Shopping</span>
          </Link>
        </div>
      </div>
      <div className="relative justify-center items-center w-full p-12 md:p-24 ">
        <div className="absolute md:right-24 right-12 h-3/4 w-3/4 p-12 md:p-24 rounded-full bg-primaryLight"></div>
        <img
          className="object-cover relative z-10 w-full h-full"
          src="/hero.webp"
          alt="hero"
        />
      </div>
    </div>
  );
};

export default HeroScreen;
