import { Link } from "react-router-dom";
import { VscAccount } from "react-icons/vsc";
import { useSelector } from "react-redux";

function VideoComponent({ video }) {
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);

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
      className={`w-72  rounded-lg overflow-hidden shadow-md border transition-transform transform hover:scale-105 ${
        isDarkMode
          ? "bg-gray-800 text-gray-100 border-gray-600"
          : "bg-white text-gray-900 border-gray-300"
      }`}
    >
      <Link to={`/Watch?v=${video?.id}`}>
        <img
          src={video.snippet.thumbnails.high.url}
          className="w-full h-48 md:h-56 lg:h-64 object-cover"
          alt={video.snippet.title}
        />
        <div className="p-4">
          <h1 className="text-sm md:text-base font-semibold truncate">
            {video.snippet.title}
          </h1>
          <div className="flex items-center gap-2 mt-2">
            <VscAccount className="text-gray-600" />
            <h3
              className={`text-sm md:text-base font-medium ${
                isDarkMode ? "text-gray-300" : "text-gray-800"
              }`}
            >
              {video.snippet.channelTitle}
            </h3>
          </div>
          <p className="mt-2 text-sm md:text-base">
            <span className="mr-4">
              {formatViewCount(video.statistics.viewCount)} views
            </span>
            <span>{getTimeAgo(video.snippet.publishedAt)}</span>
          </p>
        </div>
      </Link>
    </div>
  );
}

export default VideoComponent;
