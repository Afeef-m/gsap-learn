"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import React, { useRef } from "react";

function Stagger() {
  const refBox = useRef<HTMLDivElement[]>([]);
  const tl = gsap.timeline({repeat:-1,yoyo:true, repeatDelay:1});
  useGSAP(() => {
    tl.from(refBox.current, {
      y: 200,
      opacity: 0,
      duration: 0.6,
      stagger: 0.3,
      ease: "power2.out",
    }
  )
  .to(refBox.current,{
    rotate:360,
    duration:2,
    stagger:0.2,
    ease:"back.inOut"
  })
  }, []);
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h3 className="text-2xl font-semibold text-lime-800 mb-3">
        Stagger timeline page
      </h3>
      <Link
        href="/"
        className="bg-black text-gray-100 rounded-md w-28 py-2 text-center mb-6 hover:bg-gray-800 transition-all duration-300"
      >
        Go Back
      </Link>

      {Array(5).fill(null).map((_,ind)=>(
        <div key={ind}
          ref={(el)=>(refBox.current[ind] = el!)}
          className="w-28 h-28 bg-lime-700 rounded-md flex justify-center items-center"
          >
          <h4 className="font-semibold text-white">Box {ind + 1}</h4>
        </div>
      ))}

    </div>
  );
}

export default Stagger;


// export default function Stagger(){

// useGSAP(()=>{
//   gsap.to("#box",{
//     x:200,
//     duration:2,
//     stagger:0.3,
//     rotate:180,
//   })
// },[])
//   return (
//     <div className="flex flex-col items-center mt-3 min-h-screen bg-gray-100 text-gray-800">
//       <h3  className="text-2xl font-semibold text-lime-800 mb-3
//        ">
//         Stagger</h3>
//       {[...Array(5).fill(null).map((box,ind)=>(
//         <div key={ind}
//         className="w-28 h-28 bg-lime-700 rounded-md flex justify-center items-center"
//         id="box">
//           {box}</div>
//       ))]}
//       <Link
//         href="/"
//         className="bg-black text-gray-100 rounded-md w-28 py-2 mt-3 text-center mb-6 hover:bg-gray-800 transition-all duration-300"
//       >
//         Go Back
//       </Link>
//     </div>
//   )
// }