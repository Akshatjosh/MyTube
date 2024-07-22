import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function PlaylistList() {
  const [searchParams] = useSearchParams();
  const [playlists, setPlaylists] = useState([]);
  const channelId = searchParams.get("p");

  useEffect(() => {
    const fetchPlaylists = async () => {
      const response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=${channelId}&maxResults=50&key=AIzaSyDbYEj0e2cr7znf6041f2bG1uHPLKRMPUA`
      );
      const json = await response.json();
      console.log(json.items);
      setPlaylists(json.items);
    };

    fetchPlaylists();
  }, []);

  return (
    <div className="  mt-24 ml-2 w-full flex justify-center items-center">
      <div className="flex  flex-wrap gap-4  items-center">
        {playlists.length > 0 ? (
          playlists.map((playlist, index) => (
            <div
              key={index}
              className="flex ml-2  gap-4  shadow-lg rounded-xl flex-col justify-center items-center mb-4"
            >
              <img
                src={playlist.snippet.thumbnails.high.url}
                alt={playlist.snippet.title}
                className="w-full h-42"
              />

              <div className="flex flex-col items-center gap-2">
                <h1 className="text-md font-bold ">{playlist.snippet.title}</h1>
                <p className="text-sm">{playlist.snippet.channelTitle}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No playlists found</p>
        )}
      </div>
    </div>
  );
}

export default PlaylistList;
