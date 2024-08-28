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
        isDarkMode ? "bg-black text-white" : "bg-gray-100 text-gray-900"
      } transition-colors duration-300 py-4 px-2`}
    >
      <div className="flex overflow-x-auto space-x-4 py-2 px-4 scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-gray-500 hover:scrollbar-thumb-gray-700 scrollbar-track-gray-300 dark:scrollbar-track-gray-700 dark:scrollbar-thumb-gray-400 dark:hover:scrollbar-thumb-gray-500">
        {items.map((elem, index) => (
          <ButtonComponent key={index} name={elem} />
        ))}
      </div>
    </div>
  );
}

export default ButtonList;
