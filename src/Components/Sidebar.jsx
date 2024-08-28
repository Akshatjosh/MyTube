import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaVideo,
  FaHistory,
  FaPlayCircle,
  FaClock,
  FaThumbsUp,
  FaStar,
  FaMusic,
  FaFilm,
  FaGamepad,
  FaShoppingCart,
  FaNewspaper,
  FaGlobe,
  FaTshirt,
  FaPodcast,
} from "react-icons/fa";

function Sidebar() {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const isDarkMode = useSelector((store) => store.darkMode.isDarkMode);

  return (
    <>
      {isMenuOpen && (
        <div
          className={`fixed top-16 left-0 w-64 h-[calc(100vh-4rem)] overflow-y-auto z-20 transition-transform transform ease-in-out duration-300 ${
            isDarkMode
              ? "bg-black text-white shadow-md"
              : "bg-gray-100 text-gray-800 shadow-md"
          }`}
        >
          <div className="flex flex-col items-start p-4 gap-4">
            <nav className="flex flex-col gap-3 w-full">
              <Link
                to="/"
                className="flex items-center p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                <FaHome className="mr-3" /> Home
              </Link>
              <Link
                to="/shorts"
                className="flex items-center p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                <FaVideo className="mr-3" /> Shorts
              </Link>
              <Link
                to="/subscriptions"
                className="flex items-center p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                <FaStar className="mr-3" /> Subscriptions
              </Link>
            </nav>

            <hr className="w-full border-t my-4" />

            <h1 className="text-lg font-semibold">You</h1>
            <nav className="flex flex-col gap-3 w-full">
              <Link
                to="/your-channel"
                className="flex items-center p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                <FaPlayCircle className="mr-3" /> Your Channel
              </Link>
              <Link
                to="/history"
                className="flex items-center p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                <FaHistory className="mr-3" /> History
              </Link>
              <Link
                to="/playlists"
                className="flex items-center p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                <FaClock className="mr-3" /> Playlists
              </Link>
              <Link
                to="/your-videos"
                className="flex items-center p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                <FaVideo className="mr-3" /> Your Videos
              </Link>
              <Link
                to="/watch-later"
                className="flex items-center p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                <FaClock className="mr-3" /> Watch Later
              </Link>
              <Link
                to="/liked-videos"
                className="flex items-center p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                <FaThumbsUp className="mr-3" /> Liked Videos
              </Link>
            </nav>

            <hr className="w-full border-t my-4" />

            <h1 className="text-lg font-semibold">Explore</h1>
            <nav className="flex flex-col gap-3 w-full">
              <Link
                to="/trending"
                className="flex items-center p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                <FaGlobe className="mr-3" /> Trending
              </Link>
              <Link
                to="/shopping"
                className="flex items-center p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                <FaShoppingCart className="mr-3" /> Shopping
              </Link>
              <Link
                to="/music"
                className="flex items-center p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                <FaMusic className="mr-3" /> Music
              </Link>
              <Link
                to="/films"
                className="flex items-center p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                <FaFilm className="mr-3" /> Films
              </Link>
              <Link
                to="/live"
                className="flex items-center p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                <FaVideo className="mr-3" /> Live
              </Link>
              <Link
                to="/gaming"
                className="flex items-center p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                <FaGamepad className="mr-3" /> Gaming
              </Link>
              <Link
                to="/news"
                className="flex items-center p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                <FaNewspaper className="mr-3" /> News
              </Link>
              <Link
                to="/sports"
                className="flex items-center p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                <FaStar className="mr-3" /> Sports
              </Link>
              <Link
                to="/courses"
                className="flex items-center p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                <FaClock className="mr-3" /> Courses
              </Link>
              <Link
                to="/fashion"
                className="flex items-center p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                <FaTshirt className="mr-3" /> Fashion
              </Link>
              <Link
                to="/podcasts"
                className="flex items-center p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                <FaPodcast className="mr-3" /> Podcasts
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}

export default Sidebar;
