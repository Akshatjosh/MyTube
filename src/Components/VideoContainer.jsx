import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { mostPopularApi } from "../utils/Constant";
import VideoComponent from "./VideoComponent";

function VideoContainer() {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Access dark mode state from Redux
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(mostPopularApi);
        const data = await response.json();
        setVideos(data.items || []);
      } catch (error) {
        console.error("Error fetching video data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div
      className={`ml-8 p-2 md:p-4 ${
        isDarkMode ? "bg-gray-900" : "bg-gray-100"
      } transition-colors duration-300`}
    >
      <h2
        className={`text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 ${
          isDarkMode ? "text-gray-100" : "text-gray-900"
        }`}
      >
        Popular Videos
      </h2>
      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <p className="text-xl font-semibold">Loading...</p>
        </div>
      ) : (
        <div className="mx-auto">
          <div className="flex items-center flex-wrap gap-4 ">
            {videos.length > 0 ? (
              videos.map((video) => (
                <VideoComponent key={video.id} video={video} />
              ))
            ) : (
              <div className="col-span-full flex justify-center items-center h-64">
                <p className="text-xl font-semibold">No videos found</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default VideoContainer;
