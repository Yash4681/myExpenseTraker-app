import { useForm } from "react-hook-form";
import { Outlet } from "react-router";

export default function App() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="container w-1/4 bg-slate-500 my-5 mx-10">
      <form className="flex flex-col p-5" onSubmit={handleSubmit(onSubmit)}>
        <input className="bg-white" {...register("firstName")} />
        <select {...register("gender")}>
          <option value="male">male</option>
          <option value="female">female</option>
          <option value="other">other</option>
        </select>
        <input type="submit" />
        <Outlet />
      </form>
    </div>
  );
}
