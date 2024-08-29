import { createTheme } from "@mui/material";
export const theme = createTheme({
  direction: "rtl",
  palette: {
    mode: "dark",
    primary: {
      main: "#C70039",
    },
    secondary: {
      main: "#60d394",
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
  breakpoints: {
    values: {
      xs: 0,
      sm: 740,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});
