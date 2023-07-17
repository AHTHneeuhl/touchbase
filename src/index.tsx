import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import reduxStore from "redux/store";
import GlobalStyles from "theme/GlobalStyles";
import theme from "theme/theme";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={reduxStore}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
