"use client"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Link from 'next/link'
import React from 'react'

function To() {
  useGSAP(()=>{
  gsap.to("#gto",{
    x:300,
    duration:2,
    ease:"power1.inOut",
    yoyo:true,
    repeat:-1,
    rotate:180
  })
},[])
  return (
    <div  className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
<h3 className="text-2xl font-semibold text-lime-800 mb-6">To Page</h3>
      <div className='w-28 h-28 bg-lime-800 rounded-3xl'
      id='gto'>
      </div>
      <button type='button' className='bg-black text-gray-100 rounded-md w-20 m-4'>
        <Link href="/">Go Back</Link>
      </button>
    </div>
  )
}
export default To
