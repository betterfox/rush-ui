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
import AppSearchBox from '@/components/AppSearchBox';
import NightModeToggle from '@/components/Button/NightModeToggle';
import clsx from 'clsx';

interface TopbarProps {
  onMobileNavOpen?: () => void;
  size?: "normal" | "small";
}

const TopBar = ({ onMobileNavOpen, size = "normal", ...rest }: TopbarProps) => {
  const navbarStyle = css`
    height: var(--navbar-topest-height);
    z-index: 1200;
    ${tw`shadow-none left-0 w-full flex bg-transparent`}
  `;
  const toolBarStyle = css`
    height: var(--navbar-topest-height);
    ${tw`px-0 pt-0`}

    .left {
      ${tw`w-1/3`}
    }
    .right {
      ${tw`w-1/3 flex items-center justify-end`}
    }
    .centered {
      ${tw`w-1/3 flex items-center justify-center`}
    }
  `
  const logoStyle = css`
    ${tw`flex items-center space-x-2 text-4xl filter drop-shadow-lg`}

    .ui {
      ${tw`px-1 border-4 rounded-lg font-bold filter drop-shadow-lg`}
    }
  `
  return (
    <AppBar position="fixed" css={navbarStyle} elevation={1} {...rest} className={clsx('app-container')}>
      <Toolbar css={toolBarStyle}>
        <div className="left">
          
        </div>
        <div className="centered">
          <div css={logoStyle}>
            <div className="name">Rush</div>
            <div className="ui">UI</div>
          </div>
        </div>
        <div className="right">
          <NightModeToggle />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
