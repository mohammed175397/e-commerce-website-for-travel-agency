import { Outlet } from "react-router";
import Header from "../compnants/Header";
import Footer from "../compnants/Footer";
function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout