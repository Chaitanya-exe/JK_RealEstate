"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TiLocation } from "react-icons/ti";
import { MdSquareFoot } from "react-icons/md";


gsap.registerPlugin(ScrollTrigger);

const PropertyCard = ({ property }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!property?.images || property.images.length === 0) return;

    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % property.images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [property?.images]);

  useGSAP(() => {
    gsap.utils.toArray(".right_imgclass").forEach((el) => {
      gsap.fromTo(
        el,
        {
          x: -200,
          opacity: 0,
          y: 10,
        },
        {
          x: 0,
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "sine.inOut",
          scrollTrigger: {
            trigger: el,
            start: "top 60%",
          },
        }
      );
    });
    gsap.utils.toArray(".left_imgclass").forEach((el) => {
      gsap.fromTo(
        el,
        {
          x: 200,
          opacity: 0,
          y: 10,
        },
        {
          x: 0,
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "sine.inOut",
          scrollTrigger: {
            trigger: el,
            start: "top 60%",
          },
        }
      );
    });
  }, []);

  return (
    <div
      key={property.id}
      className={`
${property.id % 2 !== 0 ? "right_imgclass" : "left_imgclass"}

        relative  text-start border border-prim_black/30 rounded-md  pb-8`}
    >
      {/* LEFT */}
      <div
        className={`
       
        relative group w-fit  `}
      >
        <Image
          src={property.images[index]?.url}
          width={545}
          height={340}
          alt="propertyImg"
          className={` ${
            property.id % 2 !== 0 ? "md:-rotate-" : "md:rotate-"
          } md:w-[545px] md:h-[350px] rounded-t-md object-cover object-center transition-all delay-200 `}
        />

        <div className="flex justify-center gap-2">
          {property.images.map((_, idx) => (
            <span
              key={idx}
              onClick={() => setIndex(idx)}
              className={`${
                idx === index ? "bg-prim_black/90" : "bg-gray/50"
              } transition-all duration-150 w-3 h-3 rounded-full inline-block my-3`}
            />
          ))}
        </div>

        <div
          className={`${
            property.id % 2 !== 0
              ? "md:-left-8 -left-3  rotate-12"
              : " md:-right-12 -right-3 -rotate-12"
          } absolute group-hover:rotate-45 duration-200 delay-75 ease-in-out bg-bright_red rounded-full md:p-1.5 p-1 md:-top-5 -top-3 `}
        >
          <Image
            src={"/triangle.svg"}
            width={70}
            height={72}
            alt="svg"
            className="md:w-[50px] w-[30px] "
          />
        </div>
      </div>
      {/* RIGHT */}
      <div className={` max-w-[700px] px-3 `}>
        <div className="flex justify-between items-start">
          <h2 className="md:text-[30px] flex items-center text-[28px] leading-snug font-[550] text-[#003A47]">
            <TiLocation className="inline-flex size-7" />
            {property.location}
          </h2>
          <h3 className="font-medium bg-prim_black px-2 py-0.5 rounded-full text-prim_white capitalize md:text-[15px] text-sm leading-tight">
            For {property.status.toLowerCase()}
          </h3>
        </div>
        <h3 className="font-medium flex items-center md:text-[24px] text-[23px] leading-tight m:leading-normal md:tracking-[0.5px] text-[#234E70]">
          <MdSquareFoot />
          {property.size} sq. foot
        </h3>

        {/* <ul className="list-disc list-outside pl-5 md:bodyText pt-2 space-y-1 text-[#003A47]">
					{property.features.map((feature, i) => (
						<li key={i}>{feature}</li>
					))}
				</ul> */}
      </div>
    </div>
  );
};

export default PropertyCard;
