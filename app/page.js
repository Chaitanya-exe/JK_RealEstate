"use client";

import AccordianComp from "@/components/AccordianComp";
import Button from "@/components/Button";
import PropertyCard from "@/components/PropertyCard";
import QueryForm from "@/components/QueryForm";
import Slick from "@/components/Slick";
import Top from "@/components/Top";
import { properties, secondProperties } from "@/constants/dummydata";
import Image from "next/image";
import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PhoneSlick from "@/components/PhoneSlick";
import Link from "next/link";
import { ArrowForwardIos } from "@mui/icons-material";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const headingRef = useRef(null);
  const [data, setData] = useState(properties);
  const [activeTab, setActiveTab] = useState("1");

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true
  })


  console.log(data);
  

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
        y: -140,
        backgroundColor: "#F43F5E",
      },
      {
        ease: "power2.inOut",
        scale: 0.3,
        duration: 2.4,
        delay: 1,
        x: -45,
        y: 2,
        backgroundColor: "white",
        borderRadius: "15%",
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

    {/* HOME */}
      <section
        id="/"
        className="relative w-screen overflow-hidden pt-20 md:pt-40 md:px-14  bg-gradient-to-b from-bright_red to-dark_red md:min-h-[720px] min-h-[590px]"
      >
        {/* rectangles */}
        <div className="block -top-64 left-[0rem]" />
        <div className="block -top-[260px] left-[13rem]" />
        <div className="block -top-[517px] left-[13rem]" />

        <div className="flex gap-28 justify-center md:justify-between">
          {/* content */}
          <div className="relative px-4 md:pl-14 md:pr-36 capitalize text-prim_white">
            <div className="flex max-sm:mt-6 items-end">
              <h1
                ref={headingRef}
                className="md:hero_heading hero_heading_Sm relative "
              >
                Premier Delhi-NCR Real Estate Consultancy - Find Your Dream Property in Delhi, Gurgaon, Noida 
              </h1>
              <p className="spanclass absolute md:left-56 left-20 w-6 h-6 md:w-10 md:h-10 inline-block"></p>
            </div>
            <h2 className="hr_subheading md:hero_subheading text-[23px] font-[550] text-prim_white/95">
            Luxury Homes, Commercial Spaces & Prime Investment Opportunities in Delhi-NCR Region | Expert Property Solutions Tailored for You
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
          <div className="rounded-full max-sm:hidden flex-center min-w-[540px] min-h-[540px] overflow-hidden outline outline-prim_white/95 hover:scale-105 transition duration-500 delay-100 md:-mt-14">
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

      {/* PROPERTIES */}
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

        <div className="flex items-center gap-3 justify-center">
          <div onClick={() => { setActiveTab("1"); setData(properties); }}>
            <Button
              type={activeTab === "1" ? "active" : "deactive"}
              text={"Residential"}
              classname={activeTab === "1" ? "text-xl" : "rounded-3xl"}
            />
          </div>
          <div onClick={() => {
            setActiveTab("2");
            setData(secondProperties);
          }}>
            <Button
              type={activeTab === "2" ? "active" : "deactive"}
              text={"Commercial"}
              classname={activeTab === "2" ? "text-xl" : "rounded-3xl"}
            />
          </div>
        </div>

        <div className="divide-y divide-[#D6DCE1]">
          {data.slice(0,3).map((property) => (
            <PropertyCard property={property} key={property.id} />
          ))}
        </div>

        <Link href={"/moreProperties"} className="flex justify-center">
          <Button
            text={"View more"}
            type="deactive"
            icon={<ArrowForwardIos fontSize="smal" />}
          />
        </Link>
      </section>

      {/* STATICTICS */}
      <section
        ref={ref}
        id="stats"
        className="bg-bright_red 
       md:*:min-w-[250px] *:w-[200px] my-8 py-6 md:py-12 flex flex-col gap-5 md:flex-row justify-center items-center md:gap-16 md:*:space-y-3 text-center "
      >
        <div className="">
          <p className="text-bright_red min-w-[100px] h-[170px] flex items-center justify-center  bg-prim_white  text-[65px]  md:text-[80px] font-[600] tracking-wide">
            {inView ? <CountUp delay={0.5} end={10} /> : 0}
            <span>+</span>
          </p>
          <p className="text-prim_white text-[22px] mt-1 md:text-[28px] font-medium capitalize">
            years of experience
          </p>
        </div>
        <div>
          <p className="text-bright_red min-w-[100px] h-[170px] flex items-center justify-center  bg-prim_white  text-[65px]  md:text-[80px] font-[600] tracking-wide">
            {inView ? <CountUp delay={0.5} end={100} /> : 0}
            <span>+</span>
          </p>
          <p className="text-prim_white text-[22px] mt-1 md:text-[28px]  font-medium capitalize">
            Properties Leased{" "}
          </p>
        </div>
        <div>
          <p className="text-bright_red min-w-[100px] h-[170px] flex items-center justify-center  bg-prim_white  text-[65px]  md:text-[80px] font-[600] tracking-wide">
            {inView ? <CountUp delay={0.5} end={200} /> : 0}
            <span>+</span>
          </p>

          <p className="text-prim_white text-[22px] mt-1 md:text-[28px]  font-medium capitalize">
            Satisfied Clients{" "}
          </p>
        </div>
        <div>
          <p className="text-bright_red min-w-[100px] h-[170px] flex items-center justify-center  bg-prim_white  text-[65px]  md:text-[80px] font-[600] tracking-wide">
            {inView ? <CountUp delay={0.5} end={10} /> : 0}
            <span>+</span>
          </p>

          <p className="text-prim_white text-[22px] mt-1 md:text-[28px]  font-medium capitalize">
            Expert Team{" "}
          </p>
        </div>
      </section>

      {/* WORK FLOW */}
      <section id="aboutUs">
        <Top
          head1={
            <p>
              Your Trusted Partner in{" "}
              <span className="text-bright_red">Real Estate</span> Excellence
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
                At J.K Estate, we are more than just a real estate
                company. Our mission is to bring out the best that exists in the market. Established in 2013, we have proudly
                served in Delhi/NCR region with a commitment to excellence,
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
                What we do.
              </h1>
              <h2 className="font-medium leading-snug md:leading-normal md:text-[28px] text-[19px] md:tracking-[0.5px] text-[#234E70] group-hover:text-prim_white">
              To help you discover your ideal commercial property with our expert consultancy services. We specialize in keeping up to date with latest market state and trends that helps us to provide the solutions specific to your requirements and business objectives.
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* LOGOS */}

      <section id="logos">

        
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="">
        <Top
          head1={
            <p>
              Companies that trusted{" "}
              <span className="text-bright_red">Our Services</span>
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

      {/* FORM */}
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

      {/* FAQS */}
      <section id="faqs">
        <Top
          head1={<p>Your Questions, Answered</p>}
          classname={" py-5 text-center mx-auto max-w-[600px] "}
        />

        <AccordianComp />
      </section>

      {/* COMPANY LOGOS CAROUSEL */}



{/* BOTTOM CONTENT/ */}
      <p className="md:mx-44 mx-12 py-6 md:text-[19px] text-sm  leading-tight md:leading-normal text-[#234E70] text-center  ">
        Want personalized communication? Contact us directly at <span className="font-bold">+91 7982500442</span> or email
        us at <span className="font-bold">jkestate99@gmail.com</span> We’re happy to help!
      </p>


    </div>
  );
}
