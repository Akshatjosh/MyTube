import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

function Body() {
  return (
    <div className="flex">
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default Body;
