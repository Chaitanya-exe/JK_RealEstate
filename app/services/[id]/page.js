"use client";

import { useParams } from 'next/navigation'
import React from 'react'

const page = () => {
  const {id} = useParams()
  return (
    <div>
      hi {id}
    </div>
  )
}

export default page

