"use client";


import Button from '@/components/Button';
import Link from 'next/link';
import React from 'react'
import { usePathname } from 'next/navigation';

const layout = ({children}) => {
  const path = usePathname();
  const pathArr = path.split("/")
  if (pathArr.includes("login")) {
    return (<></>)
  }

  return (
    <div className='bg-prim_white min-h-screen'>
      <div className="flex gap-3 md:justify-end justify-center md:mx-10 py-3">
      <Link href={'/manager/addProp'} >

        <Button
          text={"add Properties"}
          type={"primary"}
          classname={"md:p-4 p-1  max-sm:rounded-md  rounded-md"}
        />
      </Link>
      <Link href={'/manager/viewProp'}>

        <Button
          text={"view Properties"}
          type={"primary"}
          classname={"md:p-4 p-1 max-sm:rounded-md  rounded-md"}
        />
      </Link>
      <Link  href={'/manager/queries'}>

        <Button
          text={" all queries"}
          type={"primary"}
          classname={"md:p-4 p-1  max-sm:rounded-md  rounded-md"}
        />
      </Link>
       
      </div>

      {children}
    </div>
  );
}

export default layout
