import React from "react";

const serviceDataDetail = ({ serviceData }) => {

    if (!serviceData) {
      return <div>Loading...</div>;
    }

  return (
    <div className="text-center">
      <div
        className="min-h-[450px] bg-center bg-cover  "
        style={{ backgroundImage: `url(${serviceData.imagePath})` }}
      >
        <h1 className={`text-center hero_heading mx-auto py-36`}>
          {serviceData.name}
        </h1>
      </div>
      <div className="my-16 md:mx-20">
        <h2 className="hr_subheading md:hero_subheading text-[22px] font-[550] leading-tight mx-auto">
          {serviceData.title}
        </h2>
        <h2 className="text-[24px] ">{serviceData.subtitle}</h2>

        <ul className="py-12 text-start max-w-[900px] mx-auto text-3xl font-[550]">
          We offer:
          {serviceData.list.map((item, i) => (
            <li key={i}>
              <span className="text-xl">{item.key}</span>
              <span className="text-[20px] font-normal leading-tight">{item.value}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default serviceDataDetail;
