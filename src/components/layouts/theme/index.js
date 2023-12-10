import { createTheme } from "@mui/material/styles";

// Create Custom Theme
export const theme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: "vazir,roboto",
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#8BE9FD",
    },
  },
});
