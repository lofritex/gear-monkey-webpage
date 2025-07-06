import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "@/layouts/Footer";

export default function BaseLayout() {
  const location = useLocation();

  return (
    <div
      className={`flex min-h-screen flex-col items-center pb-10 ${location.pathname === "/contact" ? "background-gradient-primary" : "bg-[#eef4ee]"}`}
    >
      <Header />
      <main className="mt-24 w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
