"use client";
import { images } from "@/helpers/utils";
import React, { useState } from "react";

const ProductDetail = () => {
  const [img, setImg] = useState(images.girl);
  const [quantity, setQuantity] = useState(1);
  const handleQuantityChange = (amount: number | string) => {
    setQuantity((prevQuantity: any) => Math.max(1, prevQuantity + amount));
  };
  const renderImages = (item: string, index: number) => (
    <img
      key={index.toString()}
      onClick={() => setImg(item)}
      src={item}
      alt="Product"
      className="object-fit w-24 h-24 border-primary border hover:bg-primary"
    />
  );
  return (
    <div>
      <div className="flex flex-col md:flex-row md:justify-between w-full m-auto px-12">
        <div className="flex justify-center  w-full h-full">
          <div className="mr-4 flex flex-col gap-4">
            {[images.man1, images.girl, images.man2].map(renderImages)}
          </div>
          <div className="w-card h-card border-primary border pt-12 shadow-md">
            <img
              src={img}
              alt="Product"
              className="object-contain w-full h-full"
            />
          </div>
        </div>
        <div className="w-full flex flex-col">
          <h1 className="text-xl font-semibold mb-2">Product Name</h1>
          <p className="text-gray-600 mb-2">Category</p>
          <p className="mb-4">Product Variants: Variant Name</p>

          <div className="flex items-center mb-4">
            <p className="mr-2">Size:</p>
            <select className="border rounded p-1">
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
            </select>
          </div>

          <div className="flex items-center mb-4">
            <button
              className="border rounded border-primary font-lg px-3 py-1 mr-4"
              onClick={() => handleQuantityChange(-1)}
            >
              -
            </button>
            <p>{quantity}</p>
            <button
              className="border border-primary  rounded px-3 font-lg py-1 ml-4"
              onClick={() => handleQuantityChange(1)}
            >
              +
            </button>
          </div>

          <div className="flex items-center">
            <button className="bg-primary text-white px-4 py-2 w-36 rounded">
              Add to Cart
            </button>
            <p className="text-lg my-auto ml-8 font-semibold">{`$${(
              49.99 * quantity
            ).toFixed(2)}`}</p>
          </div>
        </div>
      </div>
      <div className="container mx-auto p-4 mt-12">
        {/* Product Information */}
        <div className="mb-8">
          <h2 className="text-3xl font-semibold mb-2">Product Information</h2>
          <hr className="" />
        </div>

        {/* Product Details */}
        <div className="flex mb-8">
          <h3 className="text-lg font-semibold w-1/4">Product Details:</h3>
          <p className="text-gray-600 w-3/4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            eget ipsum sed risus feugiat vulputate a ut elit.
          </p>
          {/* Other product details */}
        </div>

        {/* Product Care */}
        <div className="flex mb-8">
          <h3 className="text-lg font-semibold w-1/4">Product Care:</h3>
          <ul className="w-3/4 list-inside list-disc font-semibold">
            <li className="text-gray-600">Lorem ipsum dolor sit amet.</li>
            <li className="text-gray-600">consectetur adipiscing elit.</li>
            <li className="text-gray-600">
              Quisque eget ipsum sed risus feugiat vulputate a ut elit.
            </li>
            <li className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              eget ipsum sed risus feugiat vulputate a ut elit.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
