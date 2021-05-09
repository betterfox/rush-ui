import React, { useEffect } from "react";
import "./styles/variables.scss";
import "./styles/fonts.scss";
import "./styles/tailwind.scss";
import "./styles/global.scss";
import { useRoutes } from "react-router";
import routes from "./routes";

function App() {
  const routing = useRoutes(routes);
  
  useEffect(() => {
    function setMode() {
        const theme = localStorage.getItem("theme") || ""
        document.body.setAttribute("data-theme", theme);
    }
    setMode()
}, [])

  return (
    <>
      {routing}
    </>
  );
}

export default App;
