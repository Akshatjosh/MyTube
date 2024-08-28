import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function LikedVideos() {
  const likedVideos = useSelector((state) => state.likedVideos);
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);

  return (
    <div
      className={`flex flex-col p-4  min-h-screen ml-8 ${
        isDarkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <h1 className="text-2xl font-bold mb-4">Liked Videos</h1>
      {likedVideos.length > 0 ? (
        <div className="flex flex-col gap-4 ">
          {likedVideos.map((video, index) => (
            <Link to={`/Watch?v=${video.id}`} key={index} className="w-full">
              <div
                className={`border rounded-lg shadow-md  transform transition-transform duration-300 hover:scale-105 flex flex-col ${
                  isDarkMode
                    ? "bg-black border-gray-700"
                    : "bg-white border-gray-200"
                }`}
              >
                <img
                  src={video.thumbnails?.medium?.url}
                  alt={video.title}
                  className="w-full h-42 object-cover"
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
        <p className="text-xl font-semibold text-center">No Liked Videos</p>
      )}
    </div>
  );
}

export default LikedVideos;
