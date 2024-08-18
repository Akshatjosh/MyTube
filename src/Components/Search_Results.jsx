import { Link, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Search_Results() {
  const [searchParams] = useSearchParams();
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const searchQuery = searchParams.get("query") || "";

  useEffect(() => {
    const fetchSearchResults = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${searchQuery}&key=AIzaSyBxd27KF5gbH5bT7QD1dOlHWj5kTDA3ryo`
        );
        const data = await response.json();
        setSearchResults(data.items || []);
      } catch (error) {
        console.error("Error fetching search results:", error);
        setSearchResults([]);
      } finally {
        setIsLoading(false);
      }
    };

    if (searchQuery) {
      fetchSearchResults();
    } else {
      setSearchResults([]);
      setIsLoading(false);
    }
  }, [searchQuery]);

  return (
    <div className="p-4 bg-gray-100 dark:bg-black min-h-screen">
      <h1 className="text-3xl font-extrabold mb-6 text-center text-gray-900 dark:text-gray-100">
        Search Results for{" "}
        <span className="text-red-600 dark:text-red-400">{searchQuery}</span>
      </h1>
      {isLoading ? (
        <div className="flex justify-center items-center w-full h-64">
          <p className="text-lg font-semibold text-gray-600 dark:text-gray-300">
            Loading...
          </p>
        </div>
      ) : searchResults.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {searchResults.map((result) => (
            <Link
              to={`/Watch?v=${result.id?.videoId}`}
              key={result.id?.videoId}
              className="group block bg-white dark:bg-black rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              <img
                src={result.snippet.thumbnails.medium.url}
                alt={result.snippet.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 truncate">
                  {result.snippet.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
                  {result.snippet.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center w-full h-64">
          <p className="text-lg font-semibold text-gray-600 dark:text-gray-300">
            No Results Found
          </p>
        </div>
      )}
    </div>
  );
}

export default Search_Results;
