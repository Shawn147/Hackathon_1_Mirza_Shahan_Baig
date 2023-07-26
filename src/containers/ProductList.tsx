"use client";
import { ProductCard } from "@/components";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const ProductList = ({ projects }: { projects: any[] }) => {
  const items = projects.map((item, index) => {
    return <ProductCard {...item} key={index.toString()} />;
  });
  return (
    <div className="mt-12 mx-24 w-auto">
      <AliceCarousel
        mouseTracking
        items={items}
        autoWidth
        controlsStrategy="default"
        autoPlayInterval={500}
        autoPlay
        infinite
        disableButtonsControls
      />
    </div>
  );
};

export default ProductList;
