import React, { useContext } from "react";
import { BalanceContext } from "../context/BalanceContext";

const TotalBalance = () => {
  const { state } = useContext(BalanceContext);
  return (
    <div className="bg-slate-800 absolute top-2 left-5 px-5 py-3 flex-wrap text-white  rounded-tl-lg rounded-br-lg">
      <h1 className="font-bold font-serif">Total Balance</h1>
      <p className="text-center font-mono">{state.totalBalance}</p>
    </div>
  );
};

export default TotalBalance;
