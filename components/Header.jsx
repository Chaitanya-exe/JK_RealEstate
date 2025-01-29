"use client";

import React, { useEffect, useState } from "react";
import Button from "./Button";
import { heroLinks } from "@/constants/dummydata";
import Image from "next/image";

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
      } transition-all duration-300 left-0 right-0 overflow-hidden fixed top-0  z-10`}
    >
      <div className="flex  capitalize pl-14 items-center justify-between w-full">
        <div className="logo_text uppercase flex-center">
          <Image src={"/logoRg.png"} width={100} height={100} alt="logo" />
          {/* <Image src={"/logo.jpg"} width={100} height={100} alt="logo" /> */}
          <h1>
            J.K. e<span className="text-[28px]">state</span>
          </h1>
        </div>
        <div className=" flex-center divide-x divide-prim_white/50 text-[19px] text-prim_white  *:px-6 *:py-2 *:flex *:justify-between">
          {heroLinks.map((item) => (
            <div
              onClick={(e) => handleSectionScroll(e, item.sectionlink)}
              key={item.name}
              className="group  relative inline-block "
            >
              <a
                href={`#${item.sectionlink}`}
                // onClick={(e) => handleSectionScroll(e, item.sectionlink)}
              >
                {item.name}
              </a>
              <span className="absolute  bottom-0 left-0  h-[0.6px] bg-prim_white w-0 group-hover:w-full transition-all duration-500 ease-in-out"></span>
            </div>
          ))}
        </div>
        <Button
          type={"primary"}
          text={"Schedule a consulatation"}
          classname={"p-6 rounded-l-md"}
        />
      </div>
    </nav>
  );
};

export default Header;
