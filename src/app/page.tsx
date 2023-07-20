import { Header, HeroScreen, ProductList, Promotions } from "@/containers";
import { Toaster } from "react-hot-toast";

export default async function Page() {
  return (
    <main>
      <Header />
      <HeroScreen />
      <Promotions />
      <div className="w-full text-center mt-24">
        <p className="text-blue text-sm font-semibold">PRODUCTS</p>
        <h1 className="font-semibold text-5xl mt-4">Check What We Have</h1>
      </div>
      <ProductList />
      <Toaster position="top-right" reverseOrder={false} />
    </main>
  );
}
