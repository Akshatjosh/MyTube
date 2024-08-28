import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Logo() {
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);

  return (
    <div className="flex items-center gap-2">
      <Link
        to="/"
        className="flex items-center gap-2 transition-transform duration-300 hover:scale-105"
      >
        <img
          src="https://cdn.iconscout.com/icon/free/png-512/free-youtube-logo-icon-download-in-svg-png-gif-file-formats--social-media-pack-logos-icons-721990.png?f=webp&w=512"
          className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-lg shadow-md object-contain"
          alt="Logo"
        />
        <p
          className={`font-extrabold text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-wide ${
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
