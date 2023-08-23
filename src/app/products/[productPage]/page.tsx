import { Footer, Header, ProductDetails } from "@/containers";
import React from "react";

const ProductPage = (props) => {
  return (
    <div className="mt-32">
      <Header />
      <ProductDetails id={props.params.productPage} />
      <Footer />
    </div>
  );
};

export default ProductPage;
