import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function LikedVideos() {
  const likedVideos = useSelector((state) => state.likedVideos);
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);

  return (
    <div
      className={`flex flex-col items-center p-4 ${
        isDarkMode ? "bg-black text-gray-100" : "bg-gray-100 text-gray-900 "
      }`}
      style={{ width: "100%" }} // Adjust width to take half of WatchPage's space
    >
      <h1 className="text-3xl font-bold mb-6">Liked Videos</h1>
      {likedVideos.length > 0 ? (
        <div className="flex flex-col gap-6 w-full">
          {likedVideos.map((video, index) => (
            <Link to={`/Watch?v=${video.id}`} key={index} className="w-full">
              <div
                className={`bg-white ${
                  isDarkMode
                    ? "dark:bg-black border-gray-700"
                    : "border-gray-200"
                } border rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 flex flex-col`}
              >
                <img
                  src={video.thumbnails?.medium?.url}
                  alt={video.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3
                    className={`text-lg font-semibold ${
                      isDarkMode ? "text-gray-300" : "text-gray-800"
                    }`}
                  >
                    {video.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-xl font-semibold">No Liked Videos</p>
      )}
    </div>
  );
}

export default LikedVideos;
