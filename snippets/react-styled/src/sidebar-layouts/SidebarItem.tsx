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
  isSubItem?: boolean;
}

const SidebarItem = ({ item, isSubItem = false }: SidebarItemProps) => {
  return (
    <ListItemStyled button key={item.name} isSubItem={isSubItem}>
      {item.icon && !isSubItem && (
        <Icon>
          <AppIcon iconName={item.icon} />
        </Icon>
      )}
      {
        isSubItem && (
          <ListItemIcon className="icon is-sub-item">
            <AppIcon iconName={`FaCircle`} />
          </ListItemIcon>
        )}
      <Title>{item.name}</Title>
    </ListItemStyled>
  );
};

interface ListItemStyledProps {
  isSubItem?: boolean
}

const ListItemStyled = styled(ListItem)<ListItemStyledProps & typeof ListItem>`
  ${(props: ListItemStyledProps) => props.isSubItem ? tw`px-0 py-1` : tw`px-0 py-2`}
`

const Title = styled(ListItemText)`
  ${tw`text-black opacity-75`}
`

const Icon = styled(ListItemIcon)`
  ${tw`w-16 text-2xl flex items-center justify-center`}
`

export default SidebarItem;
