"use client";

import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import { heroLinks } from "@/constants/dummydata";

const Footer = () => {
  return (
    <footer className="bg-bright_red px-28 pb-4 pt-16  text-prim_white">
      <div className="gap-20 text-prim_white flex *:w-1/3 justify-between items-start">
        <div>
          <h2 className="text-[26px] font-[550]">About us</h2>
          <p className="bodyText ">
            RSMI is a trusted name in real estate, providing tailored solutions
            for businesses, investors, and individuals. Our mission is to help
            you find properties that meet your goals with unmatched
            professionalism and expertise.
          </p>
        </div>
        <div className="flex justify-center items-center flex-col">
          <h2 className="text-[26px] font-[550]">Quick links</h2>
          <ul className="list-disc bodyText capitalize list-inside ">
            {heroLinks.map((item) => (
              <li
                key={item.name}
                className="hover:underline hover:text-prim_black hover:underline-offset-2"
              >
                <a href={`#${item.sectionlink}`}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-[24px] font-[550] capitalize">
            contact information
          </h2>
          <div className="-space-y-1">
            <h3 className="text-[20px] capitalize">
              Phone number :{" "}
              <span className="text-[18px]">+1 (123) 456-7890</span>
            </h3>
            <h3 className="text-[20px] capitalize">
              email:{" "}
              <span className="text-[18px]">contact@yourcompany.com</span>
            </h3>
            <h3 className="text-[20px]  capitalize">
              address:{" "}
              <span className="text-[18px]">
                123 Real Estate Avenue Business City, State,ZIP
              </span>
            </h3>
            <h3 className="text-[20px] capitalize">
              address:{" "}
              <span className="text-[18px]">
                123 Real Estate Avenue Business City, State,ZIP
              </span>
            </h3>
          </div>
        </div>
      </div>
      <div className="flex-center mt-14 gap-56">
        <p>
          © [Year] [Your Company Name]. All Rights Reserved. Terms of Service |
          Privacy Policy
        </p>
        <div className="">
          <h4> Follow us for updates and inspiration!</h4>
          <div className="flex my-3 gap-6 justify-center items-center ">
            <InstagramIcon sx={{ fontSize: 34 }} className="hover:scale-110" />
            <FacebookRoundedIcon
              sx={{ fontSize: 34 }}
              className="hover:scale-110"
            />
            <TwitterIcon sx={{ fontSize: 34 }} className="hover:scale-110" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
