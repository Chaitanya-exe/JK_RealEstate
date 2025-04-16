"use client";

import { Menu, MenuItem } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const MenuCom = ({ setOpenMenu }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const Router = useRouter();
  const pathname = usePathname();

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (linkTo) => {
    setOpenMenu(false);

    if (pathname && pathname.includes("services")) {
     
        const newPath = pathname.replace(
          /services\/[^/]+/,
          `services/${linkTo}`
        );
        Router.push(newPath);
      }
     else {
      Router.push(`services/${linkTo}`);
    }

    setAnchorEl(null);
  };

  return (
    <div className="group *:hover:cursor-pointer w-fit relative inline-block ">
      <button id="fade-button" onClick={handleClick}>
        Services
      </button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
        // TransitionComponent={Fade}
      >
        <MenuItem
          onClick={() => {
            handleClose("1");
            setAnchorEl(null);
          }}
        >
          Property Sales & Purchase
        </MenuItem>
        <MenuItem onClick={() => handleClose("2")}>
          {" "}
          Property Leasing
        </MenuItem>
        <MenuItem onClick={() => handleClose("3")}>
          Market Research & Property Valuations
        </MenuItem>
      </Menu>
      <span className="absolute bottom-0 left-0  h-[0.6px] bg-prim_white w-0 group-hover:w-full transition-all duration-500 ease-in-out"></span>
    </div>
  );
};

export default MenuCom;
