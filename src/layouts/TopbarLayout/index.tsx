/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import TopBar from "./TopBar";

const TopbarLayout = () => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  return (
    <div>
      <TopBar onMobileNavOpen={() => setMobileNavOpen(true)} />
      <Outlet />
    </div>
  );
};

export default TopbarLayout;
