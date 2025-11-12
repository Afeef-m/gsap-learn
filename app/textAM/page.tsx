"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import Link from "next/link";

export default function TextAnimation() {
  const refText = useRef<HTMLHeadingElement>(null);
  useGSAP(() => {
    const message = [
      "Welcome my portfolio",
      "I am frontend developer",
      "I create a ecommerce",
    ];
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
    message.forEach((msg) => {
      tl.to(refText.current, {
        y: -20,
        opacity: 0,
        duration: 0.4,
        onComplete: () => {
          refText.current!.textContent = msg;
        },
      })
        .fromTo(
          refText.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 }
        )
        .to({}, { duration: 2 });
    });
  }, []);
  return (
    <div className="min-h-screen flex justify-center items-center flex-col">
      <h2
        ref={refText}
        className="text-4xl font-bold text-lime-700 text-center"
      ></h2>
          <Link
        href="/"
        className="bg-black text-gray-100 rounded-md w-28 py-2 mt-10 text-center mb-6 hover:bg-gray-800 transition-all duration-300"
      >
        Go Back
      </Link>
    </div>
  );
}

// export default function TextAnimation() {
//     useGSAP(()=>{
//         gsap.from("#txt",{
//             x:200, duration:2, ease:"bounce.in",
//         })
//         gsap.fromTo("#pa1",{opacity:1,y:20},{opacity:1,y:0,delay:1,ease:'power1.in', stagger:0.5})
//         gsap.fromTo("#pa2",{opacity:1,y:20},{opacity:1,y:0,delay:1.4,ease:'power1.in', stagger:0.5})
//         gsap.fromTo("#pa3",{opacity:1,y:20},{opacity:1,y:0,delay:1.8,ease:'power1.in', stagger:0.5})
//         gsap.fromTo("#pa4",{opacity:1,y:20},{opacity:1,y:0,delay:2.1,ease:'power1.in', stagger:0.5})
//     },[])

//   return (
//     <div className="flex flex-col justify-center ">
//       <h2 className="font-semibold text-3xl" id="txt">
//         Text animation
//       </h2>
//       <p className="text-2xl" id="pa1">
//         Lorem ipsum dolor sit amet consectetur adipisicing elit.
//       </p>
//       <p className="text-xl" id="pa2">
//         Fuga atque corporis fugiat pariatur dolorem sunt minima,numquam,
//       </p>
//       <p className="text-lg" id="pa3">

//         rem laudantium laboriosam, sit et ullam adipisci commodi qui.
//       </p>
//       <p className="text-sm" id="pa4">

//         Maxime explicabo dolor delectus!
//       </p>
//     </div>
//   );
// }
