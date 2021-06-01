import React, { ReactPropTypes, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import tw from "twin.macro";
import {
  AppBar,
  Box,
  Toolbar,
} from "@material-ui/core";
import styled from 'styled-components';
import AppLogo from './AppLogo';
import AppSearchBox from "./AppSearchBox";
import NavbarProfile from "./Navbar/NavbarProfile";
interface TopbarProps {
  onMobileNavOpen?: () => void;
}

const TopBar = ({ onMobileNavOpen }: TopbarProps) => {
  return (
    <AppBarStyled position="fixed" elevation={1}>
      <ToolbarStyled>
        <AppLogo />
        <AppSearchBox />
        <Box flexGrow={1} />
        <NavbarProfile />
      </ToolbarStyled>
    </AppBarStyled>
  );
};

const AppBarStyled = styled(AppBar)`
  height: var(--navbar-height); 
  min-height: var(--navbar-height);
  z-index: 1200;
  ${tw`shadow left-0 w-full flex bg-primary`}
`

const ToolbarStyled = styled(Toolbar)`
  height: var(--navbar-height); 
  min-height: var(--navbar-height);
  z-index: 1200;
  ${tw`px-0 pt-0`}
`

export default TopBar;
