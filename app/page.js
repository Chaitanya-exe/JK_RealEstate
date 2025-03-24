"use client";

import AccordianComp from "@/components/AccordianComp";
import Button from "@/components/Button";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";
import QueryForm from "@/components/QueryForm";
import Slick from "@/components/Slick";
import Top from "@/components/Top";
import { properties, secondProperties } from "@/constants/dummydata";
import Image from "next/image";
import { gsap } from "gsap";
// import { SplitText } from "gsap/SplitText";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PhoneSlick from "@/components/PhoneSlick";
import Link from "next/link";
import { ArrowBack, ArrowForwardIos } from "@mui/icons-material";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const headingRef = useRef(null);
  const [activeTab, setActiveTab] = useState("1");

  let data;

  if (activeTab === "1") {
    data = properties;
  } else {
    data = secondProperties;
  }

  // useEffect(() => {
  //   const tl = gsap.timeline();

  //   // Fade-in with scale
  //   tl.from(headingRef.current, {
  //     opacity: 0,
  //     scale: 0.8,
  //     y: 50,
  //     duration: 1.5,
  //     ease: "power4.out",
  //   });

  //   // Text wobble effect
  //   tl.to(headingRef.current, {
  //     rotate: 2,
  //     duration: 0.3,
  //     yoyo: true,
  //     repeat: 1,
  //     ease: "elastic.out(1, 0.5)",
  //   });

  //   // Subtle infinite glow effect
  //   tl.to(headingRef.current, {
  //     textShadow: "0px 0px 15px rgba(255, 255, 255, 0.8)",
  //     duration: 2.5,
  //     repeat: -1,
  //     yoyo: true,
  //     ease: "power1.inOut",
  //   });
  // }, []);

  //  useEffect(() => {
  //    // Split the text into characters
  //    const chars = headingRef.current.textContent.split("");
  //    headingRef.current.innerHTML = chars
  //      .map((char) => `<span style="display: inline-block">${char}</span>`)
  //      .join("");

  //    // Animate each character
  //    gsap.fromTo(
  //      headingRef.current.children,
  //      { opacity: 0, y: 50 },
  //      {
  //        opacity: 1,
  //        y: 0,
  //        stagger: 0.05,
  //        ease: "power2.out",
  //        duration: 1.5,
  //      }
  //    );
  //  }, []);

  useGSAP(() => {
    const words = headingRef.current.textContent.split(" ");
    headingRef.current.innerHTML = words
      .map(
        (word) =>
          `<span style="display: inline-block; margin-right: 8px">${word}</span>`
      )
      .join(" ");

    gsap.fromTo(
      headingRef.current.children,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        ease: "power2.out",
        duration: 1,
      }
    );

    gsap.fromTo(
      ".spanclass",
      {
        scale: "1.8",
        borderRadius: "100%",
        x: 816,
        y: -70,
        backgroundColor: "#F43F5E",
      },
      {
        ease: "power2.inOut",
        scale: 0.3,
        duration: 2,
        delay: 1,
        x: 10,
        y: 2,
        backgroundColor: "white",
        borderRadius: "20%",
      }
    );

    gsap.from(".hr_subheading", {
      x: -15,
      // y:10,
      opacity: 0,
      ease: "power1.inOut",
      duration: 1,
    });

    gsap.utils.toArray(".tophead").forEach((el) => {
      gsap.from(el, {
        opacity: 0,
        y: 8,
        // rotate:1,
        ease: "power1.inOut",
        duration: 1.5,
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          toggleActions: "play reverse play reverse",
        },
      });
    });
  }, []);

  return (
    <div className="overflow-x-hidden">
      <section
        id="/"
        className="relative w-screen overflow-hidden pt-24 md:pt-40 md:px-14  bg-gradient-to-b from-bright_red to-dark_red md:min-h-[720px] min-h-[450px]"
      >
        {/* rectangles */}
        <div className="block -top-64 left-[0rem]" />
        <div className="block -top-[260px] left-[13rem]" />
        <div className="block -top-[517px] left-[13rem]" />

        <div className="flex justify-center md:justify-between">
          {/* content */}
          <div className="relative px-6 md:px-16 capitalize text-prim_white">
            <div className="flex max-sm:mt-6 items-end">
              <h1
                ref={headingRef}
                className="md:hero_heading hero_heading_Sm relative "
              >
                Find Your Dream Property – Exclusive Listings Tailored for You
              </h1>
              <p className="spanclass absolute md:left-56 left-20 w-6 h-6 md:w-10 md:h-10 inline-block"></p>
            </div>
            <h2 className="hr_subheading md:hero_subheading text-[23px] font-[550] text-prim_white/95">
              Luxury Homes, Commercial Spaces, and Prime Investments – All in
              One Place.
            </h2>
            <div className="flex justify-start items-center mt-5 gap-2 md:gap-6">
              <Button
                as="a"
                type={"primary"}
                text={"view properties"}
                classname={"md:py-3 md:px-5 p-2 rounded-sm"}
                hrefLink="properties"
              />
              <Button
                as="a"
                type={"sec"}
                text={"schedule a consulatation"}
                classname={"md:py-3 md:px-5 p-2 rounded-sm"}
                hrefLink="form"
              />
            </div>
          </div>

          {/* image */}
          <div className="rounded-full max-sm:hidden flex-center min-w-[550px] min-h-[550px] overflow-hidden outline outline-prim_white/95 hover:scale-105 transition duration-500 delay-100 md:-mt-14">
            <Image
              src={"/heroImg.png"}
              width={510}
              height={600}
              alt="img"
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* properties */}
      <section id="properties" className="md:px-28 pb-6">
        <Top
          head1={
            <p>
              <span className="text-bright_red">Affordable Homes</span>
              {"  "} with Unmatched Value
            </p>
          }
          classname={"max-w-[630px] mx-auto text-center md:my-10 pt-16"}
        />

        {/* toggle buttons */}
        <div className="flex items-center gap-3 justify-center">
          <div onClick={() => setActiveTab("1")}>
            <Button
              type={activeTab === "1" ? "active" : "deactive"}
              text={"Residential"}
              classname={activeTab === "1" ? "text-xl" : "rounded-3xl"}
            />
          </div>
          <div onClick={() => setActiveTab("2")}>
            <Button
              type={activeTab === "2" ? "active" : "deactive"}
              text={"Commercial"}
              classname={activeTab === "2" ? "text-xl" : "rounded-3xl"}
            />
          </div>
        </div>

        <div className="divide-y divide-[#D6DCE1]">
          {data.slice(2).map((property) => (
            <PropertyCard property={property} key={property.id} />
          ))}
        </div>

        <Link href={"/moreProperties"} className="flex justify-center">
          <Button text={"View more"} type="deactive" icon={<ArrowForwardIos fontSize="smal" />} />
        </Link>

      </section>

      {/* stats */}
      <section
        id="stats"
        className="bg-bright_red 
       md:*:min-w-[250px] *:w-[200px] my-8 py-6 md:py-12 flex flex-col gap-5 md:flex-row justify-center items-center md:gap-16 md:*:space-y-3 text-center "
      >
        <div className="">
          <p className="text-bright_red  bg-prim_white md:p-8 py-6 px-8 text-[65px]  md:text-[80px] font-[600] tracking-wide">
            10+
          </p>
          <p className="text-prim_white text-[22px] mt-1 md:text-[28px] font-medium capitalize">
            years of experience
          </p>
        </div>
        <div>
          <p className="text-bright_red  bg-prim_white md:p-8 py-6 px-8 text-[65px]  md:text-[80px] font-[600] tracking-wide">
            100+
          </p>
          <p className="text-prim_white text-[22px] mt-1 md:text-[28px]  font-medium capitalize">
            Properties Sold{" "}
          </p>
        </div>
        <div>
          <p className="text-bright_red  bg-prim_white md:p-8 py-6 px-8 text-[65px]  md:text-[80px] font-[600] tracking-wide">
            200+
          </p>

          <p className="text-prim_white text-[22px] mt-1 md:text-[28px]  font-medium capitalize">
            Satisfied Clients{" "}
          </p>
        </div>
        <div>
          <p className="text-bright_red  bg-prim_white md:p-8 py-6 px-8 text-[65px]  md:text-[80px] font-[600] tracking-wide">
            10+
          </p>

          <p className="text-prim_white text-[22px] mt-1 md:text-[28px]  font-medium capitalize">
            Expert Team{" "}
          </p>
        </div>
      </section>

      {/* work */}
      <section id="aboutUs">
        <Top
          head1={
            <p>
              Your Trusted Partner in{" "}
              <span className="text-bright_red">Real estate</span> Excellence
            </p>
          }
          classname={"max-w-[630px] mx-auto text-center my-10 pt-16"}
        />
        <div className="flx md:flex-col px-4 md:px-24">
          <div className=" flex md:flex-row flex-col-reverse justify-center md:pt-10 ">
            <div className="md:px-14 p-3 md:py-12 w-full md:w-1/2 bg-[#EDF2F7] group hover:bg-gray hover:text-prim_white">
              <h1 className="md:text-[34px] text-[24px] font-[550] text-[#003A47] group-hover:text-prim_white">
                Who we are.
              </h1>
              <h2 className="font-medium leading-snug md:leading-normal md:text-[28px] text-[19px] md:tracking-[0.5px] text-[#234E70] group-hover:text-prim_white">
                At [Your Company Name], we are more than just a real estate
                agency. Our mission is to create meaningful connections between
                people and properties. Established in [Year], we have proudly
                served [Location/Market] with a commitment to excellence,
                integrity, and personalized service.
              </h2>
            </div>
            <Image
              src={"/who.png"}
              width={695}
              height={370}
              alt="img"
              className="hover:scale-1"
            />
          </div>

          <div className="max-sm:hidden  -my-9 z-10 bg-bright_red rounded-full w-fit p-6 rotate-12 mx-auto">
            <Image src={"/triangle.svg"} width={80} height={80} alt="svg" />
          </div>

          <div className=" flex md:flex-row flex-col justify-center mt-6 md:mt-0 md:pt-10 ">
            <Image
              src={"/what.png"}
              width={695}
              height={370}
              alt="img"
              className="hover:scale-1"
            />
            <div className="md:px-14 p-3 md:py-12 w-full md:w-1/2 bg-[#EDF2F7] group hover:bg-gray hover:text-prim_white">
              <h1 className="md:text-[34px] text-[24px] font-[550] text-[#003A47] group-hover:text-prim_white">
                Who we are.
              </h1>
              <h2 className="font-medium leading-snug md:leading-normal md:text-[28px] text-[19px] md:tracking-[0.5px] text-[#234E70] group-hover:text-prim_white">
                At [Your Company Name], we are more than just a real estate
                agency. Our mission is to create meaningful connections between
                people and properties. Established in [Year], we have proudly
                served [Location/Market] with a commitment to excellence,
                integrity, and personalized service.
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* testimonial */}
      <section id="testimonials" className="">
        <Top
          head1={
            <p>
              Success Stories from{" "}
              <span className="text-bright_red">Industry leaders.</span>
            </p>
          }
          classname={"max-w-[630px] mx-auto text-center my-10 md:pt-16"}
        />
        {/* desktop */}
        <div className="opacity-0 md:opacity-100 absolute max-md:hidden md:relative">
          <Slick />
        </div>
        {/* phone */}
        <div className="relative md:hidden min-h-[400px]">
          <div className="opacity-100 md:opacity-0 *:my-2 absolute ">
            <PhoneSlick />
          </div>
        </div>
      </section>

      {/* form */}
      <section
        id="form"
        className="h-[690px] py-10 mb-12 mt-36 relative w-full bg-[url('/formBg.png')] bg-cover bg-center"
      >
        <Image
          src={"/formSvg.svg"}
          width={400}
          height={300}
          alt="svg"
          className="absolute max-md:w-[200px] w-[400px] -top-[12rem] md:-top-[18rem] -right-8"
        />

        <QueryForm />
      </section>

      {/* faqs */}
      <section id="faqs">
        <Top
          head1={<p>Your Questions, Answered</p>}
          classname={" py-5 text-center mx-auto max-w-[600px] "}
        />

        <AccordianComp />
      </section>

      <p className="md:mx-44 mx-12 py-6 md:text-[19px] text-sm  leading-tight md:leading-normal text-[#234E70] text-center  ">
        Have more questions? Contact us directly at +1 (123) 456-7890 or email
        us at contact@yourcompany.com. We’re here to help!
      </p>
    </div>
  );
}
