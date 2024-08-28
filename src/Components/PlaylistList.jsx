import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react"; // Import useState and useEffect

function PlaylistList() {
  const [searchParams] = useSearchParams();
  const [playlists, setPlaylists] = useState([]);
  const channelId = searchParams.get("p");

  // Access dark mode state from the Redux store
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
      className={`mt-8 flex flex-col items-center p-4 ${
        isDarkMode ? "bg-gray-900" : "bg-gray-100"
      } min-h-screen transition-colors duration-300`}
    >
      <h1
        className={`text-3xl font-bold mb-6 ${
          isDarkMode ? "text-gray-100" : "text-gray-900"
        }`}
      >
        Playlists
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        {playlists.length > 0 ? (
          playlists.map((playlist) => (
            <div
              key={playlist.id}
              className={`rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl ${
                isDarkMode
                  ? "bg-gray-800 text-gray-100"
                  : "bg-white text-gray-900"
              }`}
            >
              <img
                src={playlist.snippet.thumbnails.high.url}
                alt={playlist.snippet.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold truncate">
                  {playlist.snippet.title}
                </h2>
                <p className="text-sm truncate">
                  {playlist.snippet.channelTitle}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-lg font-semibold mt-4">
            No playlists found
          </p>
        )}
      </div>
    </div>
  );
}

export default PlaylistList;
