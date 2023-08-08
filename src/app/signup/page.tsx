import { Header } from "@/containers";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Header />
      <div className="m-auto w-1/3 p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl text-center font-semibold mb-4">Sign Up</h1>
        <form>
          <div className="mb-4">
            <label className="block font-medium mb-1">Name</label>
            <input id="Name" className="w-full border px-3 py-2 rounded-lg" />
          </div>
          <div className="mb-4">
            <label htmlFor="number" className="block font-medium mb-1">
              Phone
            </label>
            <input
              type="tel"
              id="number"
              className="w-full border px-3 py-2 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border px-3 py-2 rounded-lg"
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
            />
          </div>
          <button
            type="submit"
            className="w-2/3 mx-auto bg-primary text-white py-2 rounded-lg"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-sm text-center">
          Don't have an account?{" "}
          <Link href="/signup" className="text-blue-500">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
