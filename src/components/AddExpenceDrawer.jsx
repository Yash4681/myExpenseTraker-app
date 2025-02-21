import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import AddExpense from "./AddExpense";
import { DarkModeContext } from "../context/DarkModeContext";

export default function AddExpenceDrawer() {
  const theme = useTheme();
  const { darkMode } = React.useContext(DarkModeContext);
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button
        className={`${
          darkMode ? "bg-[#DCD7C9] text-[#A27B5C]" : "bg-[#CDC1FF]"
        } absolute top-5 right-6  font-serif font-bold my-5 py-3 px-5 rounded-2xl ${
          open && "hidden"
        }`}
        onClick={handleDrawerOpen}
      >
        Add a new entry
      </button>
      <Drawer
        sx={{
          "& .MuiDrawer-paper": {
            width: 370,
            boxSizing: "border-box",
            marginTop: "40px",
            height: "calc(100% - 64px)",
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <div
          className={`${
            darkMode ? "bg-[#3F4F44] h-full" : "bg-[#F5EFFF] h-full"
          }`}
        >
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
          <Divider />
          <AddExpense />
        </div>
      </Drawer>
    </div>
  );
}
