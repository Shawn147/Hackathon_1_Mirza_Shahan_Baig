import { Header, ProductList } from "@/containers";
import { MyContextProvider } from "@/store/MyContext";
import "tailwindcss/tailwind.css";

export default async function Page() {
  return (
    <main className="">
      <Header />
      <ProductList />
    </main>
  );
}
