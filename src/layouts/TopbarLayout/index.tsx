/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import TopBar from "./TopBar";

const TopbarLayout = () => {
  return (
    <React.Fragment>
      <TopBar/>
      <Outlet />
    </React.Fragment>
  );
};

export default TopbarLayout;
