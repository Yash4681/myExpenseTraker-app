import React, { useContext, useEffect, useState } from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { BalanceContext } from "../context/BalanceContext";
import { DarkModeContext } from "../context/DarkModeContext";
import { green } from "@mui/material/colors";

const Chart = () => {
  const { state } = useContext(BalanceContext);
  const { darkMode } = useContext(DarkModeContext);
  const [pieData, setPieData] = useState([]);

  useEffect(() => {
    let food = 0;
    let travel = 0;
    let house = 0;
    let bills = 0;
    let groceries = 0;
    let other = 0;
    state.entries.map((entry) => {
      if (entry.type === "expence") {
        switch (entry.category) {
          case "food":
            food += parseInt(entry.amount);
            break;
          case "travel":
            travel += parseInt(entry.amount);
            break;
          case "groceries":
            groceries += parseInt(entry.amount);
            break;
          case "bills":
            bills += parseInt(entry.amount);
            break;
          case "house":
            house += parseInt(entry.amount);
            break;
          case "other":
            other += parseInt(entry.amount);
            break;
          default:
            break;
        }
      }
    });
    const data = [
      { value: food, color: "green" },
      { value: travel, color: "orange" },
      { value: bills, color: "red" },
      { value: groceries, color: "blue" },
      { value: house, color: "yellow" },
      { value: other, color: "grey" },
    ];
    setPieData(data);
    console.log(data);
  }, []);

  return (
    <div
      className={`h-screen flex justify-around relative ${
        darkMode ? "bg-[#3F4F44]" : "bg-[#F5EFFF]"
      }`}
    >
      <div>
        <PieChart
          series={[
            {
              data: pieData,
              innerRadius: 30,
              outerRadius: 90,
              paddingAngle: 5,
              cornerRadius: 5,
              startAngle: -45,
              endAngle: 225,
              cx: 150,
              cy: 150,
            },
          ]}
          width={400}
          height={400}
        />
      </div>
      <div className="my-10 font-bold text-2xl">
        <ul className="list-disc">
          <li className={`${darkMode ? "text-green-500" : "text-green-700"}`}>
            Food
          </li>
          <li className={`${darkMode ? "text-orange-400" : "text-orange-600"}`}>
            Travel
          </li>
          <li className={`${darkMode ? "text-blue-500" : "text-blue-800"}`}>
            Groceries
          </li>
          <li className={`${darkMode ? "text-red-500" : "text-red-700"}`}>
            Bills
          </li>
          <li className={`${darkMode ? "text-yellow-300" : "text-yellow-300"}`}>
            House
          </li>
          <li className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}>
            Other
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Chart;
