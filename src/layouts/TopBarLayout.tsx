import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import TopBar from "@/components/Navbar";

interface TopBarLayoutProps {
  hasHeroSection?: boolean
}

const TopBarLayout = (props: TopBarLayoutProps) => {
  return (
    <>
      <TopBar {...props}/>
      <Outlet />
    </>
  );
};

export default TopBarLayout;
