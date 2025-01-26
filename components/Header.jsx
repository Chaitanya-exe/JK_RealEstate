import React from "react";
import Button from "./Button";

const Header = () => {
  return (
    <nav className="w-full fixed top-0  z-10">
      <div className="flex  capitalize pl-14 items-center justify-between w-full">
        <h2 className="logo_text uppercase">J.K. e<span className="text-[28px]">state</span></h2>
        <div className=" flex-center divide-x divide-prim_white/50 text-[19px] text-prim_white *:space-x-3 *:px-6 *:py-2 *:flex *:justify-between">
          <div className="hover:bg-prim_white *:hover:text-prim_black">
            <p>home</p>
          </div>
          <div className="hover:bg-prim_white *:hover:text-prim_black">
            <p>properties</p>
          </div>
          <div className="hover:bg-prim_white *:hover:text-prim_black">
            <p>stats</p>
          </div>
          <div className="hover:border-b ">
            <p>about us</p>
          </div>
          <div>
            <p>testimonials</p>
          </div>
          <div>
            <p>contact us</p>
          </div>
          <div>
            <p>faqs</p>
          </div>
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
