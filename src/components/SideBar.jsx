import { useSelector } from "react-redux";

const SideBar = () => {
  const isMenuOpen = useSelector((state) => state.app.isMenuOpen);
  if (isMenuOpen) return null;
  return <div>SideBar</div>;
};

export default SideBar;
