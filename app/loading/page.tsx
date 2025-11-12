"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import Link from "next/link";

function Loading() {
  useEffect(() => {
    gsap.to("#circle", {
      rotation: 180,
      repeat: -1,
      duration: 1,
      ease: "linear",
    });
  }, []);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-10">
      <h3
        className="text-2xl font-semibold text-lime-800 
       "
      >
        Loading page
      </h3>
      <div
        id="circle"
        className="w-16 h-16 border-2 rounded-full border-gray-200 border-t-lime-700 shadow-lg"
      ></div>

      <button className="bg-black text-white w-28 h-8 rounded-md">
        <Link href={"/"}>Go Back</Link>
      </button>
    </div>
  );
}

export default Loading;
