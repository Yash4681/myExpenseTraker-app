import React from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const ListItem = ({ Amount, id, Description, Category, dispatch }) => {
  return (
    <div className="container flex justify-between px-5">
      <div className="flex">
        <label
          className={`w-[100px] ${
            Category === "income" ? "text-green-600" : ""
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
            category: "delete",
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
