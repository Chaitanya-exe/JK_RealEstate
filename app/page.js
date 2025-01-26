import Button from "@/components/Button";
import PropertyCard from "@/components/PropertyCard";
import Top from "@/components/Top";
import { properties } from "@/constants/dummydata";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section className="relative pt-40 px-10  bg-gradient-to-b from-bright_red to-dark_red min-h-[700px]">
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
            <div className="flex-center mt-4 gap-6">
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
      <section className="py-16 px-28">
        <Top
          head1={
            <p>
              <span className="text-bright_red">Affordable Homes</span>
              {"  "} with Unmatched Value
            </p>
          }
        />

        <div className="py-16 divide-y divide-[#D6DCE1]">
          {properties.map((property) => (
            <PropertyCard property={property} />
          ))}
        </div>
      </section>

      {/* stats */}
      <section
        className="bg-bright_red 
       *:min-w-[250px] py-10 flex justify-center items-center gap-16 *:space-y-3 text-center"
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
          classname={"max-w-[630px] mx-auto"}
        />
        <div>
          <div>
            <h1>Who we are.</h1>
          </div>
          <Image src={"/who.png"} width={695} height={370} alt="img" />
        </div>
      </section>
    </div>
  );
}
