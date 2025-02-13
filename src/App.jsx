import { useState } from "react";
import "./App.css";
import { Link, Outlet } from "react-router";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1 className="text-3xl text-black">Hello</h1>
      <Link to={"add"}>
        <button>Add</button>
      </Link>
      <Outlet />
    </div>
  );
}

export default App;
