import toast from "react-hot-toast";

export const getCartItems = async () => {
  try {
    const res = await fetch(process.env.BASE_URL + "cart", {
      cache: "no-cache",
    });
    const resJson = res.json();
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    toast.success("hello");
    return resJson;
  } catch (err) {
    console.log("err", err);
  }
};
export const loginAction = async ({ payload, dispatch }) => {
  dispatch({ type: "ISLOADING", payload: true });
  try {
    console.log("payload", payload, process.env);

    //   const res = await fetch(process.env.BASE_URL + "login", {
    //     cache: "no-cache",
    //     body: payload,
    //   });
    //   const resJson = res.json();
    //   if (!res.ok) {
    //     throw new Error("Failed to fetch data");
    //   }
    //   toast.success("login successfully");
    //   console.log(resJson);
  } catch (err) {
    console.log("err", err);
  } finally {
    dispatch({ type: "ISLOADING", payload: false });
  }
};
export const signupAction = async ({ payload }) => {
  try {
    const res = await fetch(process.env.BASE_URL + "signup", {
      cache: "no-cache",
      body: payload,
    });
    const resJson = res.json();
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    toast.success("signup successfully");
    console.log(resJson);
  } catch (err) {
    console.log("err", err);
  }
};
export const deleteCartEntry = async (productid: string) => {
  // try {
  //   const response = await fetch("api/cart/delete", {
  //     method: "POST",
  //     body: JSON.stringify({ productid }),
  //   });
  //   const { message } = await response.json();
  //   toast.success(message);
  //   const getData = await getCartItems();
  //   return getData;
  // } catch (error) {
  //   toast.error("An Error Occured");
  //   console.log("error", error);
  // }
};
export const addToCart = async (body: any) => {
  // try {
  //   const response = await fetch("/api/cart", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(body),
  //   });
  //   const { message } = await response.json();
  //   const getData = await getCartItems();
  //   toast.success(message); // Handle the response data
  //   return getData;
  // } catch (error) {
  //   toast.error("An Error Occured");
  //   console.log("error", error);
  // }
};
