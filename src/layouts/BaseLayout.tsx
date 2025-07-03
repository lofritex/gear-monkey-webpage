import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "@/layouts/Footer";

export default function BaseLayout() {
  return (
    <div className="flex flex-col items-center pb-10">
      <Header />
      <main className="mt-24 w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
