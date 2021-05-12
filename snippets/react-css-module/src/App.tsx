import React, { useEffect } from "react";

import "swiper/swiper.scss";
import "swiper/components/effect-fade/effect-fade.min.css"
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/pagination/pagination.min.css"

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
