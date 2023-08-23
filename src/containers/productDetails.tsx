"use client";
import Loader from "@/components/loader";
import { images } from "@/helpers/utils";
import { getProjects } from "@/sanity/sanity.utils";
import { addToCart } from "@/store";
import { MyContext } from "@/store/MyContext";
import { Product } from "@/types";
import React, { useContext, useEffect, useMemo, useState } from "react";

const ProductDetail = ({ id }: { id: string }) => {
  const { state, dispatch } = useContext(MyContext);
  const [product, setProduct] = useState<Product | any>(null);
  const [img, setImg] = useState<string>(images.girl);
  const [quantity, setQuantity] = useState<number>(1);
  const addAction = async () => {
    // const newArr = [...state.cartItems];
    // const findItem = newArr.find((c) => {
    //   return c.product._id == productid;
    // });
    // if (findItem) {
    //   findItem.quantity += 1;
    // }
    // dispatch({ type: "CART", payload: newArr });
    // try {
    //   const data = await addToCart({
    //     productId: productid,
    //     price,
    //     quantity,
    //   });
    //   console.log("data", data);
    // } catch (err) {
    //   console.log("err", err);
    // }
  };
  useEffect(() => {
    const fetchProduct = async () => {
      dispatch({ type: "ISLOADING", payload: true });
      const fetchedProduct = await getProjects();
      setProduct(fetchedProduct.find((v: Product) => v._id == id));
      dispatch({ type: "ISLOADING", payload: false });
    };
    fetchProduct();
  }, []);

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
  return state.isLoading ? (
    <Loader title="Loading..." />
  ) : (
    <div>
      <div className="flex flex-col md:flex-row md:justify-between w-full m-auto px-12">
        <div className="flex justify-center  w-full h-full">
          <div className="mr-4 flex flex-col gap-4">
            {[product?.image, product?.image, product?.image].map(renderImages)}
          </div>
          <div className="w-card h-card border-primary border pt-12 shadow-md">
            <img
              src={product?.image}
              alt="Product"
              className="object-contain w-full h-full"
            />
          </div>
        </div>
        <div className="w-full flex flex-col">
          <h1 className="text-xl font-semibold mb-2">{product?.name}</h1>
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
            <button
              onClick={addAction}
              className="bg-primary text-white px-4 py-2 w-36 rounded"
            >
              Add to Cart
            </button>
            <p className="text-lg my-auto ml-8 font-semibold">{`$${(
              product?.price * quantity
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
            {product?.description[0]?.children[0]?.text}
          </p>
          {/* Other product details */}
        </div>

        {/* Product Care */}
        <div className="flex mb-8">
          <h3 className="text-lg font-semibold w-1/4">Product Care:</h3>
          <ul className="w-3/4 list-inside list-disc font-semibold">
            <li className="text-gray-600">
              {product?.description[0]?.children[0]?.text}
            </li>
            <li className="text-gray-600">
              {product?.description[0]?.children[0]?.text}
            </li>
            <li className="text-gray-600">
              {product?.description[0]?.children[0]?.text}
            </li>
            <li className="text-gray-600">
              {product?.description[0]?.children[0]?.text}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
