import { Link, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { VscAccount } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { likeVideo, unlikeVideo } from "../utils/likedVideosSlice";
import LikedVideos from "./LikedVideos";

function WatchPage() {
  const [searchParams] = useSearchParams();
  const [subscribe, setSubscribe] = useState(true);
  const [video, setVideo] = useState({});
  const [error, setError] = useState(null);
  const videoId = searchParams.get("v");

  const dispatch = useDispatch();
  const likedVideos = useSelector((state) => state.likedVideos);
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);
  const isLiked = likedVideos.some((likedVideo) => likedVideo.id === videoId);

  useEffect(() => {
    const getVideoInfo = async () => {
      try {
        if (!videoId) throw new Error("No video ID provided");

        const response = await fetch(
          `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoId}&key=AIzaSyBxd27KF5gbH5bT7QD1dOlHWj5kTDA3ryo`
        );

        if (!response.ok)
          throw new Error(`HTTP error! status: ${response.status}`);

        const json = await response.json();

        if (!json.items || json.items.length === 0)
          throw new Error("No video data found");

        setVideo(json.items[0]?.snippet || {});
        setError(null); // Clear any previous errors
      } catch (error) {
        console.error("Error fetching video data:", error);
        setError(error.message);
      }
    };

    if (videoId) getVideoInfo();
  }, [videoId]);

  const handleClick = () => setSubscribe(!subscribe);

  const handleLiked = () => {
    if (isLiked) {
      dispatch(unlikeVideo({ id: videoId }));
    } else {
      dispatch(likeVideo({ id: videoId, ...video }));
    }
  };

  return (
    <div
      className={`flex flex-col lg:flex-row gap-8 p-4 mt-8 ${
        isDarkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Video Player */}
      <div
        className={`flex-1 rounded-lg border ${
          isDarkMode ? "border-gray-700 bg-black" : "border-gray-300 bg-white"
        } shadow-lg`}
      >
        {videoId ? (
          <>
            {error ? (
              <div className="flex justify-center items-center h-64">
                <p className="text-xl font-semibold">{error}</p>
              </div>
            ) : (
              <>
                <iframe
                  className="w-full rounded-t-lg"
                  height="450"
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title={video?.title || "YouTube video player"}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
                <div className="p-4">
                  <h1 className="text-2xl font-bold mb-2">{video?.title}</h1>
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                    <div className="flex items-center gap-2">
                      <VscAccount className="text-xl" />
                      <h3 className="text-lg font-semibold hover:underline cursor-pointer">
                        {video?.channelTitle}
                      </h3>
                    </div>
                    <div className="flex flex-col md:flex-row gap-2 md:gap-4 mt-4 md:mt-0">
                      <button
                        className={`px-4 py-2 font-medium rounded-full ${
                          subscribe
                            ? "bg-red-600 text-white"
                            : "bg-gray-600 text-white"
                        } transition-transform transform hover:scale-105`}
                        onClick={handleClick}
                      >
                        {subscribe ? "Subscribed" : "Subscribe"}
                      </button>
                      <button
                        className={`px-4 py-2 font-medium rounded-full ${
                          isLiked
                            ? "bg-blue-600 text-white"
                            : "bg-gray-600 text-white"
                        } transition-transform transform hover:scale-105`}
                        onClick={handleLiked}
                      >
                        {isLiked ? "Dislike 👎" : "Like 👍"}
                      </button>
                      <Link to={`/Playlist?p=${video?.channelId}`}>
                        <button className="px-4 py-2 font-medium rounded-full bg-green-600 text-white transition-transform transform hover:scale-105">
                          Playlist
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            )}
          </>
        ) : (
          <div className="flex justify-center items-center h-64">
            <p className="text-xl font-semibold">No video selected</p>
          </div>
        )}
      </div>
      {/* Liked Videos Sidebar */}
      <div
        className={`rounded-lg border ${
          isDarkMode ? "border-gray-700 bg-black" : "border-gray-300 bg-white"
        } shadow-lg w-1/3`}
      >
        <LikedVideos />
      </div>
    </div>
  );
}

export default WatchPage;
