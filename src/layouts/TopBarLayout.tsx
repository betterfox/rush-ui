import React, { ReactNode, useState } from "react";
import { Outlet } from "react-router-dom";
import TopBar from "@/components/Navbar";
import clsx from "clsx";
import styles from './TopBarLayout.module.scss';

const TopBarLayout = () => {
  return (
    <AppContainer>
      <TopBar />
      <Outlet />
    </AppContainer>
  );
};

interface AppContainerProps {
  children: ReactNode
}

const AppContainer = ({ children }: AppContainerProps) => {
  return (
    <div className={clsx(styles.container)}>
      {children}
    </div>
  )
}

export default TopBarLayout;
