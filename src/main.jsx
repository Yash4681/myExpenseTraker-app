import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import NavBar from "./components/NavBar.jsx";
import AddExpense from "./components/AddExpense.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="cart" element={<App />} />
      <Route path="add" element={<AddExpense />} />
    </Routes>
  </BrowserRouter>
);
