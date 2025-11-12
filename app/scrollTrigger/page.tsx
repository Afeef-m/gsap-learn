"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);
function Scroll() {
  useGSAP(() => {
    const ctx = gsap.context(()=>{
    gsap.to("#box1", {
  y: 200,
  x: -100,
  opacity: 1,
  duration: 2,
  scale: 1.5,
  skewX: 15,
  ease: "power1.out",
  scrollTrigger: {
    trigger: "#box1",
    start: "top 90%",
    end: "+=300",
    scrub: true,      
    markers: true, 
  },
});

    gsap.fromTo(
      "#box2",
      {
        scale: 0.5,
        opacity: 0,
      },
      {
        scale: 1.5,
        opacity: 1,
        duration: 2,

        scrollTrigger: {
          trigger: "#box2",
          start: "top 80%",
          end: "top 10%",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      "#box3",
      {
        scale: 2,
        opacity: 0,
      },
      {
        x: -180,
        rotation: 100,
        scale: 1,
        opacity: 1,
        yoyo: true,
        backgroundColor: "#004225",
        duration: 0.5,
        scrollTrigger: {
          trigger: "#box3",
          start: "top 50%",
          end: "top 20%",
          scrub: true,
        },
      }
    );
})
    return()=>ctx.revert()
  }, []);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h3
        className="text-2xl font-semibold text-lime-800 mb-3 mt-3
       "
      >
        ScrollTrigger page
      </h3>
      <main className="flex flex-col gap-80 ">
        <div id="box1" className="w-16 h-16 bg-lime-800 rounded-md mt-5"></div>
        <div id="box2" className="w-28 h-28 bg-lime-600 rounded-md"></div>
        <div id="box3" className="w-28 h-28 bg-lime-400 rounded-md"></div>
      <Link
        href="/"
        className="bg-black text-gray-100 rounded-md w-28 py-2 mt-10 text-center mb-6 hover:bg-gray-800 transition-all duration-300"
        >
        Go Back
      </Link>
    </main>
    </div>
  );
}

export default Scroll;
