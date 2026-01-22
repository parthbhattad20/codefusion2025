"use client";

import dynamic from "next/dynamic";
import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const WorldMap = dynamic(() => import("@/components/ui/world-map"), {
  ssr: false,
  loading: () => <WorldMapSkeleton />,
});

function WorldMapSkeleton() {
  return (
    <div className="w-full h-[500px] flex items-center justify-center">
      <div className="w-3/4 h-full bg-background rounded-xl animate-pulse" />
    </div>
  );
}

export default function OurPresence() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: "-120px",
  });

  const [shouldLoadMap, setShouldLoadMap] = useState(false);

  useEffect(() => {
    if (isInView) {
      setShouldLoadMap(true);
    }
  }, [isInView]);

  const dots = [
    {
      start: { lat: 18.651907, lng: 73.797173 },
      end: { lat: 34.0522, lng: -118.2437 },
      name: "Pune",
    },
    {
      start: { lat: 34.0522, lng: -118.2437 },
      end: { lat: 40.7128, lng: -74.006 },
      name: "USA",
    },
    {
      start: { lat: 40.7128, lng: -74.006 },
      end: { lat: 26.0667, lng: 50.5577 },
      name: "New York",
    },
    {
      start: { lat: 26.0667, lng: 50.5577 },
      end: { lat: 29.3759, lng: 47.9774 },
      name: "Bahrain",
    },
    {
      start: { lat: 29.3759, lng: 47.9774 },
      end: { lat: -1.9579, lng: 30.1127 },
      name: "Kuwait",
    },
    {
      start: { lat: -1.9579, lng: 30.1127 },
      end: { lat: 23.4657, lng: 55.2708 },
      name: "Africa",
    },
    {
      start: { lat: 23.4657, lng: 55.2708 },
      end: { lat: 18.651907, lng: 73.797173 },
      name: "UAE",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-10 lg:py-20 bg-white dark:bg-background w-full overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-7xl mx-auto text-center"
      >
        <h2 className="font-bold text-3xl md:text-4xl text-black dark:text-white">
          <span className="text-violet-800">V</span> SERVE GLOBALLY
        </h2>

        <p className="md:text-lg text-neutral-500 max-w-2xl mx-auto py-4">
          <span className="text-violet-800">V</span>secure our clients across
          the globe. Our expertise powers trust, resilience, and
          protection—wherever you are.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
        className="mt-10"
      >
        {shouldLoadMap && <WorldMap dots={dots} />}
      </motion.div>
    </section>
  );
}
