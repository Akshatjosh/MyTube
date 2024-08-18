import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "../App.css"; // Import the CSS file

function Logo() {
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode); // Get dark mode state from Redux

  return (
    <div className="logo-container">
      <Link to={"/"} className="flex items-center gap-2">
        <img
          src="https://cdn.iconscout.com/icon/free/png-512/free-youtube-logo-icon-download-in-svg-png-gif-file-formats--social-media-pack-logos-icons-721990.png?f=webp&w=512"
          className="w-10 h-10"
          alt="Logo"
        />
        <p
          className={`font-bold text-sm ${
            isDarkMode ? "text-white" : "text-black"
          }`}
        >
          MyTube
        </p>
      </Link>
    </div>
  );
}

export default Logo;
