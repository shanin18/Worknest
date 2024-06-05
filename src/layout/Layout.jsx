import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

const Layout = () => {
  return (
    <section>
      <Navbar />
      <div className="min-h-[calc(100vh-517px)]">
        <Outlet />
      </div>
      <Footer />
    </section>
  );
};

export default Layout;
