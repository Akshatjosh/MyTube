import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useSelector, useDispatch } from "react-redux";
import { toggleMenu } from "../utils/AppSlice";
import { FiMenu } from "react-icons/fi";

function Body() {
  const isSidebarOpen = useSelector((state) => state.app.isMenuOpen);
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);
  const dispatch = useDispatch();

  const toggleSidebar = () => {
    dispatch(toggleMenu());
  };

  return (
    <div
      className={`flex ${
        isDarkMode ? "bg-gray-900" : "bg-gray-100"
      } transition-colors duration-300`}
    >
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full ${
          isSidebarOpen ? "w-64" : "w-16"
        } ${
          isDarkMode ? "bg-gray-900" : "bg-white"
        } text-white dark:text-gray-200 transition-width duration-300 ease-in-out flex flex-col z-40`}
      >
        <button
          onClick={toggleSidebar}
          className={`p-4 ${
            isDarkMode
              ? "bg-gray-700 hover:bg-gray-600"
              : "bg-gray-100 hover:bg-gray-200"
          } text-white dark:text-gray-100 focus:outline-none transition-colors duration-300`}
        >
          <FiMenu size={24} />
        </button>
        <Sidebar isSidebarOpen={isSidebarOpen} />
      </div>

      {/* Main Content */}
      <div
        className={`flex-1 ml-${
          isSidebarOpen ? "64" : "16"
        } p-4 md:p-6 lg:p-8 ${
          isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
        } transition-colors duration-300`}
      >
        <Outlet />
      </div>
    </div>
  );
}

export default Body;
