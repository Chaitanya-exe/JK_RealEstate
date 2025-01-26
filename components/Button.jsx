import React from 'react'

const Button = ({type,text,icon,classname}) => {
  return (
    <button className={`${type == "primary" ? "bg-prim_black text-prim_white hover:bg-gray  " : "bg-none border hover:ring-  hover:ring-prim_white border-prim_white"} capitalize ${classname} `}>
    {icon && <span>{icon}</span>}
      <p>{text}</p>
    </button>
  )
}

export default Button
