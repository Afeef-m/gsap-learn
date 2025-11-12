"use client"
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

export default function Pinning() {
  const refBox = useRef(null)
  useEffect(()=>{
    const el = refBox.current;

    const trig = ScrollTrigger.create({
      trigger:el,
      start:"top center",
      end:"+=500",
      pin:true,
      scrub:true,
      markers:true
    })

    return ()=>trig.kill()

  },[])
  return (
    <div className='min-h-[200vh] flex flex-col items-center justify-start pt-32'>
      <h3 className='text-4xl mb-20'>Pinning Element</h3>
      <div ref={refBox}
      className='w-36 h-36 bg-lime-800 text-white flex items-center justify-center'
      >This Pinning</div>
    </div>
  )
}

