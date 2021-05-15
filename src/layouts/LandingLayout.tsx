import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Landing from "@/components/Navbar";
import ThemeConfiguration from '../components/ThemeConfiguration';

const LandingLayout = () => {
  return (
    <>
      <Landing hasHeroSection/>
      <Outlet />
      <ThemeConfiguration  />
    </>
  );
};

export default LandingLayout;
