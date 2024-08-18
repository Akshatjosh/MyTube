import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";

function PlaylistList() {
  const [searchParams] = useSearchParams();
  const [playlists, setPlaylists] = useState([]);
  const channelId = searchParams.get("p");

  // Accessing dark mode state from the Redux store
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);

  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const response = await fetch(
          `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=${channelId}&maxResults=50&key=AIzaSyBxd27KF5gbH5bT7QD1dOlHWj5kTDA3ryo`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const json = await response.json();
        setPlaylists(json.items || []);
      } catch (error) {
        console.error("Error fetching playlists:", error);
        setPlaylists([]); // Optionally, handle error state if necessary
      }
    };

    if (channelId) {
      fetchPlaylists();
    }
  }, [channelId]);

  return (
    <div
      className={`p-4 min-h-screen ${
        isDarkMode ? "bg-gray-900" : "bg-gray-100"
      }`}
    >
      <h1
        className={`text-3xl font-bold mb-6 text-center ${
          isDarkMode ? "text-gray-100" : "text-gray-900"
        }`}
      >
        Playlists
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {playlists.length > 0 ? (
          playlists.map((playlist) => (
            <div
              key={playlist.id}
              className={`${
                isDarkMode ? "bg-gray-800" : "bg-white"
              } rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg`}
            >
              <img
                src={playlist.snippet.thumbnails.high.url}
                alt={playlist.snippet.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2
                  className={`text-lg font-semibold ${
                    isDarkMode ? "text-gray-100" : "text-gray-900"
                  }`}
                >
                  {playlist.snippet.title}
                </h2>
                <p
                  className={`text-sm ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {playlist.snippet.channelTitle}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p
            className={`text-center ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            No playlists found
          </p>
        )}
      </div>
    </div>
  );
}

export default PlaylistList;
