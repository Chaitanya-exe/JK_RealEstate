"use client";

import gsap from "gsap";
import React, { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

const serviceDataDetail = ({ serviceData }) => {
  useGSAP(() => {
    const items = gsap.utils.toArray(".process-step");
    items.forEach((item, i) => {
      gsap.from(item, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
        //  repeat:-1,
        scrollTrigger: {
          trigger: item,
          start: "top 86%",
          toggleActions: "play none none none",
          once: false,
          markers: true,
        },
      });
    });

    gsap.from(".progress-line", {
      scaleY: 0,
      transformOrigin: "top center",
      //  height: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".process-container",
        start: "top 60%",
        toggleActions: "play none none none",
      },
    });

    gsap.to(".bounce-animation", {
      y: -14,
      duration: 0.6,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
    });
  }, []);

  if (!serviceData) {
    return <div>Loading...</div>;
  }

  return (
    <section className="text-center relative">
      <div
        className="min-h-[450px] flex items-center justify-center bg-center bg-cover"
        style={{ backgroundImage: `url(${serviceData.imagePath})` }}
      >
        <h1
          className={`tophead md:tophead1 tophead1_Sm  bg-white/50 backdrop-blur-sm rounded-md shadow-lg p-4`}
        >
          {serviceData.name}
        </h1>
      </div>
      <div className="bounce-animation -mt-28 bg-white/30 border border-gray/10 backdrop-blur-sm  p-4 max-w-[900px] mx-auto">
        <h2 className="hr_subheading md:hero_subheading text-[22px] font-[550] leading-tight mx-auto">
          {serviceData.title}
        </h2>
        <h2 className="text-[24px] ">{serviceData.subtitle}</h2>
      </div>

      <div className="my-20 mx-44 space-y-8">
        <h2 className="hr_subheading md:hero_subheading text-[22px] font-[550] leading-tight mx-auto">
          {serviceData.h1}
        </h2>
        <div className="flex text-start justify-center   *:shadow-sm  *:p-16  *:w-[800px] divide-gray/10 divide-x">
          {serviceData.h1SubText.map((item, i) => (
            <div
              key={i}
              className="bg-gradient-to-t hover:bg-gradient-to-b from-bright_red/20 to-white"
            >
              <h3 className="text-[24px] font-[550] leading-tight">
                {item.part}
              </h3>
              <h3 className="text-[19px]">{item.partDesc}</h3>
              <ul className="list-disc list-inside  py-3 ">
                {item.points.map((point, j) => (
                  <li key={j}>
                    <span className="text-[18px]">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="process-container py-16 px-4 max-w-4xl mx-auto relative">
        <h2 className="text-4xl font-bold text-center mb-12">Our Process</h2>

        <div className="relative">
          <div className="progress-line absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-bright_red/50" />

          {serviceData.processList.map((step, i) => (
            <div
              key={i}
              className={`process-step mb-16 flex items-start gap-4 w-full ${
                i % 2 === 0 ? "justify-start pr-10" : "justify-end pl-10"
              }`}
            >
              <div
                className={`bg-prim_black/5 backdrop-blur p-5 rounded-xl shadow-lg max-w-md w-full relative ${
                  i % 2 === 0 ? "text-left" : "text-right"
                }`}
              >
                <h3 className="text-xl font-semibold mb-2">{step.key}</h3>
                <p className="text-gray-600">{step.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-4xl  mx-auto text-center">
        <h2 className="hr_subheading md:hero_subheading text-[22px] font-[550] leading-tight">
          {serviceData.h4}
        </h2>
        <span className="text-[18px]">{serviceData.h4SubText}</span>
      </div>
    </section>
  );
};

export default serviceDataDetail;
