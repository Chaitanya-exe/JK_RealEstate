import React from "react";

const Top = ({ head1, head2,classname }) => {
  return (
    <div className={`${classname}  `}>
      <h1 className="tophead1 ">{head1}</h1>
      <h2 className="font-medium text-[28px] tracking-[0.5px] text-[#234E70]">
        {head2}
      </h2>
    </div>
  );
};

export default Top;
