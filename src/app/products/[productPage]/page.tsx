import { Footer, Header, ProductDetails } from "@/containers";
import React from "react";

const ProductPage = ({ params }: any) => {
  return (
    <div className="mt-32">
      <Header />
      <ProductDetails id={params.productPage} />
      <Footer />
    </div>
  );
};

export default ProductPage;
