import { createTheme } from "@mui/material";
export const theme = createTheme({
  direction: "rtl",
  palette: {
    mode: "dark",
    primary: {
      main: "#023E8A",
    },
    secondary: {
      main: "#7209b7",
    },
    error: {
      main: "#ef233c",
    },
    success: {
      main: "#a1ff0a",
    },
  },
  typography: {
    fontFamily: '"B Yagut", "Helvetica", "Arial", sans-serif',
  },
});
