import React from "react";

const ListItem = () => {
  return (
    <div className="container flex justify-between px-5">
      <div className="flex">
        <label className="w-[100px]" htmlFor={""}>
          Lable
        </label>
        <p>Description</p>
      </div>
      <button
        className="bg-slate-400 hover:bg-slate-500 px-3 py-1 rounded-2xl"
        name={""}
      >
        Delete
      </button>
    </div>
  );
};

export default ListItem;
