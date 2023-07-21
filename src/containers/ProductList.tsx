"use client";
import { ProductCard } from "@/components";
import { getProjects } from "@/sanity/sanity.utils";
import { Product } from "@/types";
import { FC } from "react";
import "tailwindcss/tailwind.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Loader from "@/components/loader";
const ProductList = async () => {
  const projects = await getProjects();
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
    2048: { items: 4 },
  };

  const items = projects.map((item, index) => {
    return <ProductCard {...item} key={index.toString()} />;
  });
  return (
    <div className="flex justify-center mt-12 mx-24 w-auto">
      <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
        activeIndex={0}
        autoPlayInterval={1000}
        autoPlay
        infinite
        disableButtonsControls
      />
    </div>
  );
};

export default ProductList;
