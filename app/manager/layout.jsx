"use client";


import Button from '@/components/Button';
import Link from 'next/link';
import React from 'react'

const layout = ({children}) => {


  return (
    <div>
      <div className="flex gap-3 justify-end mx-10 my-3">
      <Link href={'/manager/addProp'} >

        <Button
          text={"add Properties"}
          type={"primary"}
          classname={"md:p-4 p-1 max-sm:hidden max-sm:rounded-md  rounded-md"}
        />
      </Link>
      <Link href={'/manager/viewProp'}>

        <Button
          text={"view Properties"}
          type={"primary"}
          classname={"md:p-4 p-1 max-sm:hidden max-sm:rounded-md  rounded-md"}
        />
      </Link>
      <Link  href={'/manager/queries'}>

        <Button
          text={" all queries"}
          type={"primary"}
          classname={"md:p-4 p-1 max-sm:hidden max-sm:rounded-md  rounded-md"}
        />
      </Link>
       
      </div>

      {children}
    </div>
  );
}

export default layout
