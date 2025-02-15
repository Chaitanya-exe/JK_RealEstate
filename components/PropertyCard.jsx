import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const PropertyCard = ({ property }) => {
  useGSAP(() => {
    gsap.utils.toArray('.right_imgclass').forEach((el)=>{

      gsap.fromTo((el), {
        x: -200,
        opacity: 0,
        y: 10,
      },{
        x:0,
        y:0,
        opacity:1,
        duration: 1,
        ease:"sine.inOut",
        scrollTrigger:{
          trigger : el,
          start : "top 60%"
        }
        
      });
    });
    gsap.utils.toArray('.left_imgclass').forEach((el)=>{

      gsap.fromTo((el), {
        x: 200,
        opacity: 0,
        y: 10,
      },{
        x:0,
        y:0,
        opacity:1,
        duration: 1,
        ease:"sine.inOut",
        scrollTrigger:{
          trigger : el,
          start : "top 60%"
        }
        
      });
    });

  }, []);

  return (
    <div
      key={property.id}
      className={` ${
        property.id % 2 !== 0 ? "md:flex-row" : "md:flex-row-reverse"
      } relative md:flex-center  flex flex-col gap-6 md:py-16 py-12 px-4  md:gap-28`}
    >
      <div className={`${property.id%2 !== 0 ? "right_imgclass" : "left_imgclass"} relative `}>
        <Image
          src={"/prop1.png"}
          width={545}
          height={340}
          alt="propertyImg"
          className={` ${property.id % 2 !== 0 ? "md:-rotate-3" : "md:rotate-3"} `}
        />

        <div
          className={`${
            property.id % 2 !== 0
              ? "md:-left-12 -left-3  rotate-12"
              : " md:-right-12 -right-3 -rotate-12"
          } absolute bg-bright_red rounded-full md:p-2 p-1 md:-top-5 -top-3 `}
        >
          <Image
            src={"/triangle.svg"}
            width={70}
            height={72}
            alt="svg"
            className="md:w-[70px] w-[40px] "
          />
        </div>
      </div>
      <div className={` ${property.id%2 !==0 ? "left_imgclass" : "right_imgclass" } max-w-[700px] `}>
        <h2 className="md:text-[34px] text-[28px] leading-snug md:leading-normal font-[550] text-[#003A47]">
          {property.title}
        </h2>
        <h3 className="font-medium md:text-[28px] text-[23px] leading-tight md:leading-normal md:tracking-[0.5px] text-[#234E70]">
          {property.description}
        </h3>
        <ul className="list-disc list-inside md:bodyText text-[#003A47]">
          {property.features.map((feature, i) => (
            <li key={i}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PropertyCard;
