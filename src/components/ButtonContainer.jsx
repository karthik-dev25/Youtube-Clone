import ButtonItem from "./ButtonItem";

let buttonList = [
  "All",
  "Music",
  "Tamil Cinema",
  "News",
  "Live",
  "Jukebox",
  "React routers",
  "Albums",
  "Data Structure",
  "Sketch comedy",
  "Rapping",
  "Sports",
];
const ButtonContainer = () => {
  return (
    <div className="flex flex-wrap">
      {buttonList.map((button, index) => (
        <ButtonItem key={index} name={button} />
      ))}
    </div>
  );
};

export default ButtonContainer;
