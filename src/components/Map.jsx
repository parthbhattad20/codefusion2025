"use client";
// import WorldMap from "./ui/world-map";
import dynamic from "next/dynamic";
const WorldMap = dynamic(() => import("@/components/ui/world-map"), { ssr: false });

import { motion } from "framer-motion";

export default function OurPresence() {
  return (
    <section className="py-40 bg-white dark:bg-black w-full">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="font-bold text-xl md:text-4xl text-black dark:text-white">
          Our{" "}
          <span className="text-neutral-400">
            {"Presence".split("").map((char, idx) => (
              <motion.span
                key={idx}
                className="inline-block"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
              >
                {char}
              </motion.span>
            ))}
          </span>
        </h2>
        <p className="text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto py-4">
        We secure out clients across the globe.Our expertise powers trust, resilience, and protection—wherever you are.
        </p>
      </div>
      <WorldMap
        dots={[
            
                {
                  start: { lat: 18.651907, lng: 73.797173,  },
                  end:   { lat: 34.0522, lng: -118.2437 }, 
                  name: "Pune"
                },
                {
                  start: { lat: 34.0522, lng: -118.2437,},
                  end:   { lat: 40.7128, lng: -74.0060 },
                  name: "Los Angeles" 
                },
                {
                  start: { lat: 40.7128, lng: -74.0060, },
                  end:   { lat: 26.0667, lng: 50.5577 },
                  name: "New York" 
                },
                {
                  start: { lat: 26.0667, lng: 50.5577,  },
                  end:   { lat: 29.3759, lng: 47.9774 },
                  name: "Bahrain"
                },
                {
                  start: { lat: 29.3759, lng: 47.9774, },
                  end:   { lat: -1.9579, lng: 30.1127 }, 
                  name: "Kuwait" 
                },
                {
                  start: { lat: -1.9579, lng: 30.1127},
                  end:   { lat: 18.651907, lng: 73.797173}, 
                  name: "Rwanda" 
                },
        ]}
      />
    </section>
  );
}
