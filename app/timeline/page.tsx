"use client";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Timeline() {
  const tl = gsap.timeline({ repeat: -1, yoyo: true, repeatDelay: 1 });

  useGSAP(() => {
    tl.to("#timeline", {
      x: 100,
      rotate: 100,
      borderRadius: "10%",
      yoyo: true,
      duration: 1,
      ease: "power1",
    });
    tl.to("#timeline", {
      y: 200,
      duration: 2,
      rotation: 200,
      borderRadius: "100%",
      scale: 2,
    });
    tl.to("#timeline", {
      x: -150,
      duration: 2,
      borderRadius: "0%",
    });
    tl.to("#timeline", {
      y: -50,
      duration: 2,
      borderBottomLeftRadius: "100%",
      backgroundColor: "black",
    });
  }, []);

  const handle=()=>{
    if (tl.paused()) {
            tl.play();
          } else {
            tl.pause();
          }
  }
  return (
    <div
      className="flex flex-col mt-3 items-center 
    min-h-screen bg-gray-100
     text-gray-800"
    >
      <h3
        className="text-2xl font-semibold text-lime-800 mb-3
       "
      >
        Timeline page
      </h3>
      <button
        type="button"
        className="bg-slate-400 text-gray-100 
        rounded-md w-28 py-2 text-center mb-6
         hover:bg-gray-800
         transition-all duration-300"
        onClick={handle}
      >
        play / puse
      </button>

      <button
        type="button"
        className="bg-black text-gray-100 
        rounded-md w-28 py-2 text-center mb-6
         hover:bg-gray-800
         transition-all duration-300"
      >
        <Link href={"/"}>Go Back</Link>
      </button>
      <div className="w-28 h-28 bg-lime-700 rounded-md" id="timeline"></div>
    </div>
  );
}

export default Timeline;
