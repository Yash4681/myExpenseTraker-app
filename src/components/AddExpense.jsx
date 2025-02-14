import { useForm } from "react-hook-form";
import { Outlet } from "react-router";

export default function App() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="container mx-auto w-1/4 bg-slate-300 rounded-2xl my-5">
      <h3 className="flex font-bold justify-center pt-4">Add a new item</h3>
      <form className="flex flex-col px-5" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="amount" className="mt-2 font-bold">Amount:</label>
        <input
          name="amount"
          type="number"
          className="bg-white rounded-tl-lg rounded-br-lg px-2"
          {...register("amount")}
        />
        <label htmlFor="catagory" className="mt-3 font-bold">Catagory</label>
        <select
          name="catagory"
          className="bg-white rounded-tl-lg rounded-br-lg px-2"
          {...register("catagory")}
        >
          <option value="expence">Expence</option>
          <option value="income">Income</option>
          <option value="other">other</option>
        </select>
        <label htmlFor="description" className="mt-3 font-bold">Description:</label>
        <input
          name="description"
          type="text"
          className="bg-white rounded-tl-lg rounded-br-lg px-2"
          {...register("description")}
        />
        <button type="submit" className="bg-slate-600 rounded-2xl my-4" >Add</button>
        <Outlet />
      </form>
    </div>
  );
}
