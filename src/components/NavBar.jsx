import React, { memo, useContext } from "react";
import { NavLink, Outlet } from "react-router";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { DarkModeContext } from "../context/DarkModeContext";

const NavBar = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  return (
    <nav
      className={`flex h-[40px] justify-between px-3 ${
        darkMode ? "bg-[#2C3930] text-white" : "bg-[#A294F9]"
      }`}
    >
      <div className="flex py-2">
        <h1>myExpenseTraker</h1>
      </div>
      <ul className="flex gap-4 py-2">
        <li
          onClick={() => {
            setDarkMode(!darkMode);
          }}
        >
          {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
        </li>
        <li>
          <NavLink
            className={(e) => {
              return e.isActive ? "bg-green-400 p-2" : "p-2";
            }}
            to={"/"}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(e) => {
              return e.isActive ? "bg-green-400 p-2" : "p-2";
            }}
            to={"/chart"}
          >
            Chart
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </nav>
  );
};

export default memo(NavBar);
