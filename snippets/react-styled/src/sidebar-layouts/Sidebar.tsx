import { Drawer, List } from "@material-ui/core";
import React, { useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import SidebarItem from "./SidebarItem";
import SidebarCollapseItem from "./SidebarCollapseItem";
import SidebarHeader from './SidebarHeader'

const Sidebar = () => {
  const menus = [
    {
      name: "Views",
      type: "header",
    },
    {
      name: "Kanban Board",
      icon: "FiGrid",
      link: "/board",
    },
    {
      name: "Project",
      icon: "FiServer",
      link: "/projects",
    },
    {
      name: "Sprints",
      icon: "FiColumns",
      link: "/sprints",
    },
    {
      name: "Back Logs",
      icon: "FiCheckCircle",
      link: "/back-logs",
    },
    {
      name: "Tasks",
      icon: "FiTrello",
      link: "/tasks",
      subMenus: [
        {
          name: "Role & Permissions",
          link: "/roles",
        },
        {
          name: "Invites",
          link: "/invites",
        },
        {
          name: "Project Setting",
          link: "/setting/project",
        },
      ],
    },
    {
      name: "Issues",
      icon: "FiAlertCircle",
      link: "/issues",
      counter: 2
    },
    {
      name: "Setting",
      type: "header",
    },
    {
      name: "Releases",
      icon: "FiGitMerge",
      link: "/releases",
    },
    {
      name: "Setting",
      icon: "FiSettings",
      link: "/setting",
      subMenus: [
        {
          name: "Role & Permissions",
          link: "/roles",
        },
        {
          name: "Invites",
          link: "/invites",
        },
        {
          name: "Project Setting",
          link: "/setting/project",
        },
      ],
    },
  ];

  return (
    <DrawerStyled anchor="left" open={true} variant="permanent">
      <List>
        {menus.map((item) => {
          if (item.type === "header") {
            return <SidebarHeader key={item.name} item={item} />;
          }
          if (item.subMenus) {
            return <SidebarCollapseItem key={item.name} item={item} />;
          }
          return <SidebarItem key={item.name} item={item} />;
        })}
      </List>
    </DrawerStyled>
  );
};

const DrawerStyled = styled(Drawer)`
  .MuiDrawer-paper {
    width: var(--sidebar-width);
    padding-top: var(--navbar-height);
    ${tw`shadow`}
  }
`;

export default Sidebar;
