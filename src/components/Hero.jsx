  "use client";

  import { ArrowUpRight, Globe, Network, Smartphone } from "lucide-react";
  import { useEffect, useState } from "react";
  import { Button } from "./ui/button";
  import Counter from "./Counter";
  import CustomerCarasoul from "./CustomerCarasoul";
  import { motion, AnimatePresence } from "framer-motion";
  import Link from "next/link";

  const flipWords = ["V-Find", "V-Fix", "V-Fortify"];

  const colorVariants = {
    "V-Find":
      "bg-gradient-to-r from-rose-600 to-pink-600 dark:from-rose-400 dark:to-pink-400 text-transparent bg-clip-text",
    "V-Fix":
      "bg-gradient-to-r from-sky-600 to-indigo-700 dark:from-sky-400 dark:to-indigo-400 text-transparent bg-clip-text",
    "V-Fortify":
      "bg-gradient-to-r from-violet-700 to-fuchsia-700 dark:from-violet-400 dark:to-fuchsia-400 text-transparent bg-clip-text",
  };

  export default function Hero() {
    const [index, setIndex] = useState(0);
    const currentWord = flipWords[index];

    useEffect(() => {
      const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % flipWords.length);
      }, 2200);
      return () => clearInterval(interval);
    }, []);

    return (
      <div className="relative overflow-hidden pt-16">

        {/* ================= LIGHT THEME BACKGROUND ================= */}
        <div className="absolute inset-0 -z-20 dark:hidden overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-slate-100" />

          <motion.div
            animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 opacity-50"
            style={{
              backgroundImage: `
                radial-gradient(circle at 15% 20%, rgba(99,102,241,0.25) 0%, transparent 40%),
                radial-gradient(circle at 85% 30%, rgba(168,85,247,0.22) 0%, transparent 40%),
                radial-gradient(circle at 50% 80%, rgba(59,130,246,0.18) 0%, transparent 45%)
              `,
              backgroundSize: "200% 200%",
            }}
          />

          <motion.div
            animate={{ x: [0, 80, 0], y: [0, -40, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 w-[420px] h-[420px] bg-indigo-400/25 rounded-full blur-[120px]"
          />

          <motion.div
            animate={{ x: [0, -60, 0], y: [0, 50, 0] }}
            transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/4 right-1/4 w-[420px] h-[420px] bg-violet-400/25 rounded-full blur-[120px]"
          />

          <motion.div
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[48%] left-1/2 -translate-x-1/2 h-[3px] w-[65vw] bg-gradient-to-r from-transparent via-indigo-500/70 to-transparent blur-sm"
          />
        </div>

        {/* ================= DARK THEME BASE ================= */}
        <div className="absolute inset-0 -z-20 hidden dark:block bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="font-primary grid place-content-center"
        >
          <div className="flex flex-col items-center my-6 pt-16 lg:py-20 relative">

            {/* ================= DARK MODE RINGS ================= */}
            <div className="absolute inset-0 -z-10 pointer-events-none hidden dark:block">
              {[1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{
                    scale: [1, 1.04, 1],
                    opacity: [0.25, 0.5, 0.25],
                  }}
                  transition={{
                    duration: 10 + i * 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className={`absolute ${
                    i === 1
                      ? "top-1/2 -translate-y-full"
                      : "bottom-1/2 translate-y-full"
                  } left-1/2 -translate-x-1/2 aspect-square h-[95vh] rounded-full border`}
                  style={{
                    width: "clamp(320px, 90vw, 1100px)",
                    clipPath:
                      i === 1 ? "inset(78% 0 0 0)" : "inset(0 0 78% 0)",
                    borderColor: "rgba(139,92,246,0.35)",
                    boxShadow:
                      "0 0 80px rgba(139,92,246,0.35), inset 0 0 60px rgba(139,92,246,0.15)",
                  }}
                />
              ))}

              <motion.div
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[3px] rounded-full bg-gradient-to-r from-transparent via-violet-500/80 to-transparent"
                style={{ width: "clamp(200px, 50vw, 700px)" }}
              />
            </div>

            {/* ================= HERO TEXT ================= */}
            <div className="h-28 mb-8 perspective">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ rotateX: 90, opacity: 0, filter: "blur(8px)" }}
                  animate={{ rotateX: 0, opacity: 1, filter: "blur(0px)" }}
                  exit={{ rotateX: -90, opacity: 0, filter: "blur(8px)" }}
                  transition={{ type: "spring", stiffness: 130, damping: 20 }}
                  className={`text-6xl md:text-8xl font-extrabold tracking-tight ${colorVariants[currentWord]}`}
                >
                  {currentWord}
                </motion.div>
              </AnimatePresence>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="max-w-2xl text-center py-4 md:text-lg text-slate-700 dark:text-slate-400"
            >
              Safeguard your organization's sensitive data and digital assets with
              confidence, relying on our proven cyber security services
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="flex gap-5 justify-center mt-4"
            >
              <Link href="mailto:connect@vulnuris.com">
                <motion.div whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.96 }}>
                  <Button className="px-8 py-2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg hover:shadow-violet-500/50 text-lg font-bold">
                    Get In Touch
                  </Button>
                </motion.div>
              </Link>

              <Link href="/about">
                <motion.div whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.96 }}>
                  <Button
                    variant="outline"
                    className="rounded-full font-bold text-lg bg-white/70 dark:bg-slate-900/50 backdrop-blur"
                  >
                    Learn More
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          </div>

          <CustomerCarasoul />

          {/* ================= STATS ================= */}
          <div className="relative w-full max-w-5xl mx-auto px-4 py-16">
            <h3 className="text-3xl font-bold text-center mb-10">
              Our Security Impact
              <div className="h-1 w-24 bg-gradient-to-r from-violet-500 to-indigo-500 mx-auto mt-3 rounded-full" />
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Smartphone, value: 80, suffix: "+", label: "Mobile Apps Secured" },
                { icon: Network, value: 11, suffix: "k+", label: "IP Addresses Protected" },
                { icon: Globe, value: 220, suffix: "+", label: "Web Apps Fortified" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -10, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200, damping: 18 }}
                  className="flex flex-col items-center p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/70 backdrop-blur-xl shadow-lg hover:shadow-2xl"
                >
                  <div className="p-4 rounded-xl bg-violet-500/10 mb-4">
                    <item.icon className="w-8 h-8 text-violet-600 dark:text-violet-400" />
                  </div>

                  <div className="flex items-baseline gap-1">
                    <p className="text-4xl font-extrabold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                      <Counter to={item.value} suffix={item.suffix} />
                    </p>
                    <ArrowUpRight className="w-4 h-4 text-violet-500" />
                  </div>

                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 font-medium">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>

            <p className="text-center text-sm text-slate-500 mt-10">
              Continuously expanding our security footprint
              <span className="inline-block w-1.5 h-1.5 bg-violet-500 rounded-full ml-1 animate-pulse" />
            </p>
          </div>
        </motion.div>
      </div>
    );
  }
