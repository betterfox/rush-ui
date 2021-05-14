import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { HashRouter } from "react-router-dom";
import { StylesProvider } from '@material-ui/core/styles';

ReactDOM.render(
  <React.StrictMode>
    <StylesProvider injectFirst>
      <HashRouter>
        <App />
      </HashRouter>
    </StylesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
