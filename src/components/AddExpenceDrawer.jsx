import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import AddExpense from "./AddExpense";

export default function AddExpenceDrawer() {
  const theme = useTheme();
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
        className={`bg-slate-500 absolute top-5 right-6 text-white font-serif font-bold my-5 py-3 px-5 rounded-2xl ${
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
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
        <Divider />
        <AddExpense />
      </Drawer>
    </div>
  );
}
