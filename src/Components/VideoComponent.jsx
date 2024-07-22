import { Link } from "react-router-dom";
import { VscAccount } from "react-icons/vsc";
function VideoComponent({ video }) {
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
    if (count < 1_000_000) return (count / 1000).toFixed(1) + " K";
    if (count < 1_000_000_000) return (count / 1_000_000).toFixed(1) + " M";
    return (count / 1_000_000_000).toFixed(1) + " B";
  }
  return (
    <div className="ml-4 mt-4 shadow-lg ">
      <div className="w-72 h-62 rounded-lg border-2 border-zinc-400  cursor-pointer ">
        <Link to={`/Watch?v=${video?.id}`}>
          <img
            src={video.snippet.thumbnails.medium.url}
            className="w-full h-32"
            alt={video.snippet.title}
          />
          <div className="ml-2">
            <h1 className="text-md font-bold">{video.snippet.title}</h1>
            <div className="flex items-center gap-2">
              <span> {<VscAccount />}</span>
              <h3 className="text-md font-semibold ml-2 hover:underline">
                {video.snippet.channelTitle}
              </h3>
            </div>

            <p className="font-medium  mb-4">
              {"Views: "} {formatViewCount(video.statistics.viewCount)}
              <span className="ml-4 text-sm font-medium ">
                {"Publish: "}
                {getTimeAgo(video.snippet.publishedAt)}{" "}
              </span>
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default VideoComponent;
