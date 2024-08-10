import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/AppSlice";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import Logo from "./Logo";
import { useEffect, useRef, useState } from "react";
import { suggestionApi } from "../utils/Constant";
import LoadingBar from "react-top-loading-bar";
import { useLocation, useNavigate } from "react-router-dom";

function Header() {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  // top loading bar
  const ref = useRef(0);
  useEffect(() => {
    ref.current.continuousStart();
    const timer = setTimeout(() => {
      ref.current.complete();
    }, 2000);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  // SearchSuggestionApi
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
    }, 200); // Delay the hiding of suggestions
  };

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/search-results?query=${searchQuery}`);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
    setShowSuggestion(false); // Hide suggestions
    navigate(`/search-results?query=${suggestion}`);
  };

  return (
    <>
      <LoadingBar style={{ color: "#ff0000" }} ref={ref} />
      <div className="fixed top-0 left-0 w-full p-2 shadow-lg bg-white z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <GiHamburgerMenu className="cursor-pointer" onClick={handleOpen} />
            <Logo />
          </div>
          <div className="flex items-center relative">
            <input
              type="text"
              value={searchQuery}
              placeholder="Search"
              className="w-48 h-12 outline-none pl-4 pr-2 text-black rounded-l-full border-2 border-gray-100"
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSuggestion(true)}
              onBlur={handleInputBlur}
            />
            <button
              className="flex items-center justify-center w-12 h-12 border-l-2 border-gray-100 rounded-r-full bg-[#F0F0F0]"
              onClick={handleSearch}
            >
              <CiSearch className="w-5 h-5" />
            </button>
          </div>
          {showSuggestion && (
            <div
              className={`${
                suggestions.length > 0 ? "bg-white" : ""
              } px-2 py-2 left-1/4 absolute top-16 w-[37rem] rounded-md text-black`}
            >
              <ul>
                {suggestions.map((elem, index) => (
                  <li
                    key={index}
                    className="px-5 py-2 hover:bg-gray-100 cursor-pointer"
                    onMouseDown={() => handleSuggestionClick(elem)}
                  >
                    🔍 {elem}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="flex items-center gap-2 mr-2">
            <img
              className="w-12 h-12 rounded-full"
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
