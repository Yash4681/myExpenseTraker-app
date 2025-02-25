import React, { memo, useContext } from "react";
import { NavLink, Outlet } from "react-router";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { DarkModeContext } from "../context/DarkModeContext";

const NavBar = ({ setActivePage }) => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  return (
    <nav
      className={`sticky top-0 z-40 flex h-[40px] justify-between px-3 ${
        darkMode ? "bg-[#2C3930] text-white" : "bg-[#A294F9]"
      }`}
    >
      <div className="flex py-2">
        <h1>myExpenseTraker</h1>
      </div>
      <ul className="flex gap-4 py-2">
        <li
          className="hover:cursor-pointer"
          onClick={() => {
            setDarkMode(!darkMode);
          }}
        >
          {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
        </li>
        <li
          className="px-2 hover:cursor-pointer"
          onClick={() => setActivePage("home")}
        >
          {/* <NavLink
            className={(e) => {
              return e.isActive ? "bg-green-400 p-2" : "p-2";
            }}
            onClick={() => setActivePage("home")}
          > */}
          Home
          {/* </NavLink> */}
        </li>
        <li
          className="px-2 hover:cursor-pointer"
          onClick={() => setActivePage("chart")}
        >
          {/* <NavLink
            className={(e) => {
              return e.isActive ? "bg-green-400 p-2" : "p-2";
            }}
            onClick={() => setActivePage("chart")}
          > */}
          Chart
          {/* </NavLink> */}
        </li>
      </ul>
      <Outlet />
    </nav>
  );
};

export default memo(NavBar);
