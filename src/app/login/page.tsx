"use client";
import { GlobalBtn } from "@/components";
import { Header } from "@/containers";
import { loginAction } from "@/store";
import { MyContext } from "@/store/MyContext";
import Link from "next/link";
import { useCallback, useContext, useState } from "react";

const SignupPage = () => {
  const { state, dispatch } = useContext(MyContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const loginAct = useCallback(() => {
  //   // const payload = {
  //   //   email,
  //   //   password,
  //   // };
  //   // loginAction({ payload, dispatch });
  //   console.log("pro", process.env.BASE_URL);
  // }, []);
  return (
    <div className="flex h-screen bg-gray-100">
      <Header />
      <div className="m-auto w-1/3 p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl text-center font-semibold mb-4">Login</h1>
        <form
        // onSubmit={loginAct}
        >
          <div className="mb-4">
            <label htmlFor="email" className="block font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border px-3 py-2 rounded-lg"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full border px-3 py-2 rounded-lg"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <GlobalBtn
            isLoading={state.isLoading}
            disabled={state.isLoading || !email || !password}
            // onPress={loginAct}
            title="Login"
          />
        </form>
        <p className="mt-4 text-sm text-center">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-500">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
