import { useSelector } from "react-redux";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import "../App.css"; // Import the CSS file

function MainContainer() {
  // Access dark mode state from Redux
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);

  return (
    <div
      className={`flex flex-col p-4 lg:p-8 min-h-screen ${
        isDarkMode ? "bg-black" : "bg-gray-100"
      } transition-colors duration-300`}
    >
      {/* Button List */}
      <div
        className={`mb-6 flex overflow-x-auto py-2 space-x-4 rounded-lg shadow-md ${
          isDarkMode ? "bg-black" : "bg-white"
        } transition-colors duration-300`}
      >
        <ButtonList />
      </div>
      {/* Video Container */}
      <div
        className={`flex-1 rounded-lg shadow-md p-4 ${
          isDarkMode ? "bg-black" : "bg-white"
        } transition-colors duration-300`}
      >
        <VideoContainer />
      </div>
    </div>
  );
}

export default MainContainer;
