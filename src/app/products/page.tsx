"use client";
import { Header, ProductList } from "@/containers";
import Sidebar from "@/containers/Sidebar";
import { MyContext } from "@/store/MyContext";
import { useContext } from "react";
import "tailwindcss/tailwind.css";

const Page = () => {
  const { state, dispatch } = useContext<any>(MyContext);
  return (
    <main className="">
      <Header />
      {state.sideBard && <Sidebar />}
      <div className=" my-32">
        <ProductList />
      </div>
    </main>
  );
};
export default Page;
