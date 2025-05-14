import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <Navbar />
      <main
        className="pt-16 min-h-screen
    "
      >
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;
