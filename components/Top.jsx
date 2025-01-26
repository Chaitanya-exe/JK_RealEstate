import React from "react";

const Top = ({ head1, head2,classname }) => {
  return (
    <div className={`${classname}`}>
      <h1 className="tophead1 text-center">{head1}</h1>
      <h2>{head2}</h2>
    </div>
  );
};

export default Top;
