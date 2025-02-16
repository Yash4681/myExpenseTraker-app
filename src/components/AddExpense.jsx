import { React, useContext } from "react";
import { useForm } from "react-hook-form";
import { Outlet } from "react-router";
import { v4 as uuidv4 } from "uuid";
import { BalanceContext } from "../context/BalanceContext";

const AddExpense = () => {
  const { dispatch } = useContext(BalanceContext);
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    data = {
      ...data,
      id: uuidv4(),
    };
    dispatch(data);
    reset();
    console.log(data);
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
          {...register("amount")}
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
        <label htmlFor="description" className="mt-3 font-bold">
          Description:
        </label>
        <input
          name="description"
          type="text"
          className="bg-white rounded-tl-lg rounded-br-lg px-2"
          {...register("description")}
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
