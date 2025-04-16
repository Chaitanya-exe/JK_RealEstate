

import React from "react";


export const CarouselRow = ({ images, direction = "left" }) => {
    
    console.log(images);

  return (
    <div className="overflow-hidden w-full py-4 bg-white">
      <div
        className={`flex px- gap-14 w-max animate-scroll ${
          direction === "right" ? "animate-scroll-reverse" : ""
        }`}
        // style={{ animationDuration: speed }}
      >
        {[...images, ...images].map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={`brand-${index}`}
            className="h-20 w-auto object-contain transition duration-300"
          />
        ))}
      </div>
    </div>
  );
};

