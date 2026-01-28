"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  ArrowBigLeft,
  MailWarning,
  Brain,
  Gamepad2,
  Layers,
  Plus,
  Minus,
} from "lucide-react";
import { motion } from "framer-motion";

/* ===========================
   Animation Variants (Shared)
   =========================== */

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const PhishInstinct = () => {
  return (
    <div className="min-h-screen bg-background text-foreground py-16 mt-10 lg:mt-20 overflow-hidden">
      <motion.div
        className="container max-w-7xl mx-auto px-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Back */}
        <motion.div variants={fadeUp} className="mb-10">
          <Link
            href="/products"
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition"
          >
            <ArrowBigLeft className="mr-2" /> Back to Products
          </Link>
        </motion.div>

        {/* Hero Section */}
        <motion.section
          variants={fadeUp}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-24"
        >
          <div className="space-y-6">
            <h1 className="text-3xl md:text-5xl font-extrabold text-primary tracking-tight">
              PhishInstinct – Build a Human Firewall
            </h1>

            <ul className="list-disc pl-5 text-lg md:text-xl space-y-1">
              <li>Realistic phishing simulations</li>
              <li>Behavior-driven security awareness</li>
              <li>Measurable risk reduction</li>
            </ul>

            <p className="text-lg text-muted-foreground max-w-xl">
              Advanced phishing simulation and awareness platform designed to
              transform employee behavior into your strongest security layer.
            </p>

            <div className="mt-6 flex flex-wrap gap-6">
              <Link href="/contact?subject=PhishInstinct%20Demo">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-violet-500 to-blue-600 rounded-full px-10 shadow-lg hover:scale-105"
                >
                  Get a Demo
                </Button>
              </Link>

              <a href="/docs/PhishInstinct-Brochure.pdf" download>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-violet-500 to-blue-600 rounded-full px-10 shadow-lg hover:scale-105"
                >
                  Download Brochure
                </Button>
              </a>
            </div>
          </div>

          {/* 3D Animated Image */}
          <div style={{ perspective: 1200 }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              animate={{
                rotateY: [0, 12, 0, -12, 0],
                rotateX: [0, -8, 0, 8, 0],
                y: [0, -12, 0, 12, 0],
              }}
              transition={{
                opacity: { duration: 0.8, ease: "easeOut" },
                scale: { duration: 0.8, ease: "easeOut" },
                y: { duration: 14, ease: "easeInOut", repeat: Infinity },
                rotateX: { duration: 14, ease: "easeInOut", repeat: Infinity },
                rotateY: { duration: 14, ease: "easeInOut", repeat: Infinity },
              }}
              whileHover={{ scale: 1.05 }}
              className="relative bg-gray-200 rounded-xl overflow-hidden shadow-xl w-full h-[350px] lg:h-[400px] will-change-transform"
            >
              <Image
                src="/assets/products/phishinstinct.png"
                alt="PhishInstinct Dashboard"
                fill
                className="object-contain md:object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-cyan-500/10 pointer-events-none" />
            </motion.div>
          </div>
        </motion.section>

        {/* Why Section */}
        <motion.section
          variants={fadeUp}
          whileInView="show"
          initial="hidden"
          viewport={{ once: true }}
          className="py-24 bg-muted/40 border-y border-border mb-24"
        >
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-primary leading-tight">
                  Why PhishInstinct is Critical
                </h2>
                <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
                  Proactively identify human risk, meet compliance requirements,
                  and reduce phishing incidents across your organization.
                </p>
              </div>

              <div className="space-y-5">
                {[
                  [
                    "Compliance Pressure",
                    "Continuous simulations required by regulations.",
                  ],
                  [
                    "Human Vulnerabilities",
                    "Employees remain primary attack vector.",
                  ],
                  [
                    "No Risk Visibility",
                    "Lack of measurable user risk insight.",
                  ],
                ].map(([title, desc], i) => (
                  <motion.details
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="
                      group rounded-xl border border-border
                      bg-background/60 backdrop-blur-sm
                      px-6 py-5
                      transition-all duration-300
                      hover:border-primary/40 hover:shadow-sm
                    "
                  >
                    <summary className="cursor-pointer text-lg font-semibold flex justify-between items-center list-none">
                      <span>{title}</span>
                      <span className="text-muted-foreground group-open:rotate-45 transition-transform">
                        +
                      </span>
                    </summary>

                    <p className="mt-3 text-muted-foreground leading-relaxed">
                      {desc}
                    </p>
                  </motion.details>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Features */}
        <motion.section variants={fadeUp} className="py-16 mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
            Key Features
          </h2>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-8"
          >
            {[
              {
                icon: MailWarning,
                title: "Realistic Simulations",
                desc: "Mirror real-world attacks.",
              },
              {
                icon: Brain,
                title: "Behavior Analytics",
                desc: "Track risky actions.",
              },
              {
                icon: Layers,
                title: "Custom Templates",
                desc: "Tailored campaigns.",
              },
              {
                icon: Gamepad2,
                title: "Gamified Learning",
                desc: "Interactive training.",
              },
            ].map((f, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -8, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="bg-card p-6 rounded-2xl border border-border shadow-sm hover:shadow-xl"
              >
                <f.icon className="w-6 h-6 text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-muted-foreground">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* How It Works */}
        <motion.section
          variants={fadeUp}
          className="relative py-32 bg-gradient-to-b from-muted/40 to-background border-y border-border mb-28 overflow-hidden"
        >
          {/* Ambient background glow */}
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl" />

          <div className="relative max-w-7xl mx-auto px-6">
            {/* Heading */}
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary tracking-tight">
                How PhishInstinct Works
              </h2>

              <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                Continuous phishing simulations with automated measurement and
                adaptive security training cycles.
              </p>

              <div className="mt-6 h-1 w-24 mx-auto rounded-full bg-gradient-to-r from-violet-500 to-cyan-500" />
            </div>

            {/* Steps */}
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-10"
            >
              {[
                "Campaign design & targeting",
                "Realistic phishing simulation delivery",
                "User behavior tracking & detection",
                "Risk scoring & analytics",
                "Automated security awareness training",
                "Continuous improvement reporting",
              ].map((text, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                  className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-violet-500/40 to-cyan-500/40"
                >
                  <div className="relative flex gap-6 items-start bg-white/80 dark:bg-slate-900/70 backdrop-blur-xl rounded-2xl p-7 border border-border shadow-lg hover:shadow-2xl transition-all overflow-hidden">
                    {/* Glow overlay */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-violet-500/10 to-cyan-500/10" />

                    {/* Step badge */}
                    <div className="relative shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-cyan-500 text-white flex items-center justify-center font-bold text-lg shadow-md">
                      {i + 1}
                    </div>

                    {/* Content */}
                    <div className="relative">
                      <h3 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white">
                        Step {i + 1}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {text}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* FAQ */}
       <motion.section variants={fadeUp} className="py-24 mb-24">
  <div className="max-w-4xl mx-auto px-6">

    <h2 className="text-center text-3xl md:text-4xl font-semibold text-primary mb-14">
      Frequently Asked Questions
    </h2>

    <div className="space-y-4">

      {[
        [
          "What is PhishInstinct?",
          "PhishInstinct is a phishing simulation and security awareness platform designed to continuously evaluate and improve employee security behavior.",
        ],
        [
          "Does it support compliance?",
          "Yes. It provides audit-ready reports aligned with common compliance frameworks such as ISO 27001 and SOC 2.",
        ],
        [
          "Is automation supported?",
          "Yes. Campaigns, simulations, reporting, and training cycles can be fully automated and scheduled.",
        ],
      ].map(([q, a], i) => (
        <motion.details
          key={i}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.08 }}
          className="group rounded-xl border border-border bg-background hover:bg-muted/40 transition-colors"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between px-6 py-5 text-lg font-medium text-foreground">
            {q}
            <span className="ml-4 text-muted-foreground transition-transform group-open:rotate-45">
              +
            </span>
          </summary>

          <div className="px-6 pb-5 text-muted-foreground leading-relaxed">
            {a}
          </div>
        </motion.details>
      ))}

    </div>
  </div>
</motion.section>


        {/* CTA */}
        <motion.section variants={fadeUp} className="text-center py-20">
          <h2 className="text-3xl font-bold text-primary mb-6">
            Turn Employees Into Your Strongest Defense
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Reduce phishing risk with instinct-driven security awareness.
          </p>

          <motion.div whileHover={{ scale: 1.08, y: -4 }}>
            <Link href="/contact?subject=PhishInstinct%20Demo">
              <Button
                size="lg"
                className="bg-gradient-to-r from-violet-500 to-blue-600 rounded-full px-10 shadow-lg"
              >
                Request a Demo
              </Button>
            </Link>
          </motion.div>
        </motion.section>
      </motion.div>
    </div>
  );
};

export default PhishInstinct;
