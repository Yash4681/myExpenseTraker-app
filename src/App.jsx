import { useMemo, useReducer, useState } from "react";
import "./App.css";
import { Outlet } from "react-router";
import List from "./components/List";
import TotalBalance from "./components/TotalBalance";
import { BalanceContext } from "./context/BalanceContext";
import AddExpenceDrawer from "./components/AddExpenceDrawer";
import NavBar from "./components/NavBar";
import { DarkModeContext } from "./context/DarkModeContext";
import Home from "./components/Home";
import Chart from "./components/Chart";

const reducer = (state, action) => {
  switch (action.type) {
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
          type = entry.type;
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
  const [darkMode, setDarkMode] = useState(false);
  const darkModeValue = useMemo(() => ({ darkMode, setDarkMode }), [darkMode]);
  const [activePage, setActivePage] = useState("home");
  const [state, dispatch] = useReducer(
    reducer,
    {
      totalExpence: 10,
      totalBalance: 1000,
      entries: [],
    },
    initialize
  );
  const balanceValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <DarkModeContext.Provider
      value={{
        darkMode: darkModeValue.darkMode,
        setDarkMode: darkModeValue.setDarkMode,
      }}
    >
      <BalanceContext.Provider
        value={{ state: balanceValue.state, dispatch: balanceValue.dispatch }}
      >
        <div className="relative">
          <NavBar setActivePage={setActivePage} />
          {activePage === "home" && <Home />}
          {activePage === "chart" && <Chart />}
        </div>
      </BalanceContext.Provider>
    </DarkModeContext.Provider>
  );
}

export default App;
