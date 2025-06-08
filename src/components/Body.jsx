import React from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router";
import { useSelector } from "react-redux";

const Body = () => {
  const isMenuOpen = useSelector((state) => state.app.isMenuOpen);
  return (
    <div className="flex">
      {isMenuOpen && <SideBar />}
      <Outlet/>
    </div>
  );
};

export default Body;
