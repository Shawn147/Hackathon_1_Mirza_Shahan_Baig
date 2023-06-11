"use client";
import { CartCard, CartSummary } from "@/components";
import Loader from "@/components/loader";
import { MyContext } from "@/store/MyContext";
import { useContext } from "react";
import { Toaster } from "react-hot-toast";

const CartCont = () => {
  const renderCard = (item, index) => (
    <CartCard
      key={index.toString()}
      imageSrc={item.product?.image}
      name={item.product?.name}
      price={item.price}
      quantity={item.quantity}
      productid={item.productid}
    />
  );
  const { state, dispatch } = useContext(MyContext);

  return (
    <div className="flex flex-wrap md:flex-nowrap md:m-24 m-4 justify-between">
      {state.isLoading ? (
        <Loader />
      ) : state.cartItems?.length ? (
        <div className="flex-wrap md:flex-nowrap w-3/5">
          {state.cartItems?.map(renderCard)}
        </div>
      ) : (
        <Loader title={"Cart is Empty"} />
      )}
      <CartSummary />
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default CartCont;
