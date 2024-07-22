import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Sidebar() {
  const isMenuOpen = useSelector((store) => store.app?.isMenuOpen);

  return (
    <>
      {isMenuOpen && (
        <div className=" shadow-lg fixed top-16 left-0 w-48 h-[calc(100vh-4rem)] bg-[#FFFFFF] rounded-xl text-black overflow-y-auto z-20">
          <div className="flex flex-col items-start p-4 gap-4">
            <nav className="flex flex-col gap-2 w-full">
              <Link
                to="/"
                className="font-semibold hover:text-black hover:bg-zinc-400 p-2 rounded"
              >
                Home
              </Link>
              <Link
                to="/shorts"
                className="font-semibold hover:text-black hover:bg-zinc-400 p-2 rounded"
              >
                Shorts
              </Link>
              <Link
                to="/subscriptions"
                className="font-semibold hover:text-black hover:bg-zinc-400 p-2 rounded"
              >
                Subscriptions
              </Link>
            </nav>
            <hr className="w-full border-2 border-zinc-100" />
            <h1 className="text-lg font-semibold">You</h1>
            <nav className="flex flex-col gap-2 w-full">
              <Link
                to="/your-channel"
                className="font-semibold hover:text-black hover:bg-zinc-400 p-2 rounded"
              >
                Your Channel
              </Link>
              <Link
                to="/history"
                className="font-semibold hover:text-black hover:bg-zinc-400 p-2 rounded"
              >
                History
              </Link>
              <Link
                to="/Playlists"
                className="font-semibold hover:text-black hover:bg-zinc-400 p-2 rounded"
              >
                PlayLists
              </Link>
              <Link
                to="/your-videos"
                className="font-semibold hover:text-black hover:bg-zinc-400 p-2 rounded"
              >
                Your Videos
              </Link>
              <Link
                to="/watch-later"
                className="font-semibold hover:text-black hover:bg-zinc-400 p-2 rounded"
              >
                Watch Later
              </Link>
              <Link
                to="/liked-videos"
                className="font-semibold hover:text-black hover:bg-zinc-400 p-2 rounded"
              >
                Liked Videos
              </Link>
            </nav>
            <hr className="w-full border-2 border-zinc-100" />
            <h1 className="text-lg font-semibold">Explore</h1>
            <nav className="flex flex-col gap-2 w-full">
              <Link
                to="/trending"
                className="font-semibold hover:text-black hover:bg-zinc-400 p-2 rounded"
              >
                Trending
              </Link>
              <Link
                to="/shopping"
                className="font-semibold hover:text-black hover:bg-zinc-400 p-2 rounded"
              >
                Shopping
              </Link>
              <Link
                to="/music"
                className="font-semibold hover:text-black hover:bg-zinc-400 p-2 rounded"
              >
                Music
              </Link>
              <Link
                to="/films"
                className="font-semibold hover:text-black hover:bg-zinc-400 p-2 rounded"
              >
                Films
              </Link>
              <Link
                to="/live"
                className="font-semibold hover:text-black hover:bg-zinc-400 p-2 rounded"
              >
                Live
              </Link>
              <Link
                to="/gaming"
                className="font-semibold hover:text-black hover:bg-zinc-400 p-2 rounded"
              >
                Gaming
              </Link>
              <Link
                to="/news"
                className="font-semibold hover:text-black hover:bg-zinc-400 p-2 rounded"
              >
                News
              </Link>
              <Link
                to="/sports"
                className="font-semibold hover:text-black hover:bg-zinc-400 p-2 rounded"
              >
                Sports
              </Link>
              <Link
                to="/courses"
                className="font-semibold hover:text-black hover:bg-zinc-400 p-2 rounded"
              >
                Courses
              </Link>
              <Link
                to="/fashion"
                className="font-semibold hover:text-black hover:bg-zinc-400 p-2 rounded"
              >
                Fashion
              </Link>
              <Link
                to="/podcasts"
                className="font-semibold hover:text-black hover:bg-zinc-400 p-2 rounded"
              >
                Podcasts
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}

export default Sidebar;
