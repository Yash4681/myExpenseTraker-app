import React from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Avatar } from "@mui/material";
import { deepPurple } from "@mui/material/colors";

const ListItem = ({ Amount, id, Description, Type, dispatch, Date }) => {
  return (
    <div className="container flex justify-between px-5">
      <div className="flex items-center">
        <Avatar
          sx={{
            bgcolor: deepPurple[500],
            width: 30,
            height: 30,
            fontSize: 15,
            margin: 1,
          }}
        >
          {Date}
        </Avatar>
        <label
          className={`w-[100px] ml-3 ${
            Type === "income" ? "text-green-600" : ""
          }`}
          htmlFor={""}
        >
          {Amount}
        </label>
        <p>{Description}</p>
      </div>
      <button
        className="hover:bg-slate-500 px-3 my-1 rounded-xl"
        onClick={() => {
          return dispatch({
            type: "delete",
            id,
            Amount,
          });
        }}
      >
        <DeleteForeverIcon fontSize="small" />
      </button>
    </div>
  );
};

export default ListItem;
