function ButtonComponent({ name }) {
  return (
    <button
      className={`ml-4  mt-24  px-4 py-2 text-black rounded-xl bg-[#E5E5E5] hover:bg-black hover:text-white font-semibold`}
    >
      {name}
    </button>
  );
}

export default ButtonComponent;
