import { useReducer, useState } from "react";
import "./App.css";
import { Outlet } from "react-router";
import List from "./components/List";
import TotalBalance from "./components/TotalBalance";
import { BalanceContext } from "./context/BalanceContext";
import AddExpenceDrawer from "./components/AddExpenceDrawer";

const reducer = (state, action) => {
  switch (action.category) {
    case "expence": {
      const temp = {
        totalBalance: state.totalBalance - parseInt(action.amount),
        totalExpence: state.totalExpence + parseInt(action.amount),
        entries: [...state.entries, action],
      };
      localStorage.setItem("balance", JSON.stringify(temp));
      return temp;
    }

    case "income": {
      const temp = {
        totalBalance: state.totalBalance + parseInt(action.amount),
        totalExpence: state.totalExpence,
        entries: [...state.entries, action],
      };
      localStorage.setItem("balance", JSON.stringify(temp));
      return temp;
    }

    case "delete": {
      let type = "";
      const newEntries = state.entries.filter((entry) => {
        if (entry.id === action.id) {
          type = entry.category;
        }
        return entry.id !== action.id;
      });

      const newBalance =
        type === "income"
          ? state.totalBalance - parseInt(action.Amount)
          : state.totalBalance + parseInt(action.Amount);
      const newExpence =
        type === "expence"
          ? state.totalExpence - parseInt(action.Amount)
          : state.totalExpence;
      const temp = {
        totalBalance: newBalance,
        totalExpence: newExpence,
        entries: newEntries,
      };

      localStorage.setItem("balance", JSON.stringify(temp));
      return temp;
    }
  }
  throw Error("Unknown action: " + action.type);
};

const initialize = () => {
  const temp = JSON.parse(localStorage.getItem("balance"));
  return temp
    ? {
        totalExpence: temp.totalExpence ? parseInt(temp.totalExpence) : 0,
        totalBalance: temp.totalBalance ? parseInt(temp.totalBalance) : 0,
        entries: temp.entries,
      }
    : {
        totalExpence: 0,
        totalBalance: 0,
        entries: new Array(),
      };
};

function App() {
  // const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(
    reducer,
    {
      totalExpence: 10,
      totalBalance: 1000,
      entries: [],
    },
    initialize
  );

  return (
    <BalanceContext.Provider value={{ state, dispatch }}>
      <div className="container flex relative">
        <List />
        <TotalBalance />
        <AddExpenceDrawer />
        <Outlet />
      </div>
    </BalanceContext.Provider>
  );
}

export default App;
