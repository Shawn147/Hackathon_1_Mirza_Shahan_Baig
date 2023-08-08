import { Footer, Header, ProductDetails } from "@/containers";
import React from "react";

const ProductPage = (props) => {
  console.log("props", props.params.productPage);
  return (
    <div className="mt-32">
      <Header />
      <ProductDetails />
      <Footer />
    </div>
  );
};

export default ProductPage;
