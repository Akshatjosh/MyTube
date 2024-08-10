import { Link, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Search_Results() {
  const [searchParams] = useSearchParams();
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Extract the search query from the URL
  const searchQuery = searchParams.get("query") || "";

  useEffect(() => {
    const fetchSearchResults = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${searchQuery}&key=AIzaSyBxd27KF5gbH5bT7QD1dOlHWj5kTDA3ryo`
        );
        const data = await response.json();
        console.log(data.items);
        setSearchResults(data.items || "");
      } catch (error) {
        console.error("Error fetching search results:", error);
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
    <div className="p-4 mt-24 ">
      <h1
        className="text-2xl font-bold
      "
      >
        Search Results for {searchQuery}
      </h1>
      {isLoading ? (
        <div className="flex justify-center items-center w-screen h-screen">
          <p className="text-2xl font-semibold">Loading...</p>
        </div>
      ) : searchResults?.length > 0 ? (
        <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {searchResults.map((result, index) => (
            <Link to={`/Watch?v=${result.id?.videoId}`} key={index}>
              <li className="p-2 border rounded">
                <img
                  src={result.snippet.thumbnails.medium.url}
                  alt={result.snippet.title}
                  className="w-full h-auto rounded-md"
                />
                <h3 className="mt-2 text-lg font-semibold">
                  {result.snippet.title}
                </h3>
                <p className="text-sm">{result.snippet.description}</p>
              </li>
            </Link>
          ))}
        </ul>
      ) : (
        <div className="flex justify-center items-center w-screen h-screen">
          <p className="text-2xl font-semibold">No Result Found</p>
        </div>
      )}
    </div>
  );
}

export default Search_Results;
