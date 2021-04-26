import React, { useState } from "react";
import "./styles/variables.scss";
import "./styles/fonts.scss";
import "./styles/tailwind.scss";
import "./styles/global.scss";
import { useRoutes } from "react-router";
import routes from "./routes";

function App() {
  const routing = useRoutes(routes);

  return (
    <div className="relative bg-gray-100">
      {routing}
    </div>
  );
}

export default App;
