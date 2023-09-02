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
export const loginAction = async ({
  payload,
  dispatch,
}: {
  payload: any;
  dispatch: any;
}) => {
  dispatch({ type: "ISLOADING", payload: true });
  try {
    const res = await fetch(process.env.BASE_URL + "auth/login", {
      cache: "no-cache",
      method: "POST",
      mode: "no-cors",
      headers: {
        Accept: "application/json",

        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const resJson = await res.json();
    if (resJson.status != 200) {
      toast.error(resJson.message);
    } else {
      localStorage.setItem("profile", JSON.stringify(resJson.userData));
      toast.success(resJson.message);
      window.location.assign(
        "https://hackathon-1-mirza-shahan-baig-ygo4.vercel.app/"
      );
    }
  } catch (err) {
    console.log("err", err);
  } finally {
    dispatch({ type: "ISLOADING", payload: false });
  }
};
export const signupAction = async ({ payload }: { payload: any }) => {
  try {
    const res = await fetch(process.env.BASE_URL + "signup", {
      cache: "no-cache",
      mode: "no-cors",
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
  try {
    // const response = await fetch("/api/cart", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(body),
    // });
    // const { message } = await response.json();
    // const getData = await getCartItems();
    // toast.success(message); // Handle the response data
    // return getData;
  } catch (error) {
    toast.error("An Error Occured");
    console.log("error", error);
  }
};
