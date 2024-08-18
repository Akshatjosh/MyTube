import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/AppSlice";
import { toggleDarkMode } from "../utils/darkModeSlice";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import Logo from "./Logo";
import { useEffect, useRef, useState } from "react";
import { suggestionApi } from "../utils/Constant";
import LoadingBar from "react-top-loading-bar";
import { useLocation, useNavigate } from "react-router-dom";
import { MdDarkMode, MdLightMode } from "react-icons/md";

function Header() {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);
  const ref = useRef(null);

  useEffect(() => {
    ref.current?.continuousStart();
    const timer = setTimeout(() => {
      ref.current?.complete();
    }, 2000);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  useEffect(() => {
    const timer = setTimeout(() => search(), 200);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  const search = async () => {
    const response = await fetch(suggestionApi + searchQuery);
    const json = await response.json();
    setSuggestions(json[1]);
  };

  const handleOpen = () => {
    dispatch(toggleMenu());
  };

  const handleInputBlur = () => {
    setTimeout(() => {
      setShowSuggestion(false);
    }, 200);
  };

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/search-results?query=${searchQuery}`);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
    setShowSuggestion(false);
    navigate(`/search-results?query=${suggestion}`);
  };

  const toggleDarkModeHandler = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <>
      <LoadingBar style={{ backgroundColor: "#ff0000" }} ref={ref} />
      <div
        className={`fixed top-0 left-0 w-full p-4 shadow-md z-50 ${
          isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <GiHamburgerMenu
              className="text-2xl cursor-pointer hover:text-gray-600"
              onClick={handleOpen}
            />
            <Logo />
          </div>
          <div className="flex items-center relative w-1/2 max-w-xl">
            <input
              type="text"
              value={searchQuery}
              placeholder="Search"
              className={`w-full h-12 pl-4 pr-16 text-black border border-gray-300 rounded-full focus:border-gray-500 focus:ring focus:ring-gray-200 focus:outline-none transition duration-200 ${
                isDarkMode
                  ? "bg-gray-800 text-white border-gray-700"
                  : "bg-gray-100"
              }`}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSuggestion(true)}
              onBlur={handleInputBlur}
            />
            <button
              className={`absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center justify-center w-12 h-12 rounded-full transition-colors duration-300 ${
                isDarkMode
                  ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
              onClick={handleSearch}
            >
              <CiSearch className="w-5 h-5" />
            </button>
            {showSuggestion && suggestions.length > 0 && (
              <div
                className={`absolute top-full mt-2 w-full rounded-lg shadow-lg z-10 ${
                  isDarkMode
                    ? "bg-gray-800 text-white"
                    : "bg-white text-gray-900"
                }`}
              >
                <ul className="max-h-60 overflow-y-auto">
                  {suggestions.map((elem, index) => (
                    <li
                      key={index}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onMouseDown={() => handleSuggestionClick(elem)}
                    >
                      🔍 {elem}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={toggleDarkModeHandler}
              className={`p-2 rounded-full transition-colors duration-300 flex items-center justify-center ${
                isDarkMode
                  ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  : "bg-gray-200 text-black hover:bg-gray-300"
              }`}
            >
              <div className={`spin ${isDarkMode ? "spin-animate" : ""}`}>
                {isDarkMode ? (
                  <MdLightMode size={24} />
                ) : (
                  <MdDarkMode size={24} />
                )}
              </div>
            </button>
            <img
              className="w-12 h-12 rounded-full border-2 border-gray-200"
              src="https://yt3.ggpht.com/ytc/AIdro_l5LLkTg-D-orAjIv3QnONs9TM45y_AotBXm2mRPRn4eltxYktPs1EaE6EeEfGMXSfLHQ=s88-c-k-c0x00ffffff-no-rj"
              alt="user"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
