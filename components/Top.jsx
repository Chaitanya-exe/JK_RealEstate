import React from "react";

const Top = ({ head1, head2,classname }) => {
  return (
    <div className={`${classname}  `}>
      <h1 className="tophead md:tophead1 tophead1_Sm ">{head1}</h1>
      <h2 className="font-medium md:leading-normal leading-tight md:text-[28px] text-[24px] tracking-[0.5px] text-[#234E70]">
        {head2}
      </h2>
    </div>
  );
};

export default Top;
