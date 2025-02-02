"use client";
import MenuTwoToneIcon from "@mui/icons-material/MenuTwoTone";

import React, { useEffect, useState } from "react";
import Button from "./Button";
import { heroLinks } from "@/constants/dummydata";
import Image from "next/image";
import { IconButton } from "@mui/material";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleSectionScroll = (e, targetId) => {
    e.preventDefault();

    const targetEle = document.getElementById(targetId);

    if (targetEle) {
      const offsetPosition = targetEle.offsetTop - window.innerHeight * 0.1;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >  50);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        isScrolled ? "bg-bright_red shadow" : "bg-none"
      } transition-all duration-300 left-0 right-0 overflow-hidden fixed top-0  max-sm:px-2  z-50`}
    >
      <div className="flex  capitalize md:pl-14 items-center justify-between">
        <div className="logo_text text-[30px] font-[600] md:text-[42px] md:font-[700] uppercase flex-center">
          <Image src={"/logoRg.png"} width={100} height={60} alt="logo" />
          {/* <Image src={"/logo.jpg"} width={100} height={100} alt="logo" /> */}
          <h1>
            J.K. e<span className="text-[20px] md:text-[28px]">state</span>
          </h1>
        </div>
        <div className="hidden md:flex-center divide-x divide-prim_white/50 text-[19px] text-prim_white  *:px-6 *:py-2 *:flex *:justify-between">
          {heroLinks.map((item) => (
            <div
              onClick={(e) => handleSectionScroll(e, item.sectionlink)}
              key={item.name}
              className="group  relative inline-block "
            >
              <a
                href={`#${item.sectionlink}`}
              >
                {item.name}
              </a>
              <span className="absolute  bottom-0 left-0  h-[0.6px] bg-prim_white w-0 group-hover:w-full transition-all duration-500 ease-in-out"></span>
            </div>
          ))}
        </div>

        <div className="">
          <Button
            type={"primary"}
            text={"Schedule a consulatation"}
            classname={"md:p-6 p-3 max-sm:mr-1.5 max-sm:rounded-md  rounded-l-md"}
            hrefLink="form"
          />
          <IconButton className="max-sm:inline-flex hidden">

          <MenuTwoToneIcon sx={{ fontSize: 32 , color:"white" }} />
          </IconButton>
        </div>
      </div>
    </nav>
  );
};

export default Header;
