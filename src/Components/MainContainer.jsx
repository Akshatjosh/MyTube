import { useSelector } from "react-redux";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

function MainContainer() {
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);

  return (
    <div
      className={`flex flex-col p-4 lg:p-6 min-h-screen ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      } transition-colors duration-300`}
    >
      {/* Button List */}
      <div
        className={`flex overflow-x-auto py-2 space-x-4 rounded-lg shadow-md ${
          isDarkMode ? "bg-gray-800" : "bg-white"
        } transition-colors duration-300 scrollbar-hide`}
      >
        <ButtonList />
      </div>

      {/* Video Container */}
      <div
        className={`flex-1 mt-4 rounded-lg shadow-md p-4 ${
          isDarkMode ? "bg-gray-800" : "bg-white"
        } transition-colors duration-300 flex flex-col items-start`}
      >
        <VideoContainer />
      </div>
    </div>
  );
}

export default MainContainer;
