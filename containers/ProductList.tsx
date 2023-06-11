"use client";
import { ProductCard } from "@/components";
import Loader from "@/components/loader";
import { getProjects } from "@/sanity/sanity.utils";
import { MyContext } from "@/store/MyContext";
import { Product } from "@/types";
import { FC, useContext, useEffect, useState } from "react";

const ProductList = () => {
  const { state, dispatch } = useContext(MyContext);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function getData() {
      const projects = await getProjects();
      setProducts(projects);
    }
    getData();
  }, []);
  const renderCard: FC<Product> = (item, index) => (
    <ProductCard {...item} key={index.toString()} />
  );

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
