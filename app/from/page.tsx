"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import React from "react";

function From() {
  useGSAP(() => {
    gsap.from("#from", {
      y: 200,
      duration: 2,
      yoyo: true,
      repeat: -1,
      rotate:45,
      ease: "back.inOut",
    });
  }, []);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h3
        className="text-2xl font-semibold text-lime-800 mb-3
       "
      >
        From page
      </h3>
      <button
        type="button"
        className="bg-black text-gray-100 rounded-md w-20 m-4"
      >
        <Link href={"/"}>Go Back</Link>
      </button>
      <div className="w-28 h-28 bg-lime-700 rounded-md" id="from"></div>
    </div>
  );
}

export default From;
