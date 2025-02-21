import { React, useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Outlet } from "react-router";
import { v4 as uuidv4 } from "uuid";
import { BalanceContext } from "../context/BalanceContext";
import { DarkModeContext } from "../context/DarkModeContext";

const AddExpense = () => {
  const [today, setToday] = useState();
  const { darkMode } = useContext(DarkModeContext);

  const { dispatch } = useContext(BalanceContext);
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const date = handleDate(data.date).split("-");
    data = {
      ...data,
      date: date[0],
      month: date[1],
      year: date[2],
      id: uuidv4(),
    };
    dispatch(data);
    reset();
    console.log(data);
  };

  const handleDate = (date) => {
    return new Date(date || Date.now())
      .toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      })
      .replaceAll(" ", "-");
  };

  return (
    <div
      className={`container ${
        darkMode ? "bg-[#DCD7C9]" : "bg-[#CDC1FF]"
      } w-[90%] rounded-2xl my-5 mx-3`}
    >
      <h3 className="flex font-bold justify-center pt-4">Add a new item</h3>
      <form className="flex flex-col px-5" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="amount" className="mt-2 font-bold">
          Amount:
        </label>
        <input
          name="amount"
          type="number"
          className="bg-white rounded-tl-lg rounded-br-lg px-2"
          {...register("amount", { required: true })}
        />
        <div className="flex justify-around mt-2">
          <div>
            <input type="radio" {...register("type")} value="income" />
            <label htmlFor="html" className="mx-1 font-serif">
              Income
            </label>
          </div>
          <div>
            <input
              type="radio"
              {...register("type")}
              value="expence"
              defaultChecked
            />
            <label htmlFor="css" className="mx-1 font-serif">
              Expence
            </label>
          </div>
        </div>
        <label htmlFor="category" className="mt-3 font-bold">
          Select Category
        </label>
        <select
          name="category"
          className="bg-white rounded-tl-lg rounded-br-lg px-2"
          {...register("category")}
        >
          <option value="food">Food</option>
          <option value="travel">Travel</option>
          <option value="groceries">Groceries</option>
          <option value="bills">Bills</option>
          <option value="house">House</option>
          <option value="other">Other</option>
        </select>
        <label htmlFor="date" className="mt-3 font-bold">
          Select Date
        </label>
        <input
          className="bg-white rounded-tl-lg rounded-br-lg px-2"
          type="date"
          name="date"
          {...register("date")}
        />
        <label htmlFor="description" className="mt-3 font-bold">
          Description:
        </label>
        <input
          name="description"
          type="text"
          className="bg-white rounded-tl-lg rounded-br-lg px-2"
          {...register("description", { required: true })}
        />
        <button type="submit" className="bg-slate-600 rounded-2xl my-4">
          Add
        </button>
        <Outlet />
      </form>
    </div>
  );
};

export default AddExpense;
