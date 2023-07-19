import { CartCard, CartSummary } from "@/components";
import Loader from "@/components/loader";
import { getCartItems } from "@/store";
import { Toaster } from "react-hot-toast";

const CartCont = async () => {
  const cartItems = await getCartItems();
  const renderCard = (item: any, index: number) => (
    <CartCard
      key={index.toString()}
      imageSrc={item.product?.image}
      name={item.product?.name}
      price={item.price}
      quantity={item.quantity}
      productid={item.productid}
    />
  );

  return (
    <div className="flex flex-wrap md:flex-nowrap  md:justify-between  mx-12 my-32 md:mx-12  justify-center">
      {cartItems?.length ? (
        <div className="flex-wrap md:flex-nowrap w-3/5">
          {cartItems?.map(renderCard)}
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
