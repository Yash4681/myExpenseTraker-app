import { useReducer, useState } from "react";
import "./App.css";
import { Link, Outlet } from "react-router";
import List from "./components/List";
import TotalBalance from "./components/TotalBalance";
import { BalanceContext } from "./context/BalanceContext";

const reducer = (state, action) => {
  switch (action.Type) {
    case "expence": {
      return {
        totalBalance: state.totalBalance - action.Amount,
        totalExpence: state.totalExpence + action.Amount,
      };
    }

    case "income": {
      const temp = {
        totalBalance: state.totalBalance + action.Amount,
        totalExpence: state.totalExpence,
      };
      localStorage.setItem("balance", JSON.stringify(temp));
      return temp;
    }
  }
  throw Error("Unknown action: " + action.type);
};

const initialize = () => {
  console.log("From Initialize.");
  const temp = JSON.parse(localStorage.getItem("balance"));
  return temp;
};

function App() {
  // const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(
    reducer,
    {
      totalExpence: 10,
      totalBalance: 1000,
    },
    initialize
  );

  return (
    <BalanceContext.Provider value={{ state, dispatch }}>
      <div className="container flex relative">
        <List />
        <Link to={"add"}>
          <button className="bg-slate-500 absolute top-5 right-6 text-white font-serif font-bold my-5 py-3 px-6 rounded-2xl">
            Add a new entry
          </button>
        </Link>
        <TotalBalance />
        <Outlet />
      </div>
    </BalanceContext.Provider>
  );
}

export default App;
