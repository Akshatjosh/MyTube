import { useSelector } from "react-redux";

function ButtonComponent({ name }) {
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode); // Access dark mode state

  return (
    <button
      className={`ml-2 mt-4 px-6 py-2 rounded-lg font-semibold shadow-md transform transition-all duration-300 hover:scale-105 ${
        isDarkMode
          ? "bg-gray-700 text-white hover:bg-gray-600"
          : "bg-gray-200 text-black hover:bg-gray-300"
      }`}
      style={{
        whiteSpace: "nowrap", // Prevent text from wrapping
        overflow: "hidden", // Hide any overflow
      }}
    >
      {name}
    </button>
  );
}

export default ButtonComponent;
