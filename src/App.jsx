import { useState } from "react";
import "./App.css";
import { Link, Outlet } from "react-router";
import List from "./components/List";
import TotalBalance from "./components/TotalBalance";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="container flex relative">
      <List />
      <Link to={"add"}>
        <button className="bg-slate-500 absolute top-5 right-6 text-white font-serif font-bold my-5 py-3 px-6 rounded-2xl">Add a new entry</button>
      </Link>
      <TotalBalance />
      <Outlet />
    </div>
  );
}

export default App;
