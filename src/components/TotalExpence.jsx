import React, { useContext } from "react";
import { BalanceContext } from "../context/BalanceContext";
import { DarkModeContext } from "../context/DarkModeContext";

const TotalExpence = () => {
  const { state } = useContext(BalanceContext);
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div
      className={`${
        darkMode ? "bg-[#2C3930]" : "bg-slate-800 "
      } w-1/2 mx-auto mt-5 p-2 text-center text-white font-bold font-serif rounded-tl-lg rounded-br-lg`}
    >
      <label>Total Spent Amount : {state.totalExpence}</label>
    </div>
  );
};

export default TotalExpence;
