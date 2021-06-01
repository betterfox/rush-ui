import React from "react";
import tw from "twin.macro";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import AppIcon from "@/common/AppIcon";
import styled from "styled-components";

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
    <ListItemStyled button key={item.name}>
      <Icon>
        <AppIcon iconName="FaCircle" />
      </Icon>
      <Title>{item.name}</Title>
    </ListItemStyled>
  );
};

const ListItemStyled = styled(ListItem)`
  ${tw`px-0 py-1`}
`;

const Title = styled(ListItemText)`
  ${tw`text-black opacity-75`}
`;

const Icon = styled(ListItemIcon)`
  ${tw`w-16 text-xs flex items-center justify-center opacity-50`}
`;

export default SidebarItem;
