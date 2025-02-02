import { testimonialData } from "@/constants/dummydata";
import { Rating } from "@mui/material";
import React, { Component } from "react";
import Slider from "react-slick";

function PhoneSlick() {
  const settings = {
    autoplay: true,
    autoplaySpeed: 6000,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    beforeChange: function (currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function (currentSlide) {
      console.log("after change", currentSlide);
    },
  };
  return (
    // <div className="slider-container">
      <Slider {...settings} >
        {testimonialData.map((testimonial, index) => (
          <div key={index} className="">
            <div className="flex flex-col shadow backdrop-blur-sm bg-cardBg/40 w-fit py-5 px-5 text-wrap mx-auto text-center items-center">
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
    // </div>
  );
}

export default PhoneSlick;
