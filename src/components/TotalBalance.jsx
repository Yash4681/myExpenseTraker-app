import React, { useContext } from "react";
import { BalanceContext } from "../context/BalanceContext";
import { DarkModeContext } from "../context/DarkModeContext";

const TotalBalance = () => {
  const { state } = useContext(BalanceContext);
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div
      className={`${
        darkMode ? "bg-[#DCD7C9] text-[#A27B5C]" : "bg-[#CDC1FF]"
      } absolute top-5 left-5 px-5 py-3  flex-wrap rounded-tl-lg rounded-br-lg`}
    >
      <h1 className="font-bold font-serif">Total Balance</h1>
      <p className="text-center font-mono">{state.totalBalance}</p>
    </div>
  );
};

export default TotalBalance;
