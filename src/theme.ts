'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  cssVariables: true,

  palette: {
    primary: {
      main: "#36765b",
    },
    secondary: {
      main: "#f8f8f8",
    },
 
  },

  typography: {
    fontFamily: "var(--font-roboto)",
    allVariants : {
      color: "#4f575c"
    }
  },
});

export default theme;
