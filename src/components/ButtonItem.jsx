const ButtonItem = ({ name }) => {
  return (
    <div className="p-1 px-2 m-2 bg-gray-200 rounded-lg">
      <p className="text-xs font-medium">{name}</p>
    </div>
  );
};

export default ButtonItem;
