import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { VscAccount } from "react-icons/vsc";

function WatchPage() {
  const [searchParams] = useSearchParams();
  const [subscribe, setSubscribe] = useState(true);

  const [liked, setLiked] = useState(true);
  const [video, setVideo] = useState([]);
  const videoId = searchParams.get("v");

  // For videoInfo
  useEffect(() => {
    const getVideoInfo = async () => {
      const data = await fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=AIzaSyDbYEj0e2cr7znf6041f2bG1uHPLKRMPUA`
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
    setLiked(!liked);
  };

  return (
    <div className="flex w-full h-full mt-24">
      <div className="flex flex-col  rounded-md border-2 border-zinc-400 items-center justify-center ml-4">
        {videoId ? (
          <>
            <iframe
              className="w-full"
              height="315"
              src={`https://www.youtube.com/embed/${videoId}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            <div className="p-2">
              <h1 className="font-bold ml-2 text-xl">{video?.title}</h1>
              <div className="flex justify-between items-center gap-4">
                <div className="flex items-center gap-2 ml-2">
                  <span>
                    <VscAccount />
                  </span>
                  <h3 className="hover:underline cursor-pointer">
                    {video?.channelTitle}
                  </h3>
                </div>
                <button
                  className="px-3 py-1 bg-black text-white font-medium text-md rounded-full"
                  onClick={handleClick}
                >
                  {subscribe ? "Subscribe" : "Unsubscribe"}
                </button>
                <button
                  className=" px-3 py-1 bg-black text-white font-medium text-md rounded-full"
                  onClick={handleLiked}
                >
                  {liked ? "Liked Video 👍" : "Disliked Video 👎"}
                </button>
                <Link to={`/Playlist?p=${video?.channelId}`}>
                  <button className="mr-2 px-3 py-1 bg-black text-white font-medium text-md rounded-full">
                    PlayList
                  </button>
                </Link>
              </div>
            </div>
          </>
        ) : (
          <p>No video selected</p>
        )}
      </div>
    </div>
  );
}

export default WatchPage;
