import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const Root = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="w-11/12 mx-auto my-3">
        <Navbar></Navbar>
      </div>
      <div className="flex-grow w-11/12 mx-auto">
        <Outlet></Outlet>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Root;
