import React from "react";
import { NavLink, Outlet } from "react-router";

const NavBar = () => {
  return (
    <nav className="flex justify-between px-3 bg-slate-300">
      <div className="flex py-2">
        <h1>myExpenseTraker</h1>
      </div>
      <ul className="flex gap-4 py-2">
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
            to={"/cart"}
          >
            Chart
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </nav>
  );
};

export default NavBar;
