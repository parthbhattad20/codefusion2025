"use client";

import {
  ArrowUpRight,
  Globe,
  Network,
  Smartphone,
  Shield,
  Lock,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Counter from "./Counter";
import CustomerCarasoul from "./CustomerCarasoul";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Link from "next/link";

const flipWords = ["V-Find", "V-Fix", "V-Fortify"];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % flipWords.length);
    }, 2200);

    return () => clearInterval(interval);
  }, [mounted]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (!mounted) {
    return <div className="h-[700px] w-full" />;
  }

  const wordTransition = reduceMotion
    ? { duration: 0 }
    : { type: "spring", stiffness: 120, damping: 18 };

  return (
    <div className="relative overflow-hidden pt-16">

      {/* Background */}
      <div className="absolute inset-0 -z-30 bg-gradient-to-b from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-100/40 via-transparent to-transparent dark:from-indigo-950/30" />

        <motion.div
          animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 opacity-30 dark:opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, rgba(99,102,241,0.12) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(139,92,246,0.12) 0%, transparent 50%)",
            backgroundSize: "200% 200%",
          }}
        />
      </div>

      {/* Floating Orbs */}
      {[...Array(4)].map((_, i) => {
        const size = 300 + i * 120;

        return (
          <motion.div
            key={i}
            animate={{
              x: [0, 60, 0],
              y: [0, -40, 0],
              scale: [1, 1.1, 1],
              opacity: [0.35, 0.55, 0.35],
            }}
            transition={{
              duration: 18 + i * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2,
            }}
            style={{
              width: size,
              height: size,
              top: `${10 + i * 18}%`,
              left: `${5 + i * 18}%`,
              translateX: mousePosition.x * (0.02 + i * 0.01),
              translateY: mousePosition.y * (0.02 + i * 0.01),
              background:
                i === 0
                  ? "radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 70%)"
                  : i === 1
                  ? "radial-gradient(circle, rgba(139,92,246,0.16) 0%, transparent 70%)"
                  : i === 2
                  ? "radial-gradient(circle, rgba(59,130,246,0.14) 0%, transparent 70%)"
                  : "radial-gradient(circle, rgba(168,85,247,0.12) 0%, transparent 70%)",
            }}
            className="absolute -z-20 rounded-full blur-[120px]"
          />
        );
      })}

      {/* Floating Icons */}
      {[Shield, Lock, Zap].map((Icon, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 6, 0],
            opacity: [0.08, 0.18, 0.08],
          }}
          transition={{
            duration: 7 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 1.5,
          }}
          className="absolute -z-10 text-indigo-600 dark:text-indigo-400"
          style={{
            top: `${25 + i * 15}%`,
            right: `${10 + i * 10}%`,
          }}
        >
          <Icon className="w-16 h-16 md:w-24 md:h-24" strokeWidth={0.5} />
        </motion.div>
      ))}

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex flex-col items-center text-center max-w-6xl mx-auto px-6"
      >

        <div className="mb-8 inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-indigo-200/50 dark:border-indigo-900/50 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md shadow">
          <span className="text-sm font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Enterprise-Grade Security Solutions
          </span>
        </div>

        <div className="h-28 mb-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -30, filter: "blur(10px)" }}
              transition={wordTransition}
              className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight"
            >
              <span className="bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-900 dark:from-white dark:via-indigo-200 dark:to-white bg-clip-text text-transparent">
                {flipWords[index]}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-3xl text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-12 font-light leading-relaxed"
        >
          Safeguard your organization's sensitive data and digital assets with
          confidence using next-generation cyber defense.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 mb-20"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <Link href="mailto:connect@vulnuris.com">
              <Button className="px-8 py-6 text-base font-medium rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white shadow-md hover:shadow-lg transition">
                Get In Touch
                <ArrowUpRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <Link href="/about">
              <Button variant="outline" className="px-8 py-6 text-base font-medium rounded-lg border-2">
                Learn More
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      <CustomerCarasoul />

      {/* Stats */}
      <div className="relative max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Smartphone, value: 80, suffix: "+", label: "Mobile Apps Secured" },
            { icon: Network, value: 11, suffix: "k+", label: "IP Addresses Protected" },
            { icon: Globe, value: 220, suffix: "+", label: "Web Apps Fortified" },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              whileHover={{ y: -8 }}
              className="p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur shadow-md hover:shadow-xl transition"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 p-4 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                  <item.icon className="w-8 h-8" />
                </div>

                <div className="text-4xl md:text-5xl font-bold mb-3">
                  <Counter to={item.value} suffix={item.suffix} />
                </div>

                <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 font-medium">
                  {item.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
