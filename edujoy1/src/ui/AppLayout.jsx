import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const AppLayout = () => {
  return (
    <>
      <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
        <Header />
        <div className="min-h-full">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default AppLayout;
