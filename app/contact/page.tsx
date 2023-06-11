import { Header } from "@/containers";
import Sidebar from "@/containers/Sidebar";
import "tailwindcss/tailwind.css";

export default async function Cart() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <main className="">
      <Header handleToggleSidebar={handleToggleSidebar} />
      {isSidebarOpen && <Sidebar />}
    </main>
  );
}
