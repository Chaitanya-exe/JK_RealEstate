"use client";

import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <footer className="bg-bright_red px-28 pb-4 pt-16  text-prim_white">
      <div className="gap-20 text-prim_white flex *:w-1/3 justify-between items-start">
        <div>
          <h2>About us</h2>
          <p className="bodyText">
            RSMI is a trusted name in real estate, providing tailored solutions
            for businesses, investors, and individuals. Our mission is to help
            you find properties that meet your goals with unmatched
            professionalism and expertise.
          </p>
        </div>
        <div className="flex justify-center items-center flex-col">
          <h2>Quick links</h2>
          <ul className="list-disc list-inside">
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
          </ul>
        </div>
        <div>
          <h2>contact information</h2>
          <h3>
            Phone number: <span> +1 (123) 456-7890</span>
          </h3>
          <h3>
            email: <span> contact@yourcompany.com</span>
          </h3>
          <h3>
            address:{" "}
            <span>123 Real Estate Avenue Business City, State, ZIP</span>
          </h3>
          <h3>
            address:{" "}
            <span>123 Real Estate Avenue Business City, State, ZIP</span>
          </h3>
        </div>
      </div>
      <div className="flex-center mt-14 gap-56">
        <p>
          © [Year] [Your Company Name]. All Rights Reserved. Terms of Service |
          Privacy Policy
        </p>
        <div className="">
          <h4> Follow us for updates and inspiration!</h4>
          <div className="flex my-3 gap-5 justify-center items-center">
            <InstagramIcon />
            <FacebookRoundedIcon />
            <TwitterIcon />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
