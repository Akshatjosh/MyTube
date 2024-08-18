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
        isDarkMode ? "bg-gray-800" : "bg-gray-100"
      } transition-colors duration-300`}
    >
      <div className="flex  gap-4 py-4 px-2">
        {items.map((elem, index) => (
          <ButtonComponent key={index} name={elem} />
        ))}
      </div>
    </div>
  );
}

export default ButtonList;
