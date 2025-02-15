import React, { useContext } from "react";
import { BalanceContext } from "../context/BalanceContext";

const TotalExpence = () => {
  const { state } = useContext(BalanceContext);
  return (
    <div className="bg-slate-800 w-1/2 mx-auto p-2 text-center text-white font-bold font-serif rounded-tl-lg rounded-br-lg">
      <label>Total Expense : {state.totalExpence}</label>
    </div>
  );
};

export default TotalExpence;
