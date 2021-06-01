/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import React, { ReactPropTypes, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import tw from "twin.macro";
import {
  AppBar,
  Badge,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  makeStyles,
  Avatar,
  Button,
  Menu,
  createMuiTheme,
} from "@material-ui/core";
import { FiInbox, FiMenu } from "react-icons/fi";

interface TopbarProps {
  onMobileNavOpen?: () => void;
  size?: "normal" | "small";
}

const TopBar = ({ onMobileNavOpen, size = "normal", ...rest }: TopbarProps) => {
  const navbarHeight =
    size == "normal"
      ? "height: var(--navbar-height); min-height: var(--navbar-height);"
      : "height: var(--navbar-small-height); min-height: var(--navbar-small-height);";

  const navbarStyle = css`
    ${navbarHeight}
    z-index: 1200;
    ${tw`shadow left-0 w-full flex bg-primary`}
  `;
  const toolBarStyle = css`
    ${navbarHeight}
    ${tw`px-0 pt-0`}
  `
  return (
    <AppBar position="fixed" css={navbarStyle} elevation={1} {...rest}>
      <Toolbar css={toolBarStyle}>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
