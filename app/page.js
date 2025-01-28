"use client";


import AccordianComp from "@/components/AccordianComp";
import Button from "@/components/Button";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";
import QueryForm from "@/components/QueryForm";
import Slick from "@/components/Slick";
import Top from "@/components/Top";
import { properties } from "@/constants/dummydata";
import Image from "next/image";
import { gsap } from "gsap";
// import { SplitText } from "gsap/SplitText";
import { useEffect, useRef } from "react";

// gsap.registerPlugin(SplitText);


export default function Home() {
  const headingRef = useRef(null);
  const spanRef = useRef(null);

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


    useEffect(() => {
      // Split the text into words
      const words = headingRef.current.textContent.split(" ");
      headingRef.current.innerHTML = words
        .map(
          (word) =>
            `<span style="display: inline-block; margin-right: 8px">${word}</span>`
        )
        .join("");

      // Animate each word
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
          spanRef.current,
          {
            scale: "1.8",
            borderRadius: "100%",
            x: 820,
            y: -70,
            // borderRadius: "15%",
            backgroundColor: "#F43F5E",
          },
          {
            ease: "power2.inOut",
            scale: 0.3,
            duration: 2,
            delay: 1, // Start after text animation
            x: 0,
            y: 0,
            backgroundColor: "white",
            borderRadius: "20%",
            // clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)", // Triangle shape
          }
        );
        }, []);

  return (
    <div>
      <section
        id="/"
        className="relative pt-40 px-10  bg-gradient-to-b from-bright_red to-dark_red min-h-[730px]"
      >
        {/* rectangles */}
        <div className="block -top-64 left-[0rem]" />
        <div className="block -top-[260px] left-[13rem]" />
        <div className="block -top-[517px] left-[13rem]" />

        <div className="flex justify-between">
          {/* content */}
          <div className="relative px-16 capitalize text-prim_white">
          <div className="flex items-end">

            <h1 ref={headingRef} className="hero_heading relative ">
              Find Your Dream Property – Exclusive Listings Tailored for You
            </h1>
              <p
                ref={spanRef}
                className="spanclass absolute left-56  w-10 h-10 inline-block"
              ></p>
          </div>
            <h2 className="hero_subheading text-prim_white/95">
              Luxury Homes, Commercial Spaces, and Prime Investments – All in
              One Place.
            </h2>
            <div className="flex justify-start items-center mt-4 gap-6">
              <Button
                type={"primary"}
                text={"view properties"}
                classname={"py-3 px-5 rounded-sm"}
              />
              <Button
                type={"sec"}
                text={"schedule a consulatation"}
                classname={"py-3 px-5 rounded-sm"}
              />
            </div>
          </div>

          {/* image */}
          <div className="rounded-full overflow-hidden outline outline-prim_white -mt-14">
            <Image src={"/heroImg.png"} width={510} height={600} alt="img" />
          </div>
        </div>
      </section>

      {/* properties */}
      <section id="properties" className="px-28 pb-6">
        <Top
          head1={
            <p>
              <span className="text-bright_red">Affordable Homes</span>
              {"  "} with Unmatched Value
            </p>
          }
          classname={"max-w-[630px] mx-auto text-center my-10 pt-16"}
        />

        <div className="divide-y divide-[#D6DCE1]">
          {properties.map((property) => (
            <PropertyCard property={property} key={property.id} />
          ))}
        </div>
      </section>

      {/* stats */}
      <section
        id="stats"
        className="bg-bright_red 
       *:min-w-[250px] my-8 py-12 flex justify-center items-center gap-16 *:space-y-3 text-center"
      >
        <div className="">
          <p className="text-bright_red  bg-prim_white p-8  text-[80px] font-[600] tracking-wide">
            10+
          </p>
          <p className="text-prim_white text-[28px] font-medium capitalize">
            years of experience
          </p>
        </div>
        <div>
          <p className="text-bright_red  bg-prim_white p-8  text-[80px] font-[600] tracking-wide">
            100+
          </p>
          <p className="text-prim_white text-[28px] font-medium capitalize">
            Properties Sold{" "}
          </p>
        </div>
        <div>
          <p className="text-bright_red  bg-prim_white p-8 text-[80px] font-[600] tracking-wide">
            200+
          </p>

          <p className="text-prim_white text-[28px] font-medium capitalize">
            Satisfied Clients{" "}
          </p>
        </div>
        <div>
          <p className="text-bright_red  bg-prim_white p-8  text-[80px] font-[600] tracking-wide">
            10+
          </p>

          <p className="text-prim_white text-[28px] font-medium capitalize">
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
        <div className="flex md:flex-col px-24">
          <div className=" flex justify-center pt-10 ">
            <div className="px-14 py-12 w-1/2 bg-[#EDF2F7] group hover:bg-gray hover:text-prim_white">
              <h1 className="text-[34px] font-[550] text-[#003A47] group-hover:text-prim_white">
                Who we are.
              </h1>
              <h2 className="font-medium text-[28px] tracking-[0.5px] text-[#234E70] group-hover:text-prim_white">
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

          <div className="-my-9 z-10 bg-bright_red rounded-full w-fit p-6 rotate-12 mx-auto">
            <Image src={"/triangle.svg"} width={80} height={80} alt="svg" />
          </div>

          <div className="flex justify-center  pb-16">
            <Image
              src={"/what.png"}
              width={695}
              height={370}
              alt="img"
              className="hover:scale-1"
            />
            <div className="px-14 py-12 w-1/2 bg-[#EDF2F7] hover:bg-gray group">
              <h1 className="text-[34px] font-[550] text-[#003A47] group-hover:text-prim_white">
                Who we are.
              </h1>
              <h2 className="font-medium text-[28px] tracking-[0.5px] text-[#234E70] group-hover:text-prim_white">
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
          classname={"max-w-[630px] mx-auto text-center my-10 pt-16"}
        />
        <Slick />
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
          className="absolute -top-[18rem] -right-8"
        />
        <div className="bg-white/70 pb-10 h-full md:mx-72 md:px-12 rounded-[30px] ">
          <Top
            head1={<p>Let’s Connect</p>}
            head2={
              <p>
                Contact us today to find the perfect property or investment
                opportunity.
              </p>
            }
            classname={" py-5 max-w-[600px] "}
          />

          <QueryForm />
        </div>
      </section>

      {/* faqs */}
      <section id="faqs">
        <Top
          head1={<p>Your Questions, Answered</p>}
          classname={" py-5 text-center mx-auto max-w-[600px] "}
        />

        <AccordianComp />
      </section>

      <p className="md:mx-44 py-6 text-[19px] text-[#234E70] text-center  ">
        Have more questions? Contact us directly at +1 (123) 456-7890 or email
        us at contact@yourcompany.com. We’re here to help!
      </p>

      {/* footer */}
      <Footer />
    </div>
  );
}
