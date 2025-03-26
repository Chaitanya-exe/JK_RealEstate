import PropertyCard from "@/components/PropertyCard";
import { properties } from "@/constants/dummydata";
import Image from "next/image";
import React from "react";

export default function MoreProperties() {
  return (
    <section>
      <div className="bg-bright_red pt-[72px]">
        <div
          style={{ backgroundImage: `url('/prop1.png')` }}
          className="w-full h-[320px] bg-prim_black flex justify-center items-center text-center bg-center bg-cover  bg-no-repeat "
        >
          <h1 className="md:hero_heading hero_heading_Sm text-white">
            View all properties
          </h1>
        </div>
      </div>
      <div className="flex justify-center  flex-wrap gap-7 my-6 px-4 md:px-28">
        {properties?.map((property) => (
          <div key={property.id} className="rounded-lg p-1 max-w-[400px] overflow-hidden shadow-md">
            <Image
              src={property.images[1]}
              width={800}
              height={400}
              alt="img"
              className="h-[240px] w-full hover:scale-[1.02] transition duration-200 object-cover object-center"
            />
            <p className="text-lg leading-tight py-2">{property.title}</p>
            {/* <p className="text-ellipsis ext-nowrap">{property.description}</p> */}
          </div>
        ))}
      </div>
    </section>
  );
}
