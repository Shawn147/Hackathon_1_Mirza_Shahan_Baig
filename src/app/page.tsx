import { Header, HeroScreen, ProductList } from "@/containers";
import { getCartItems } from "@/store";
import { Toaster } from "react-hot-toast";
import "tailwindcss/tailwind.css";

export default async function Page() {
  return (
    <main>
      <Header />
      <HeroScreen />
      <ProductList />
      <Toaster position="top-right" reverseOrder={false} />
    </main>
  );
}
