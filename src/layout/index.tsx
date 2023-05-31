import Footer from "./footer";
import Header from "./header";
import Sidebar from "./sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="h-full grid grid-rows-[5rem_1fr_4rem]">
      <Header />
      <main className="h-full bg-gray-200 grid grid-cols-[17rem_1fr] ">
        <Sidebar />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
