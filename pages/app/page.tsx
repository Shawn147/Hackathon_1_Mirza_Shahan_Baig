// "use client";
import { Header, HeroScreen, ProductList } from "@/containers";
import { Toaster } from "react-hot-toast";
import "tailwindcss/tailwind.css";

const Home = ({ data }) => {
  console.log("data", data);
  // const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // const handleToggleSidebar = () => {
  //   setIsSidebarOpen(!isSidebarOpen);
  // };
  return (
    <main className="">
      <Header />
      {/* {isSidebarOpen && <Sidebar />} */}

      <HeroScreen />
      <ProductList />
      <Toaster position="top-right" reverseOrder={false} />
    </main>
  );
};

export default Home;
