"use client";

import { Button, Fade, Menu, MenuItem } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

const MenuCom = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const Router = useRouter();

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (linkTo) => {
    Router.push(`services/${linkTo}`);
    setAnchorEl(null);
  };

  return (
    <div className="group *:hover:cursor-pointer w-fit relative inline-block ">
      <button id="fade-button" onClick={handleClick}>
        Dashboard
      </button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        // TransitionComponent={Fade}
      >
        <MenuItem onClick={() => handleClose("PropertySales&Acquisitions")}>
          Property Sales & Acquisitions
        </MenuItem>
        <MenuItem onClick={handleClose}> Property Management</MenuItem>
        <MenuItem onClick={handleClose}>Investment Consulting</MenuItem>
        <MenuItem onClick={handleClose}>
          Market Research & Property Valuations
        </MenuItem>
      </Menu>
      <span className="absolute bottom-0 left-0  h-[0.6px] bg-prim_white w-0 group-hover:w-full transition-all duration-500 ease-in-out"></span>
    </div>
  );
};

export default MenuCom;
