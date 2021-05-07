import React, { useState } from "react";
import { Outlet } from "react-router-dom";

const EmptyLayout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default EmptyLayout;
