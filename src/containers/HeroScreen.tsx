import Image from "next/image";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";

const HeroScreen = () => (
  <div className="w-full mx-auto md:space-between mt-24 px-12 flex-wrap md:flex-nowrap flex flex-row text-black">
    <div className="w-full mx-auto p-12 flex flex-col justify-center">
      <div className="flex items-center space-x-4 ">
        <button className="flex items-center space-x-2 font-bold bg-primaryLight text-primary px-4 py-2 rounded">
          Sale 70%
        </button>
      </div>
      <h1 className="text-5xl mt-4 font-bold">
        An Industrial Take on Streetwear
      </h1>
      <p className=" mt-4">
        Anyone can beat you but no one can beat your outfit as long as you wear
        Dine outfits.
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
    <div className="relative mx-auto justify-center items-center w-3/5 my-12 md:h-2/3 md:p-12 ">
      <div className="absolute md:right-0 right-0 h-full w-full top-0 rounded-full bg-primaryLight"></div>
      <img
        className="object-cover relative z-10 w-full h-full"
        src="/hero.webp"
        alt="hero"
      />
    </div>
  </div>
);

export default HeroScreen;
