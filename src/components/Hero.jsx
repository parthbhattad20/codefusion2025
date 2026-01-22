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
  "V-Find": "from-rose-500 via-pink-500 to-fuchsia-500",
  "V-Fix": "from-cyan-400 via-blue-500 to-indigo-600",
  "V-Fortify": "from-violet-500 via-purple-600 to-indigo-700",
};

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!mounted) return;
    const interval = setInterval(() => {
      setIndex((p) => (p + 1) % flipWords.length);
    }, 2200);
    return () => clearInterval(interval);
  }, [mounted]);

  if (!mounted) return <div className="h-[700px] w-full" />;

  const wordTransition = reduceMotion
    ? { duration: 0 }
    : { type: "spring", stiffness: 120, damping: 18 };

  return (
    <div className="relative overflow-hidden pt-16">

      {/* === Animated gradient mesh background === */}
      <div className="absolute inset-0 -z-30">
        <motion.div
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-[length:300%_300%]
            bg-[linear-gradient(120deg,#7c3aed,#06b6d4,#ec4899,#7c3aed)] opacity-20"
        />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-3xl" />
      </div>

      {/* === Floating neon orbs === */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            x: [0, 80, 0],
            y: [0, -60, 0],
          }}
          transition={{
            duration: 14 + i * 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -z-20 w-[300px] h-[300px] rounded-full blur-[120px]"
          style={{
            top: `${20 + i * 12}%`,
            left: `${10 + i * 15}%`,
            background:
              i % 2
                ? "rgba(139,92,246,0.35)"
                : "rgba(6,182,212,0.35)",
          }}
        />
      ))}

      {/* === Cyber grid floor === */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[300px] -z-10 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(139,92,246,.3) 1px, transparent 1px), linear-gradient(to top, rgba(139,92,246,.3) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          transform: "perspective(600px) rotateX(65deg)",
          transformOrigin: "bottom",
        }}
      />

      {/* === Content === */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto"
      >
        {/* Flipping neon title */}
        <div className="h-32 mb-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -40, scale: 0.9 }}
              transition={wordTransition}
              className={`text-6xl md:text-8xl font-extrabold tracking-tight bg-gradient-to-r ${
                colorVariants[flipWords[index]]
              } bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(139,92,246,0.7)]`}
            >
              {flipWords[index]}
            </motion.div>
          </AnimatePresence>
        </div>

        <p className="max-w-2xl text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-10">
          Safeguard your organization's sensitive data and digital assets with
          confidence, relying on our next-generation cyber defense platform.
        </p>

        {/* Magnetic buttons */}
        <div className="flex gap-6 mb-16">
          <motion.div whileHover={{ scale: 1.12 }} whileTap={{ scale: 0.95 }}>
            <Link href="mailto:connect@vulnuris.com">
              <Button className="px-10 py-6 text-lg rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 text-white shadow-[0_0_40px_rgba(139,92,246,0.6)] hover:shadow-[0_0_60px_rgba(6,182,212,0.8)]">
                Get In Touch
              </Button>
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.12 }} whileTap={{ scale: 0.95 }}>
            <Link href="/about">
              <Button
                variant="outline"
                className="px-10 py-6 text-lg rounded-full border-2 border-violet-500/50 backdrop-blur-md bg-white/10"
              >
                Learn More
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.div>

      <CustomerCarasoul />

      {/* === Stats === */}
      <div className="relative max-w-6xl mx-auto px-6 py-24">
        <h3 className="text-4xl font-extrabold text-center mb-16 bg-gradient-to-r from-violet-500 to-cyan-500 bg-clip-text text-transparent">
          Our Security Impact
        </h3>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ show: { transition: { staggerChildren: 0.2 } } }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {[
            { icon: Smartphone, value: 80, label: "Mobile Apps Secured", suffix: "+" },
            { icon: Network, value: 11, label: "IP Addresses Protected", suffix: "k+" },
            { icon: Globe, value: 220, label: "Web Apps Fortified", suffix: "+" },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 60 },
                show: { opacity: 1, y: 0 },
              }}
              className="group"
            >
              <div className="relative p-10 rounded-3xl border border-violet-500/30 bg-white/10 dark:bg-black/20 backdrop-blur-xl shadow-[0_0_50px_rgba(139,92,246,0.25)] hover:shadow-[0_0_80px_rgba(139,92,246,0.45)] transition-all">

                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-violet-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition" />

                <div className="relative flex flex-col items-center">
                  <item.icon className="w-10 h-10 text-violet-400 mb-4" />

                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-black bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                      <Counter to={item.value} suffix={item.suffix} />
                    </span>
                    <ArrowUpRight className="text-violet-400" />
                  </div>

                  <p className="mt-3 text-gray-600 dark:text-gray-400 font-medium">
                    {item.label}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
