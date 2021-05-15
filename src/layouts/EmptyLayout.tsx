import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import ThemeConfiguration from '../components/ThemeConfiguration';
import { useQuery } from "../utils/router";

const EmptyLayout = () => {
  const rawQuery = useQuery()

  return (
    <>
      <Outlet />
      { !rawQuery.iframe && <ThemeConfiguration  /> }
    </>
  );
};

export default EmptyLayout;
