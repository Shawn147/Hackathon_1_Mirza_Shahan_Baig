"use client";
import toast from "react-hot-toast";
export const getCartItems = () => {
  return fetch("api/cart")
    .then((response) => {
      return response.json().then(({ data, message }) => {
        toast.success(message);
        return data;
      });
    })
    .catch((err) => {
      toast.error("An Error Occured");
      console.log("err", err);
    });
};
export const deleteCartEntry = async (productid: string) => {
  try {
    const response = await fetch("api/cart/delete", {
      method: "POST",
      body: JSON.stringify({ productid }),
    });
    const { message } = await response.json();
    toast.success(message);
    const getData = await getCartItems();
    return getData;
  } catch (error) {
    toast.error("An Error Occured");
    console.log("error", error);
  }
};
export const addToCart = async (body: any) => {
  try {
    const response = await fetch("/api/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const { message } = await response.json();
    const getData = await getCartItems();
    toast.success(message); // Handle the response data
    return getData;
  } catch (error) {
    toast.error("An Error Occured");
    console.log("error", error);
  }
};
