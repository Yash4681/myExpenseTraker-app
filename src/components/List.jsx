import React, { useContext } from "react";
import ListItem from "./ListItem";
import TotalExpence from "./TotalExpence";
import { BalanceContext } from "../context/BalanceContext";

const List = () => {
  const { state, dispatch } = useContext(BalanceContext);

  return (
    <div className="container flex py-2 flex-col justify-between w-1/2 h-[80vh] rounded-2xl bg-slate-200 my-5 mx-auto">
      <div>
        <h2 className="flex justify-center py-4 font-bold">All your entries</h2>
        {state.entries.map((entry) => {
          return (
            <ListItem
              key={entry.id}
              Amount={entry.amount}
              Description={entry.description}
              id={entry.id}
              Category={entry.category}
              dispatch={dispatch}
            />
          );
        })}
      </div>
      <TotalExpence />
    </div>
  );
};

export default List;
