"use client";
import { ProductCard } from "@/components";
import Loader from "@/components/loader";
import { getProjects } from "@/sanity/sanity.utils";
import { getCartItems } from "@/store";
import { MyContext } from "@/store/MyContext";
import { Product } from "@/types";
import { FC, useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const ProductList = () => {
  const { state, dispatch } = useContext<any>(MyContext);
  const [products, setProducts] = useState<any[]>([]);
  useEffect(() => {
    async function getData() {
      dispatch({ type: "ISLOADING", payload: true });
      const projects = await getProjects();
      const data = await getCartItems();
      toast.success("Success");
      dispatch({ type: "CART", payload: data });
      setProducts(projects);
    }
    try {
      getData();
    } catch (err) {
      console.log("Err", err);
    } finally {
      dispatch({ type: "ISLOADING", payload: false });
    }
  }, []);

  const renderCard: FC<Product> = (item, index) => (
    <ProductCard {...item} key={index.toString()} />
  );
  useEffect(() => {
    async function getData() {
      dispatch({ type: "ISLOADING", payload: true });
    }
    try {
      getData();
    } finally {
      dispatch({ type: "ISLOADING", payload: false });
    }
  }, []);
  return (
    <div className="flex gap-12 py-12 flex-wrap overflow-x-auto ml-8 flex-row text-black">
      {state.isLoading ? (
        <Loader />
      ) : products?.length ? (
        products.map(renderCard)
      ) : (
        <Loader title={"No Products Found"} />
      )}
    </div>
  );
};

export default ProductList;
