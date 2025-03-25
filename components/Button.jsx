import React from "react";

const Button = ({
  as: Component = "button",
  type = "primary",
  text,
  icon,
  classname,
  hrefLink,
  ...props
}) => {
  const baseStyles =
    "capitalize text-nowrap p-2 inline-flex items-center gap-2";
  const variantStyles = {
    primary:
      "bg-prim_black text-prim_white transition duration-100 hover:bg-gray",
    active:
      "bg-bright_red rounded-3xl px-5 text-prim_white transition duration-100",
    deactive: "hover:bg-prim_black  px-5 text-prim_white bg-gray",
    sec: "bg-none border hover:ring-1 hover:ring-prim_white border-prim_white/50",
  };

  return (
    <Component
      className={`${baseStyles} ${variantStyles[type]} ${classname}`}
      {...(hrefLink ? { href: `#${hrefLink}` } : {})}
      {...props}
    >
      {text}
      {icon && <span>{icon}</span>}
    </Component>
  );
};

export default Button;
