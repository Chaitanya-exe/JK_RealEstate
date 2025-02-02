"use client";

import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { Rating } from "@mui/material";
import { testimonialData } from "@/constants/dummydata";

const Slick = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const sliderRef1 = useRef(null);
  const sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1.current);
    setNav2(sliderRef2.current);
  }, []);

 

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    //   autoplay: true,
    autoplaySpeed: 6000,
    arrows: true, // Enables left and right arrows
    //   appendDots: (dots) => (
    //     <div className="custom-dots">
    //       <ul> {dots} </ul>
    //     </div>
    //   ),
    //   customPaging: (i) => (
    //     <div className="w-3 h-3 bg-gray-400 rounded-full hover:bg-gray-700 transition-all"></div>
    //   ),
  };

  const navSettings = {
    slidesToShow: 2,
    swipeToSlide: true,
    focusOnSelect: true,
    arrows: false, // Turn off arrows for the navigation slider
  };

  return (
    <div className="slider-container text-prim_black  py-10 md:px-32  relative">
      <div className=" absolute right-10 md:right-44 top-6 grid w-fit grid-cols-2 gap-2">
        <div className="bg-bright_red/40 w-[60px] md:w-[180px] h-[60px] md:h-[180px] rounded-lg" />
        <div className="bg-bright_red/40 w-[60px] md:w-[180px] h-[60px] md:h-[180px] rounded-lg" />
        <div className="bg-bright_red/40 w-[60px] md:w-[180px] h-[60px] md:h-[180px] rounded-lg" />
        <div className="bg-bright_red/40 w-[60px] md:w-[180px] h-[60px] md:h-[180px] rounded-full" />
      </div>

      {/* Main Slider */}
      <Slider {...settings} asNavFor={nav2} ref={sliderRef1} className="mb-6">
        {testimonialData.map((testimonial, index) => (
          <div key={index} className="md:px-4 px-2">
            <div className="flex md:flex-row flex-col shadow backdrop-blur-sm bg-cardBg/40 w-fit md:py-5 p-2 md:px-20 mx-auto text-center items-center justify-center md:gap-12">
              {/* Testimonial Image and Details */}
              <div className="flex flex-col items-center ">
                <div className="rounded-full overflow-hidden bg-red-100 w-[80px] h-[80px] md:w-[180px] md:h-[180px]  flex items-center justify-center">
                  <Image
                    src={testimonial.imageUrl}
                    width={180}
                    height={200}
                    alt="img"
                    className="object-cover w-[80px] h-[80px] md:w-[180px] md:h-[200px]"
                  />
                </div>
                <p className="md:mt-3  md:leading-normal leading-tight font-semibold">
                  — {testimonial.name}
                </p>
                <p className="text-sm md:leading-normal leading-tight">
                  {testimonial.role}
                </p>
              </div>

              {/* Testimonial Feedback */}
              <div className="md:max-w-xl px-8 md:px-0">
                <p className="bodyText my-3">{testimonial.feedback}</p>
                <Rating name="read-only" value={testimonial.rating} readOnly />
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Thumbnail Navigation */}

      <Slider {...navSettings} asNavFor={nav1} ref={sliderRef2}>
        {testimonialData.map((testimonial, index) => (
          <div key={index} className="">
            <div className="flex flex-col shadow backdrop-blur-sm bg-cardBg/40 w-fit py-5 px-6 text-wrap mx-auto text-center items-center">
              {/* Testimonial Image and Details */}
              <div className="">
                <p className="mt-3 font-semibold">— {testimonial.name}</p>
                <p className="text-sm">{testimonial.role}</p>
              </div>

              {/* Testimonial Feedback */}
              <div className="max-w-xl">
                <p className="bodyText my-3">{testimonial.feedback}</p>
                <Rating name="read-only" value={testimonial.rating} readOnly />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Slick;
