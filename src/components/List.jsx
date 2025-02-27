import React, { useContext } from "react";
import ListItem from "./ListItem";
import TotalExpence from "./TotalExpence";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { BalanceContext } from "../context/BalanceContext";
import { DarkModeContext } from "../context/DarkModeContext";
import { IconButton, Pagination, Typography } from "@mui/material";

const List = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const { state, dispatch } = useContext(BalanceContext);
  const { darkMode } = useContext(DarkModeContext);
  const [page, setPage] = React.useState(months[new Date().getMonth()]);
  const [index, setIndex] = React.useState(new Date().getMonth());
  const handleChange = (value) => {
    if (value === "+") {
      setPage(months[index + 1]);
      setIndex(index + 1);
    } else {
      setPage(months[index - 1]);
      setIndex(index - 1);
    }
  };

  return (
    <div
      className={`container flex py-1 flex-col justify-between w-1/2 h-[80vh] rounded-2xl ${
        darkMode ? "bg-[#DCD7C9]" : "bg-[#CDC1FF]"
      } my-5 mx-auto`}
    >
      <div>
        <h2 className="flex justify-center py-1 font-serif text-lg font-bold">
          All your entries
        </h2>
        <div className="flex my-2 justify-center items-center">
          <IconButton disabled={index === 0} onClick={() => handleChange("-")}>
            <ChevronLeftIcon />
          </IconButton>
          <Typography>{page}</Typography>
          <IconButton disabled={index === 11} onClick={() => handleChange("+")}>
            <ChevronRightIcon />
          </IconButton>
        </div>
        <div
          className={`overflow-auto min-h-[60vh] max-h-[60vh] ${
            darkMode ? "custom-scrollbar-dark" : "custom-scrollbar-light"
          }`}
        >
          {state.entries.map((entry) => {
            return (
              entry.month === months[index] && (
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
              )
            );
          })}
        </div>
        <TotalExpence />
      </div>
    </div>
  );
};

export default List;
