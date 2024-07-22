import ButtonComponent from "./ButtonComponent";

function ButtonList() {
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
    <div className="flex items-center justify-center gap-2">
      {items.map((elem, index) => (
        <ButtonComponent key={index} name={elem} />
      ))}
    </div>
  );
}

export default ButtonList;
