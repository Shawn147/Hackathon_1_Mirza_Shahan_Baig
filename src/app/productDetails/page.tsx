import { Header, ProductList } from "@/containers";
import { getProjects } from "@/sanity/sanity.utils";
import "tailwindcss/tailwind.css";

const Page = async () => {
  const projects = await getProjects();
  return (
    <main className="">
      <Header />
      <div className=" my-32">
        <ProductList projects={projects} />
      </div>
    </main>
  );
};
export default Page;
