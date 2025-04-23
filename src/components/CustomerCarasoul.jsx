"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const logos = [
  { src: "./assets/clients/kirloskar.png", alt: "Kirloskar company logo" },
  { src: "./assets/clients/kyb.png", alt: "KYB company logo" },
  { src: "./assets/clients/lnt.png", alt: "L&T company logo" },
  { src: "./assets/clients/piaggio.png", alt: "Piaggio company logo" },
  { src: "./assets/clients/revolut.png", alt: "Revolut company logo" },
  { src: "./assets/clients/sndt.png", alt: "Sndt org logo" },
  { src: "./assets/clients/technogen.png", alt: "Technogen company logo" },
  { src: "./assets/clients/theintell.png", alt: "theintell company logo" },
  { src: "./assets/clients/vidyan.png", alt: "PVG org logo" },
];

export default function CustomerCarousel() {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    
    // Calculate the width of a single set of logos
    const firstSetWidth = track.scrollWidth / 2;
    let animationFrame;
    let scrollPos = 0;
    
    const scroll = () => {
      scrollPos += 0.5;
      
      // When we've scrolled through the first set, reset to beginning
      if (scrollPos >= firstSetWidth) {
        scrollPos = 0;
      }
      
      track.scrollLeft = scrollPos;
      animationFrame = requestAnimationFrame(scroll);
    };
    
    animationFrame = requestAnimationFrame(scroll);
    
    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div className="font-primary pt-10 w-full">
      <div className="w-full max-w-full">
        <h2 className="font-bold text-center lg:text-left text-xl text-gray-700 dark:text-gray-400">
          Making Security effortless for{" "}
          <span className="bg-gradient-to-b from-violet-400 to-violet-800 bg-clip-text text-transparent">
            200+
          </span>{" "}
          customers
        </h2>

        <div className="w-[70vw] overflow-hidden relative pt-4 pb-2 border-t mt-4 mx-auto">
          <div
            ref={trackRef}
            className="flex gap-8 overflow-x-scroll scrollbar-hide whitespace-nowrap w-full"
            style={{ 
              scrollBehavior: "auto",
              msOverflowStyle: "none",
              scrollbarWidth: "none"
            }}
          >
            {/* Double the logos array to create continuous scrolling effect */}
            {[...logos, ...logos].map((logo, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-32 h-16 flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
              >
                <img
                  className="opacity-80 filter grayscale hover:grayscale-0 hover:opacity-100 transition duration-300 max-h-full max-w-full object-contain"
                  src={logo.src}
                  alt={logo.alt}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}