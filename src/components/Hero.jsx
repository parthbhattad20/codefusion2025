"use client";

import { ArrowUpRight, Globe, Network, Smartphone } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Counter from "./Counter";
import CustomerCarasoul from "./CustomerCarasoul";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Link from "next/link";

const flipWords = ["V-Find", "V-Fix", "V-Fortify"];

const colorVariants = {
  "V-Find": "bg-gradient-to-r from-red-600 to-pink-500 text-transparent bg-clip-text",
  "V-Fix": "bg-gradient-to-r from-blue-500 to-blue-900 text-transparent bg-clip-text",
  "V-Fortify": "bg-gradient-to-r from-purple-600 to-violet-800 text-transparent bg-clip-text",
};

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % flipWords.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [mounted]);

  if (!mounted) {
    // Optional skeleton placeholder to avoid layout shift
    return <div className="h-[600px] w-full" />;
  }

  const wordTransition = reduceMotion
    ? { duration: 0 }
    : { type: "spring", stiffness: 120, damping: 18 };

  return (
    <div className="font-primary pt-10 grid place-content-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center my-6 pt-14 lg:py-14 relative"
      >
        {/* Background Glow */}
        <div
          className="absolute -z-10 inset-0 overflow-hidden pointer-events-none w-full"
          style={{
            WebkitMaskImage:
              "radial-gradient(circle at center, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 95%)",
            maskImage:
              "radial-gradient(circle at center, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 95%)",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
            maskPosition: "center",
            WebkitMaskSize: "cover",
            maskSize: "cover",
          }}
          aria-hidden="true"
        >
          {[1, 2].map((i) => (
            <div
              key={i}
              className={`absolute ${
                i === 1
                  ? "top-1/2 -translate-y-full"
                  : "bottom-1/2 translate-y-full"
              } left-1/2 aspect-square -translate-x-1/2 h-[100vh] border border-violet-500/30 rounded-full shadow-[0_0_30px_10px_rgba(139,92,246,0.5)]`}
              style={{
                width: "clamp(300px, 100vw, 1200px)",
                clipPath: i === 1 ? "inset(80% 0 0 0)" : "inset(0 0 80% 0)",
                background:
                  i === 1
                    ? "linear-gradient(to top, rgba(123,22,205,0.26), rgba(164,55,236,0))"
                    : "linear-gradient(to bottom, rgba(123,22,205,0.26), rgba(164,55,236,0))",
                transform: "translateZ(0)",
                willChange: "transform, opacity",
              }}
            />
          ))}

          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-4 blur-sm rounded-full bg-gradient-to-r from-violet-500/5 via-violet-500/80 to-violet-500/5"
            style={{
              width: "clamp(150px, 50vw, 600px)",
              transform: "translateZ(0)",
              willChange: "transform, opacity",
            }}
          />
        </div>

        {/* Flipping Text */}
        <div className="h-28 mb-6 perspective">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.96 }}
              transition={wordTransition}
              className={`text-6xl md:text-8xl font-extrabold font-secondary ${colorVariants[flipWords[index]]}`}
            >
              {flipWords[index]}
            </motion.div>
          </AnimatePresence>
        </div>

        <p className="max-w-2xl text-center py-4 md:text-lg text-gray-800 dark:text-gray-400">
          Safeguard your organization's sensitive data and digital assets with
          confidence, relying on our proven cyber security services
        </p>

        <div className="flex gap-5 justify-center">
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <Link href="mailto:connect@vulnuris.com">
              <Button
                size="lg"
                className="px-8 py-2 rounded-full bg-gradient-to-b from-violet-500 to-violet-600 text-white focus:ring-2 focus:ring-violet-400 hover:shadow-xl dark:hover:shadow-violet-900 transition-transform duration-200 text-lg font-bold"
              >
                Get In Touch
              </Button>
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <Link href="/about">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full font-bold text-lg"
              >
                Learn More
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.div>

      <CustomerCarasoul />

      {/* Stats Section */}
      <div className="relative w-full max-w-5xl mx-auto px-4 py-12">
        <h3 className="text-3xl font-bold font-secondary text-center mb-8">
          Our Security Impact
          <div className="h-1 w-20 bg-gradient-to-r from-violet-500 to-violet-600 mx-auto mt-2 rounded-full" />
        </h3>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.15 } },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 relative"
        >
          {[
            { icon: Smartphone, value: 80, label: "Mobile Apps Secured", suffix: "+" },
            { icon: Network, value: 11, label: "IP Addresses Protected", suffix: "k+" },
            { icon: Globe, value: 220, label: "Web Apps Fortified", suffix: "+" },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { type: "spring", stiffness: 120, damping: 20 },
                },
              }}
              className="group hover:scale-105 transition-all duration-300"
            >
              <div className="flex flex-col items-center p-6 rounded-xl border border-violet-500/20 bg-foreground/5 backdrop-blur-sm hover:border-violet-500/40 transition-all">
                <div className="p-3 rounded-full bg-violet-500/10 mb-4 group-hover:bg-violet-500/20 transition-all">
                  <item.icon className="w-8 h-8 text-violet-500" />
                </div>

                <div className="flex items-baseline gap-1">
                  <p className="text-4xl font-bold bg-gradient-to-r from-violet-500 to-violet-700 bg-clip-text text-transparent">
                    <Counter to={item.value} suffix={item.suffix} />
                  </p>
                  <ArrowUpRight className="w-4 h-4 text-violet-500" />
                </div>

                <p className="text-sm text-gray-500 mt-2 font-medium">
                  {item.label}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <p className="text-center text-sm text-gray-500 mt-8">
          Continuously expanding our security footprint
          <span className="inline-block w-1.5 h-1.5 bg-violet-500 rounded-full ml-1 animate-pulse"></span>
        </p>
      </div>
    </div>
  );
}
