import { useSelector } from "react-redux";

function ButtonComponent({ name }) {
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);

  return (
    <button
      className={`min-w-max px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold shadow-lg transform transition-all duration-300 hover:scale-105 ${
        isDarkMode
          ? "bg-gradient-to-r from-gray-700 to-gray-900 text-white hover:from-gray-600 hover:to-gray-800"
          : "bg-gradient-to-r from-gray-200 to-gray-400 text-black hover:from-gray-300 hover:to-gray-500"
      }`}
      style={{
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
      }}
    >
      {name}
    </button>
  );
}

export default ButtonComponent;
