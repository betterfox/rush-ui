import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import ThemeConfiguration from '../components/ThemeConfiguration';

const EmptyLayout = () => {
  return (
    <>
      <Outlet />
      <ThemeConfiguration  />
    </>
  );
};

export default EmptyLayout;
