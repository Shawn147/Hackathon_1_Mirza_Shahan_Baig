"use client";
import { createContext, useReducer } from "react";

// Create a new context

export const MyContext = createContext("light");

// Create a reducer function
const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "CART":
      return { ...state, cartItems: action.payload };
    case "ISLOADING":
      return { ...state, isLoading: action.payload };
    case "SIDEBAR":
      return { ...state, sideBar: action.payload };
    default:
      return state;
  }
};
const initialState = {
  cartItems: [],
  isLoading: false,
  sideBar: false,
};
export const MyContextProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <MyContext.Provider value={{ state, dispatch } as any}>
      {children}
    </MyContext.Provider>
  );
};
