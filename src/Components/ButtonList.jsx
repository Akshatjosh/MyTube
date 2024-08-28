import { useSelector } from "react-redux";
import ButtonComponent from "./ButtonComponent";

function ButtonList() {
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);

  const items = [
    "All",
    "Disha Vkani",
    "Live",
    "Music",
    "News",
    "Software Engineering",
    "Data Structures",
    "Recruitment",
    "Action Thrillers",
    "Gaming",
    "Mixes",
  ];

  return (
    <div
      className={`relative ${
        isDarkMode ? "bg-black text-white" : "bg-white text-black"
      } transition-colors duration-300 py-4 px-2`}
    >
      <div
        className={`ml-4 flex overflow-x-auto space-x-4 py-2 px-4 ${
          isDarkMode
            ? "scrollbar-thin scrollbar-thumb-gray-500 hover:scrollbar-thumb-gray-700 scrollbar-track-gray-700"
            : "scrollbar-thin scrollbar-thumb-gray-300 hover:scrollbar-thumb-gray-500 scrollbar-track-gray-100"
        }`}
        style={{ scrollbarWidth: "thin" }} // For Firefox
      >
        {items.map((elem, index) => (
          <ButtonComponent key={index} name={elem} />
        ))}
      </div>
    </div>
  );
}

export default ButtonList;
