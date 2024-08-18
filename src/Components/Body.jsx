import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useSelector, useDispatch } from "react-redux";
import { toggleMenu } from "../utils/AppSlice";
import { toggleDarkMode } from "../utils/darkModeSlice"; // Import the dark mode toggle action
import { FiMenu } from "react-icons/fi"; // For a responsive menu icon

function Body() {
  const isSidebarOpen = useSelector((state) => state.app.isMenuOpen);
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);
  const dispatch = useDispatch();

  const toggleSidebar = () => {
    dispatch(toggleMenu());
  };

  const toggleTheme = () => {
    dispatch(toggleDarkMode()); // Toggle dark mode
  };

  return (
    <div
      className={`flex h-screen overflow-hidden ${
        isDarkMode ? "bg-gray-800" : "bg-gray-200"
      } transition-colors duration-300`}
    >
      {/* Sidebar */}
      <div
        className={`${isSidebarOpen ? "w-64" : "w-20"} ${
          isDarkMode ? "bg-black" : "bg-white"
        } text-white dark:text-gray-200 transition-width duration-300 ease-in-out flex flex-col z-40`}
      >
        <button
          onClick={toggleSidebar}
          className={`p-4 ${
            isDarkMode
              ? "bg-black hover:bg-gray-600"
              : "bg-gray-200 hover:bg-gray-100"
          } text-white dark:text-gray-100 focus:outline-none rounded-r-lg transition-colors duration-300`}
        >
          <FiMenu size={24} />
        </button>
        <Sidebar isSidebarOpen={isSidebarOpen} />
      </div>

      {/* Main Content */}
      <div
        className={`flex-1 p-6 overflow-auto ${
          isDarkMode ? "bg-black text-white" : "bg-white text-gray-900"
        } transition-colors duration-300`}
      >
        <button
          onClick={toggleTheme}
          className={`p-2 mb-4 ${
            isDarkMode ? "bg-black text-white" : "bg-gray-300 text-gray-900"
          } rounded-md`}
        >
          Toggle Theme
        </button>
        <Outlet />
      </div>
    </div>
  );
}

export default Body;
