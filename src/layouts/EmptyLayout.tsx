/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import React, { useState } from "react";
import { Outlet } from "react-router-dom";

const EmptyLayout = () => {
  return (
    <React.Fragment>
      <Outlet />
    </React.Fragment>
  );
};

export default EmptyLayout;
