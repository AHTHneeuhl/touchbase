import { createTheme } from "@mui/material";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 425,
      sm: 532,
      md: 612,
      lg: 1012,
      xl: 1440,
    },
  },
});

export default theme;
