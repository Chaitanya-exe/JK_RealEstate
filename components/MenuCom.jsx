"use client";

import { Button, Fade, Menu, MenuItem } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const MenuCom = ({setOpenMenu}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const Router = useRouter();
  const pathname = usePathname()

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (linkTo) => {
    setOpenMenu(false);

    // Get the current pathname; if it doesn't exist, default to an empty string.
    const currentPath = pathname || "";

    if (currentPath.includes("services/")) {
      // Replace the current service id in the pathname with the new one.
      const newPath = currentPath.replace(
        /services\/[^/]+/,
        `services/${linkTo}`
      );
      Router.push(newPath);
    } else {
      // Otherwise, simply navigate to the services page with the new id.
      Router.push(`services/${linkTo}`);
    }

    // Router.push(`services/${linkTo}`);
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
        <MenuItem onClick={() => handleClose("1")}>
          Property Sales & Acquisitions
        </MenuItem>
        <MenuItem onClick={() => handleClose("2")}> Property Management</MenuItem>
        <MenuItem onClick={() => handleClose("3")}>Investment Consulting</MenuItem>
        <MenuItem onClick={() => handleClose("4")}>
          Market Research & Property Valuations
        </MenuItem>
      </Menu>
      <span className="absolute bottom-0 left-0  h-[0.6px] bg-prim_white w-0 group-hover:w-full transition-all duration-500 ease-in-out"></span>
    </div>
  );
};

export default MenuCom;
