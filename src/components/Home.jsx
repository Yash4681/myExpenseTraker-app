import React, { useContext } from "react";
import List from "./List";
import TotalBalance from "./TotalBalance";
import AddExpenceDrawer from "./AddExpenceDrawer";
import { DarkModeContext } from "../context/DarkModeContext";

const Home = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div
      className={`h-screen flex relative ${
        darkMode ? "bg-[#3F4F44]" : "bg-[#F5EFFF]"
      }`}
    >
      <List />
      <TotalBalance />
      <AddExpenceDrawer />
    </div>
  );
};

export default Home;
