import { ProductCard } from "@/components";
import Loader from "@/components/loader";
import { getProjects } from "@/sanity/sanity.utils";
import { Product } from "@/types";
import { FC } from "react";

const ProductList = async () => {
  const projects = await getProjects();
  const renderCard: FC<Product> = (item, index) => (
    <ProductCard {...item} key={index.toString()} />
  );
  return (
    <div className="flex gap-12 py-12 flex-wrap overflow-x-auto ml-8 flex-row text-black">
      {projects?.length ? (
        projects.map(renderCard)
      ) : (
        <Loader title={"No Products Found"} />
      )}
    </div>
  );
};

export default ProductList;
