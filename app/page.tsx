import Link from "next/link";
import React from "react";

function Home() {
  
  const links = [
    { href: "/to", label: "To" },
    { href: "/from", label: "From" },
    { href: "/fromTo", label: "FromTo" },
    { href: "/timeline", label: "Timeline" },
    { href: "/stagger", label: "Stagger" },
    { href: "/textAM", label: "TextAnimation" },
    { href: "/scrollTrigger", label: "ScrollTrigger" },
    { href: "/pinning", label: "Pinning" },
    { href: "/loading", label: "Loading" },

  ];

  return (
        <div className="flex flex-col items-center 
        justify-center min-h-screen
         bg-gray-900 text-white px-4">
      <h2 className="text-4xl sm:text-5xl font-bold
       text-teal-400 mb-10 
       text-center">
        Welcome to GSAP
      </h2>

      <div
        className="
          grid 
          grid-cols-2 
          sm:grid-cols-3 
          gap-4 
          md:gap-6 
          place-items-center
        "
      >
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="
              w-32 sm:w-40 
              px-4 py-3 
              bg-teal-500 
              hover:bg-teal-600 
              rounded-lg 
              text-base sm:text-lg 
              font-semibold 
              text-center 
              transition-all 
              duration-300
            "
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
