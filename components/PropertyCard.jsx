import Image from "next/image";
import React from "react";

const PropertyCard = ({ property }) => {
  return (
    <div
      key={property.id}
      className={` ${
        property.id % 2 !== 0 ? "flex-row" : "flex-row-reverse"
      } relative flex-center py-16  gap-28`}
    >
      <div className="relative">
        <Image
          src={"/prop1.png"}
          width={545}
          height={340}
          alt="propertyImg"
          className={` ${property.id % 2 !== 0 ? "-rotate-3" : "rotate-3"} `}
        />

        <div
          className={`${
            property.id % 2 !== 0 ? "-left-12 rotate-12" : " -right-12 -rotate-12"
          } absolute bg-bright_red rounded-full p-2 -top-5 `}
        >
          <Image
            src={"/triangle.svg"}
            width={70}
            height={72}
            alt="svg"
            className=""
          />
        </div>
      </div>
      <div className="max-w-[700px]">
        <h2 className="text-[34px] font-[550] text-[#003A47]">
          {property.title}
        </h2>
        <h3 className="font-medium text-[28px] tracking-[0.5px] text-[#234E70]">
          {property.description}
        </h3>
        <ul className="list-disc list-inside bodyText text-[#003A47]">
          {property.features.map((feature,i) => (
            <li key={i}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PropertyCard;
