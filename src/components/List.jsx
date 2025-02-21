import React, { useContext } from "react";
import ListItem from "./ListItem";
import TotalExpence from "./TotalExpence";
import { BalanceContext } from "../context/BalanceContext";
import { DarkModeContext } from "../context/DarkModeContext";

const List = () => {
  const { state, dispatch } = useContext(BalanceContext);
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div
      className={`container flex py-2 flex-col justify-between w-1/2 h-[80vh] rounded-2xl ${
        darkMode ? "bg-[#DCD7C9]" : "bg-[#CDC1FF]"
      } my-5 mx-auto`}
    >
      <div>
        <h2 className="flex justify-center py-4 font-serif text-lg font-bold">
          All your entries
        </h2>
        {state.entries.map((entry) => {
          return (
            <ListItem
              key={entry.id}
              Amount={entry.amount}
              Description={entry.description}
              id={entry.id}
              Category={entry.category}
              Type={entry.type}
              Date={entry.date}
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
