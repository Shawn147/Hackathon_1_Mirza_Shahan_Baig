"use client";
import { deleteCartEntry } from "@/store";
import { MyContext } from "@/store/MyContext";
import Image from "next/image";
import { FC, useContext, useState } from "react";
import { FaMinus, FaPlus, FaTimes } from "react-icons/fa";

interface cartTypes {
  imageSrc: string;
  name: string;
  price: number;
  quantity: number;
  productid: string;
}

const CartCard: FC<cartTypes> = ({
  productid,
  name,
  price,
  imageSrc,
  quantity,
}) => {
  const { state, dispatch } = useContext<any>(MyContext);

  const [qty, setQty] = useState<number>(quantity);
  const addAction = () => {
    setQty(qty + 1);
  };
  const minusAction = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
  };
  const deleteEntry = async () => {
    dispatch({ type: "ISLOADING", payload: true });
    const data = await deleteCartEntry(productid);
    dispatch({ type: "CART", payload: data });
    dispatch({ type: "ISLOADING", payload: false });
  };
  return (
    <div className="relative p-8 md:p-0 md:flex w-full mt-4 md:flex-nowrap sm:flex-wrap flex-wrap items-center gap-0 md:gap-4 overflow-hidden border border-primary rounded-md text-black">
      <img
        src={imageSrc}
        alt={name}
        className="w-full md:w-24 h-24 md:h-24 object-contain"
      />
      <div className="md:flex md:flex-nowrap flex-wrap md:flex-1 pr-12 items-center justify-between">
        <h3 className="text-lg w-40 truncate center font-semibold text-black">
          {name}
        </h3>
        <div>
          <p className="text-xs mt-3 md:mt-0">Price</p>
          <p className="text-secondary font-bold">${parseInt(price + "")}</p>
        </div>
        <div>
          <p className="text-xs mt-3 md:mt-0">Quantity</p>
          <div className="flex mt-1">
            <button
              onClick={minusAction}
              className="items-center
              
              hover:bg-gray-400 h-6 justify-center mr-2 border-secondary bg-primaryLight rounded-lg"
            >
              <FaMinus className="mx-4 text-xs text-primary " />
            </button>
            <p className="text-secondary font-bold ">{qty}</p>
            <button
              onClick={addAction}
              className="items-center hover:bg-gray-400 h-6 justify-center ml-2 border-secondary bg-primaryLight rounded-lg"
            >
              <FaPlus className="mx-4 text-xs text-primary " />
            </button>
          </div>
        </div>
        <div>
          <p className="text-xs mt-3 md:mt-0">Total</p>
          <p className="text-secondary font-bold">
            {parseInt(qty * price + "")}
          </p>
        </div>
      </div>
      <button
        onClick={deleteEntry}
        className="flex items-center
        absolute
        right-0
        top-0
        justify-center p-2 rounded-bl-lg bg-primary hover:bg-gray-400"
      >
        <FaTimes className="text-white" />
      </button>
    </div>
  );
};

export default CartCard;
