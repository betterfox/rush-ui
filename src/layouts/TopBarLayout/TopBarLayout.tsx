import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import TopBar from "./TopBar";

const TopBarLayout = () => {
  return (
    <>
      <TopBar/>
      <Outlet />
    </>
  );
};

export default TopBarLayout;
