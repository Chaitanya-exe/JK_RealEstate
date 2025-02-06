"use client";


import Button from '@/components/Button';
import Link from 'next/link';
import React from 'react'

const layout = ({children}) => {


  return (
    <div>
      <div className="flex gap-3 justify-end mx-10 my-3">
        <Button
          text={"add Properties"}
          type={"primary"}
          link={"/dashboard/addProp"}
          classname={"md:p-4 p-1 max-sm:hidden max-sm:rounded-md  rounded-md"}
        />
        <Button
          text={"view Properties"}
          type={"primary"}
          link={"/dashboard/viewProp"}
          classname={"md:p-4 p-1 max-sm:hidden max-sm:rounded-md  rounded-md"}
        />
        <Button
          text={" all queries"}
          type={"primary"}
          link={"/dashboard/queries"}
          classname={"md:p-4 p-1 max-sm:hidden max-sm:rounded-md  rounded-md"}
        />
       
      </div>

      {children}
    </div>
  );
}

export default layout
