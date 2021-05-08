import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Landing from "@/components/Navbar";

const LandingLayout = () => {
  return (
    <>
      <Landing hasHeroSection/>
      <Outlet />
    </>
  );
};

export default LandingLayout;
