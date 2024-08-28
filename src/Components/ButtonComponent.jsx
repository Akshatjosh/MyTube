import { useSelector } from "react-redux";

function ButtonComponent({ name }) {
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);

  return (
    <button
      className={`min-w-max px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold shadow-lg transform transition-all duration-300 hover:scale-105 ${
        isDarkMode
          ? "bg-gray-700 text-white hover:bg-gray-800"
          : "bg-gray-300 text-black hover:bg-gray-100"
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
