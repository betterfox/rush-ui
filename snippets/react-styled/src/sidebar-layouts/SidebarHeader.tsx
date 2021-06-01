import React from "react";
import tw from 'twin.macro';
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import AppIcon from "@/common/AppIcon";
import styled from 'styled-components';

interface SidebarItemDto {
  name: string;
  link?: string;
  icon?: string;
}
interface SidebarItemProps {
  item: SidebarItemDto;
}

const SidebarItem = ({ item }: SidebarItemProps) => {
  return (
    <Header>{item.name}</Header>
  );
};

const Header = styled.div`
  ${tw`px-5 py-1 text-xs font-bold opacity-75 mt-4 uppercase`}

  &:first-child {
    ${tw`mt-2`}
  }
`

export default SidebarItem;
