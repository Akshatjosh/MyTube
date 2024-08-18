import { Link } from "react-router-dom";
import { VscAccount } from "react-icons/vsc";
import { useSelector } from "react-redux";

function VideoComponent({ video }) {
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode); // Access dark mode state

  function getTimeAgo(date) {
    const seconds = Math.floor((new Date() - new Date(date)) / 1000);
    let interval = Math.floor(seconds / 31536000);
    if (interval > 1) return `${interval} years ago`;
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) return `${interval} months ago`;
    interval = Math.floor(seconds / 604800);
    if (interval > 1) return `${interval} weeks ago`;
    interval = Math.floor(seconds / 86400);
    if (interval > 1) return `${interval} days ago`;
    interval = Math.floor(seconds / 3600);
    if (interval > 1) return `${interval} hours ago`;
    interval = Math.floor(seconds / 60);
    if (interval > 1) return `${interval} minutes ago`;
    return `${Math.floor(seconds)} seconds ago`;
  }

  function formatViewCount(count) {
    if (count < 1000) return count;
    if (count < 1_000_000) return (count / 1000).toFixed(1) + "K";
    if (count < 1_000_000_000) return (count / 1_000_000).toFixed(1) + "M";
    return (count / 1_000_000_000).toFixed(1) + "B";
  }

  return (
    <div
      className={`w-72 h-62 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl rounded-lg overflow-hidden shadow-lg border border-gray-200 transition-transform transform hover:scale-105 hover:shadow-xl duration-300 ${
        isDarkMode
          ? "bg-gray-800 text-gray-100 border-gray-600"
          : "bg-white text-gray-900"
      }`}
    >
      <Link to={`/Watch?v=${video?.id}`}>
        <img
          src={video.snippet.thumbnails.high.url}
          className="w-full h-80 object-cover"
          alt={video.snippet.title}
        />
        <div className="p-4">
          <h1 className="text-xl font-semibold truncate">
            {video.snippet.title}
          </h1>
          <div className="flex items-center gap-2 mt-2">
            <VscAccount
              className={`text-gray-600 ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            />
            <h3
              className={`text-sm font-medium hover:underline ${
                isDarkMode ? "text-gray-300" : "text-gray-900"
              }`}
            >
              {video.snippet.channelTitle}
            </h3>
          </div>
          <p className="mt-2 text-sm">
            <span
              className={`mr-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}
            >
              {formatViewCount(video.statistics.viewCount)} views
            </span>
            <span
              className={`ml-4 ${isDarkMode ? "text-white" : "text-black"}`}
            >
              {getTimeAgo(video.snippet.publishedAt)}
            </span>
          </p>
        </div>
      </Link>
    </div>
  );
}

export default VideoComponent;
