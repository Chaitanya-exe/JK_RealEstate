import Link from "next/link";
import React from "react";

const Button = ({ type, text, icon, classname, hrefLink, link }) => {

   if (hrefLink) {
    return (
      <a
        href={`#${hrefLink}`}
        className={`${
          type === "primary"
            ? "bg-prim_black text-prim_white hover:bg-gray"
            : "bg-none border hover:ring-1 hover:ring-prim_white border-prim_white"
        } capitalize text-nowrap ${classname} p-2 inline-block`}
      >
        {icon && <span>{icon}</span>}
        {text}
      </a>
    );
  }

  return (
    <Link href={link}
      className={`${
        type === "primary"
          ? "bg-prim_black text-prim_white hover:bg-gray"
          : "bg-none border hover:ring-1 hover:ring-prim_white border-prim_white"
      } capitalize text-nowrap ${classname}`}
    >
      {icon && <span>{icon}</span>}
      <p>{text}</p>
    </Link>
  );
};
  

export default Button;
