import { React, useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Outlet } from "react-router";
import { v4 as uuidv4 } from "uuid";
import { BalanceContext } from "../context/BalanceContext";

const AddExpense = () => {
  const [today, setToday] = useState();

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
    return new Date(date)
      .toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      })
      .replaceAll(" ", "-");
  };

  return (
    <div className="container bg-slate-300 w-[90%] rounded-2xl my-5 mx-3">
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
        <label htmlFor="category" className="mt-3 font-bold">
          Category
        </label>
        <select
          name="category"
          className="bg-white rounded-tl-lg rounded-br-lg px-2"
          {...register("category")}
        >
          <option value="expence">Expence</option>
          <option value="income">Income</option>
          <option value="other">other</option>
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
