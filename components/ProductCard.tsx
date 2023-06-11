import { addToCart, deleteCartEntry } from "@/store";
import { MyContext } from "@/store/MyContext";
import { Product } from "@/types";
import Image from "next/image";
import { FC, useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
const ProductCard: FC<Product> = (item) => {
  const { state, dispatch } = useContext(MyContext);

  const isInCart = () => {
    return state.cartItems.find((c: any) => c.productid == item._id);
  };
  const { name, image, price } = item;
  const addOrRemove = async () => {
    try {
      dispatch({ type: "ISLOADING", payload: true });
      if (state.cartItems.find((v: any) => v.productid == item._id)) {
        const data = await deleteCartEntry(item._id + "");
        dispatch({ type: "CART", payload: data });
      } else {
        const data = await addToCart({
          productId: item._id,
          price,
          quantity: 1,
        });
        dispatch({ type: "CART", payload: data });
      }
    } finally {
      dispatch({ type: "ISLOADING", payload: false });
    }
  };
  return (
    <div
      onClick={() => {}}
      className="w-64 md:w-96 h-64 md:h-96 mx-2 rounded overflow-hidden shadow-lg"
    >
      <img
        src={image}
        alt="Product Image"
        className="w-full md:h-64 h-36 object-contain"
      />
      <div className="px-6 py-4">
        <p className="font-bold h-10 md:h-16 text-xs md:text-lg">{name}</p>
        <div className="flex justify-between items-center">
          <p className="text-secondary font-bold text-lg mr-2">$ {price}</p>
          {isInCart() ? (
            <span
              onClick={addOrRemove}
              className="text-primary hover:bg-primaryLight text-lg cursor-pointer"
            >
              <FaShoppingCart />
            </span>
          ) : (
            <span
              onClick={addOrRemove}
              className="text-primary hover:bg-primaryLight text-2xl cursor-pointer"
            >
              <AiOutlineShoppingCart />
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
