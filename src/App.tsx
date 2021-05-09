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
        const themeMode = localStorage.getItem("theme")
        if(themeMode == "dark") {
          localStorage.setItem("theme", "dark")
        }
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
