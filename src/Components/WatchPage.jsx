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
  const videoId = searchParams.get("v");

  const dispatch = useDispatch();
  const likedVideos = useSelector((state) => state.likedVideos);
  const isLiked = likedVideos.some((likedVideo) => likedVideo.id === videoId);

  // Fetch video information
  useEffect(() => {
    const getVideoInfo = async () => {
      const data = await fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=AIzaSyBxd27KF5gbH5bT7QD1dOlHWj5kTDA3ryo`
      );
      const json = await data.json();
      setVideo(json.items[0]?.snippet);
    };
    getVideoInfo();
  }, [videoId]);

  const handleClick = () => {
    setSubscribe(!subscribe);
  };

  const handleLiked = () => {
    if (isLiked) {
      dispatch(unlikeVideo({ id: videoId }));
    } else {
      dispatch(likeVideo({ id: videoId, ...video }));
    }
  };

  return (
    <div className="flex justify-between items-start w-full h-full mt-24 px-4">
      <div className="flex flex-col w-2/3 rounded-md border-2 border-zinc-400 items-center justify-center">
        {videoId ? (
          <>
            <iframe
              className="w-full"
              height="450"
              src={`https://www.youtube.com/embed/${videoId}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <div className="p-4">
              <h1 className="font-bold text-xl">{video?.title}</h1>
              <div className="flex justify-between items-center mt-4 gap-4">
                <div className="flex items-center gap-2">
                  <span>
                    <VscAccount />
                  </span>
                  <h3 className="hover:underline cursor-pointer">
                    {video?.channelTitle}
                  </h3>
                </div>
                <button
                  className="px-4 py-2 bg-black text-white font-medium rounded-full"
                  onClick={handleClick}
                >
                  {subscribe ? "Subscribe" : "Unsubscribe"}
                </button>
                <button
                  className="px-4 py-2 bg-black text-white font-medium rounded-full"
                  onClick={handleLiked}
                >
                  {isLiked ? "Dislike Video 👎" : "Like Video 👍"}
                </button>
                <Link to={`/Playlist?p=${video?.channelId}`}>
                  <button className="px-4 py-2 bg-black text-white font-medium rounded-full">
                    Playlist
                  </button>
                </Link>
              </div>
            </div>
          </>
        ) : (
          <p>No video selected</p>
        )}
      </div>
      <div className="w-1/3">
        <LikedVideos />
      </div>
    </div>
  );
}

export default WatchPage;
