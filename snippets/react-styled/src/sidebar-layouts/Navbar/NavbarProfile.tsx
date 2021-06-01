import { Avatar, Button, Menu, MenuItem } from "@material-ui/core";
import React from "react";
import { useConfirmDialog } from "@/components/Modal/ConfirmModal";

const NavbarProfile = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { getConfirm } = useConfirmDialog();

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const onSignoutConfirm = async () => {
    const confirmed = await getConfirm({
      title: `Signout?`,
      message: `Are you sure signout?`,
      confirm: `Confirm`,
      cancel: `Cancel`,
    });

    if (confirmed) {
        
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <Avatar alt="Remy Sharp" src="/assets/images/avatar-placeholder.png" />
      </Button>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={onSignoutConfirm}>Logout</MenuItem>
      </Menu>
    </div>
  );
};

export default NavbarProfile;
