import { useEffect, useState } from "react";
import { mostPopularApi } from "../utils/Constant";
import VideoComponent from "./VideoComponent";

function VideoContainer() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(mostPopularApi);
      const json = await data.json();
      console.log(json);
      setVideos(json.items);
    };

    fetchData();
  }, []);

  return (
    <div className="flex items-center  flex-wrap">
      {videos?.map((video, index) => (
        <VideoComponent key={index} video={video} />
      ))}
    </div>
  );
}

export default VideoContainer;
