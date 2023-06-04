import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#040e18",
    },
    secondary: {
      main: "#cba461",
    },
    info: {
      main: "#cba461",
    },
    success: {
      main: "#12d176",
    },
    error: {
      main: "#ff1d45",
    },
    text: {
      secondary: "#a4b4c3",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {},
      },
    },
  },
});

export default theme;
