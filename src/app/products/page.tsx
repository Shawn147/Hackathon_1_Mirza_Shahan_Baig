import { Header, ProductList } from "@/containers";
import { getProjects } from "@/sanity/sanity.utils";
import "tailwindcss/tailwind.css";

const Page = async () => {
  const projects = await getProjects();
  return (
    <main className="my-32">
      <Header />
      <ProductList projects={projects} />
    </main>
  );
};
export default Page;
