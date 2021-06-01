import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import tw from "twin.macro";
import styled from 'styled-components';
import Sidebar from './Sidebar';
import TopBar from "./TopBar";

const SidebarLayout = () => {
  return (
    <Container>
      <Sidebar />
      <Body>
        <BodyInner>
          <TopBar />
          Body
        </BodyInner>
      </Body>
    </Container>
  );
};

const Container = styled.div`
  ${tw`flex w-full h-full`}
`
const Body = styled.div`
  padding-left: var(--sidebar-width);
  padding-top: var(--navbar-height);
  ${tw`min-h-screen w-full h-full flex flex-col`}
`

const BodyInner = styled.div`
  ${tw`w-full flex-grow flex h-full`}
`

export default SidebarLayout;
