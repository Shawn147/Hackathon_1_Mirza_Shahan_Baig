"use client";
import { ProductCard } from "@/components";
import Loader from "@/components/loader";
import { getProjects } from "@/sanity/sanity.utils";
import { Product } from "@/types";
import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "tailwindcss/tailwind.css";

const ProductList = async () => {
  const projects = await getProjects();
  const renderCard: FC<Product> = (item, index) => (
    <ProductCard {...item} key={index.toString()} />
  );
  return (
    <div className="flex gap-12 py-12 flex-wrap overflow-x-auto ml-8 flex-row text-black">
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
      >
        {projects.map((product, index) => (
          <SwiperSlide key={index}>
            <img
              src={product.image}
              alt={product.name}
              className="h-64 w-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {projects?.length ? (
        projects.map(renderCard)
      ) : (
        <Loader title={"No Products Found"} />
      )}
    </div>
  );
};

export default ProductList;
