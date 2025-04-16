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
      <div className="my-16 *:my-14 md:max-w-[60vw] mx-auto">
        <div>
          <h2 className="hr_subheading md:hero_subheading text-[22px] font-[550] leading-tight mx-auto">
            {serviceData.title}
          </h2>
          <h2 className="text-[24px] ">{serviceData.subtitle}</h2>
        </div>

        <div className="text-start">
          <h2 className="hr_subheading md:hero_subheading text-[22px] font-[550] leading-tight">
            {serviceData.h1}
          </h2>
          {serviceData.h1SubText.map((item, i) => (
            <div key={i}>
              <h3 className="text-[20px] font-[550] leading-tight">
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

        <div className="text-start">
          <h2 className="hr_subheading md:hero_subheading text-[22px] font-[550] leading-tight">
            {serviceData.h2}
          </h2>
          <span className="text-[18px]">{serviceData.h2SubText}</span>
        </div>

        <div className="text-start">
          <h2 className="hr_subheading md:hero_subheading text-[22px] font-[550] leading-tight">
            {serviceData.processHeading}
          </h2>
          <ul className="list-disc list-inside  py-3 ">
            {serviceData.processList.map((point, j) => (
              <li key={j}>
                <span className="text-[19px] font-semibold">{point.key}</span>
                <span className="text-[18px]">{point.value}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-start">
          <h2 className="hr_subheading md:hero_subheading text-[22px] font-[550] leading-tight">
            {serviceData.h3}
          </h2>
          <span className="text-[18px]">{serviceData.h3SubText}</span>
        </div>

        <div className="text-start">
          <h2 className="hr_subheading md:hero_subheading text-[22px] font-[550] leading-tight">
            {serviceData.h4}
          </h2>
          <span className="text-[18px]">{serviceData.h4SubText}</span>
        </div>

      </div>
    </div>
  );
};

export default serviceDataDetail;
