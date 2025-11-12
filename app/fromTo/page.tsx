"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import React, { useEffect } from "react";

function FromTo() {
  useGSAP(() => {
    gsap.fromTo(
      "#fromTo",
      {
        y: 100,
        x: 0,
      },
      {
        y: -100,
        x: 200,
        duration: 2,
        yoyo: true,
        repeat: -1,
        ease: "bounce.in",
      }
    );
  }, []);

  useEffect(() => {
    gsap.to("#btn", {
      x: -100,
      duration: 2,
      repeat: -1,
      yoyo: true,
    });
  }, []);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h3
        className="text-2xl font-semibold text-lime-800 mb-3
       "
      >
        FromTo page
      </h3>
      <button
        type="button"
        id="btn"
        className="bg-black text-gray-100 rounded-md w-28 py-2 text-center mb-6 hover:bg-gray-800 transition-all duration-300"
      >
        <Link href={"/"}
        >Go Back</Link>
        
      </button>
      <div className="w-28 h-28 bg-lime-700 rounded-md" id="fromTo"></div>
    </div>
  );
}

export default FromTo;
