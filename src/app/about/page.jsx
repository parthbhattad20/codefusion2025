"use client";

import React from "react";
import Approach from "@/components/OurAppoarch";
import Clients from "@/components/Clients";
import Partner from "@/components/Partner";
import Impact from "@/components/Impact";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } },
};

const floatAnim = {
  animate: {
    y: [0, -12, 0],
    rotateZ: [0, 0.6, 0],
    transition: {
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const card3D = {
  whileHover: {
    y: -12,
    scale: 1.04,
    boxShadow: "0px 35px 80px rgba(99,102,241,0.35)",
  },
  transition: { type: "spring", stiffness: 240, damping: 18 },
};

const AboutPage = () => {
  return (
    <motion.div
      className="min-h-screen bg-background text-foreground px-6 py-16 mt-10 lg:mt-20 overflow-hidden"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div variants={fadeUp} className="text-center mb-20">
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold bg-clip-text bg-gradient-to-r from-violet-500 to-blue-900 text-transparent"
            style={{
              transform: "perspective(900px) translateZ(40px)",
              textShadow: "0px 10px 40px rgba(99,102,241,0.35)",
            }}
          >
            About Vulnuris
          </motion.h1>

          <p className="mt-4 text-xl text-muted-foreground flex items-center justify-center gap-1">
            Find <ChevronRight size={15} className="animate-pulse" />
            Fix{" "}
            <ChevronRight
              size={15}
              className="animate-pulse"
              style={{ animationDelay: "0.1s" }}
            />
            Fortify
          </p>
        </motion.div>

        <motion.section
          variants={fadeUp}
          className="mb-24 grid grid-cols-1 md:grid-cols-2 gap-14 items-center"
        >
          {/* TEXT CARD */}
          <motion.div
            variants={fadeUp}
            {...card3D}
            className="relative bg-card/70 backdrop-blur-xl border border-border rounded-2xl p-8 shadow-xl"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-blue-500/10 rounded-2xl pointer-events-none" />

            <h2
              className="text-4xl font-bold mb-6 text-primary"
              style={{ transform: "translateZ(30px)" }}
            >
              Forging a Secure Digital Future
            </h2>

            <p
              className="text-lg leading-relaxed mb-4 text-justify lg:text-left"
              style={{ transform: "translateZ(18px)" }}
            >
              Vulnuris is more than just a cybersecurity company;{" "}
              <span className="text-violet-700 font-semibold">we</span> are
              architects of digital resilience. Founded by experts from the
              front lines of cyber defense, our team comprises elite ethical
              hackers, innovative engineers, and sharp analysts united by a
              single mission to empower organizations against the relentless
              evolution of digital threats.
            </p>

            <p
              className="text-lg leading-relaxed text-justify lg:text-left"
              style={{ transform: "translateZ(12px)" }}
            >
              <span className="text-violet-700 font-semibold">We</span>{" "}
              transform security from a reactive measure into a proactive,
              strategic advantage — enabling organizations to innovate
              confidently while their critical assets remain protected.
            </p>
          </motion.div>

          {/* FLOATING IMAGE */}
          <motion.div
            variants={fadeUp}
            {...floatAnim}
            className="hidden md:block relative rounded-2xl overflow-hidden border border-border shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-blue-500/20 z-10 pointer-events-none" />

            <img
              src="https://www.shutterstock.com/image-photo/glowing-digital-lock-surrounded-by-600nw-2517566697.jpg"
              alt="Security visual"
              className="object-cover w-full h-72 rounded-2xl"
            />

            <div className="absolute -top-10 -left-10 w-40 h-40 bg-violet-600/30 blur-3xl rounded-full" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-600/30 blur-3xl rounded-full" />
          </motion.div>
        </motion.section>

        {/* OTHER SECTIONS */}
        <motion.div variants={fadeUp}>
          <Approach />
        </motion.div>

        <motion.div variants={fadeUp}>
          <Impact />
        </motion.div>

        <motion.div variants={fadeUp}>
          <Clients />
        </motion.div>

        <motion.div variants={fadeUp}>
          <Partner />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
