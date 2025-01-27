import AccordianComp from "@/components/AccordianComp";
import Button from "@/components/Button";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";
import QueryForm from "@/components/QueryForm";
import Slick from "@/components/Slick";
import Top from "@/components/Top";
import { properties } from "@/constants/dummydata";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section className="relative pt-40 px-10  bg-gradient-to-b from-bright_red to-dark_red min-h-[730px]">
        {/* rectangles */}
        <div className="block -top-64 left-[0rem]" />
        <div className="block -top-[260px] left-[13rem]" />
        <div className="block -top-[517px] left-[13rem]" />

        <div className="flex justify-between">
          {/* content */}
          <div className="relative px-16 capitalize text-prim_white">
            <h1 className="hero_heading  ">
              Find Your Dream Property – Exclusive Listings Tailored for You
            </h1>
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
      <section className="px-28 pb-6">
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
            <PropertyCard property={property} />
          ))}
        </div>
      </section>

      {/* stats */}
      <section
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
      <section>
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
      <section className="">
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
      <section className="h-[690px] py-10 mb-12 mt-36 relative w-full bg-[url('/formBg.png')] bg-cover bg-center">
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
      <section>
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
