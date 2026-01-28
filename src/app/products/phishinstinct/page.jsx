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

const phishSteps = [
  { title: "Campaign design & targeting", desc: "Define audiences, risk groups, and simulation objectives aligned to policy and threat trends." },
  { title: "Simulation delivery", desc: "Send realistic phishing scenarios across email vectors with controlled timing and templates." },
  { title: "Behavior capture", desc: "Measure opens, clicks, credential entry attempts, and reporting actions with full auditability." },
  { title: "Risk scoring & analytics", desc: "Calculate user and team risk posture with trends, breakdowns, and exposure indicators." },
  { title: "Adaptive training", desc: "Trigger role-based micro-training automatically based on behavior and risk thresholds." },
  { title: "Continuous reporting", desc: "Track improvement over time with executive summaries, compliance evidence, and insights." },
];

const phishSectionVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.21, 1, 0.21, 1] } },
};

const phishGridVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.12 } },
};

const phishCardVariants = {
  hidden: { opacity: 0, y: 14, scale: 0.99 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: [0.21, 1, 0.21, 1] } },
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
        {/* <motion.div variants={fadeUp} className="mb-10">
          <Link
            href="/products"
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition"
          >
            <ArrowBigLeft className="mr-2" /> Back to Products
          </Link>
        </motion.div> */}

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

            {/* <div className="mt-6 flex flex-wrap gap-6">
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
            </div> */}
            <div className="flex flex-wrap gap-6 pt-4">
  <a href="/contact?subject=PhishInstinct%20Demo">
    <Button
      size="lg"
      className="bg-gradient-to-r from-violet-500 to-blue-600 rounded-full px-10 shadow-lg hover:shadow-violet-500/40 transition-all hover:scale-105"
    >
      Get a Demo
    </Button>
  </a>

  <a href="/docs/PhishInstinct-Brochure.pdf" download>
    <Button
      size="lg"
      className="bg-gradient-to-r from-violet-500 to-blue-600 rounded-full px-10 shadow-lg hover:shadow-violet-500/40 transition-all hover:scale-105"
    >
      Download Brochure
    </Button>
  </a>

  {/* Learn More */}
  <a
    href="https://phishinstinct.com/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button
      size="lg"
      variant="outline"
      className="
        rounded-full px-10
        border-2 border-violet-500/40
        text-violet-500
        hover:bg-violet-500/10
        hover:border-violet-500
        transition-all hover:scale-105
      "
    >
      Learn More
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
                src="/assets/products/Phishinstinct.png"
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
  variants={phishSectionVariants}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.25 }}
  className="
    relative overflow-hidden
    py-20 sm:py-24 lg:py-28
    border-y border-border
    bg-background
    mb-28
  "
>
  {/* Subtle, professional background (no heavy color) */}
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(2,6,23,0.06),transparent_55%)] dark:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_55%)]" />
    <div className="absolute -top-48 left-1/2 -translate-x-1/2 h-[520px] w-[520px] rounded-full bg-foreground/5 blur-3xl" />
  </div>

  <div className="relative max-w-7xl mx-auto px-6">
    {/* Heading */}
    <div className="text-center mb-12 sm:mb-14 lg:mb-16">
      <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/40 px-4 py-2 text-sm text-muted-foreground backdrop-blur">
        <span className="h-1.5 w-1.5 rounded-full bg-foreground/60" />
        Workflow overview
      </div>

      <h2 className="mt-5 text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
        How PhishInstinct Works
      </h2>

      <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
        Continuous phishing simulations with automated measurement and adaptive security training cycles.
      </p>

      <div className="mt-6 h-px w-24 mx-auto bg-border" />
    </div>

    {/* Steps */}
    <div className="relative">
      {/* Connector line (desktop) */}
      <div className="hidden md:block pointer-events-none absolute left-1/2 top-2 bottom-2 w-px -translate-x-1/2 bg-border/70" />

      <motion.div
        variants={phishGridVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10"
      >
        {phishSteps.map((step, idx) => {
          const n = idx + 1;
          const isLeft = idx % 2 === 0;

          return (
            <motion.div
              key={step.title}
              variants={phishCardVariants}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className={[
                "group relative rounded-2xl",
                "border border-border",
                "bg-card/70 dark:bg-card/50",
                "backdrop-blur-xl",
                "shadow-sm hover:shadow-md",
                "transition-shadow",
                "p-6 sm:p-7",
                isLeft ? "md:pr-8" : "md:pl-8",
              ].join(" ")}
            >
              {/* timeline node (desktop) */}
              <div
                className={[
                  "hidden md:block pointer-events-none absolute top-9",
                  isLeft ? "right-0 translate-x-[14px]" : "left-0 -translate-x-[14px]",
                ].join(" ")}
              >
                <div className="h-3 w-3 rounded-full bg-foreground/60 shadow-[0_0_0_6px_rgba(0,0,0,0.04)] dark:shadow-[0_0_0_6px_rgba(255,255,255,0.06)]" />
              </div>

              <div className="flex items-start gap-5">
                {/* Step badge (minimal, enterprise) */}
                <div className="shrink-0 w-11 h-11 rounded-xl border border-border bg-muted/40 text-foreground flex items-center justify-center font-semibold">
                  {n}
                </div>

                {/* Content */}
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <span className="text-xs text-muted-foreground border border-border rounded-full px-2 py-0.5">
                      Step {n}
                    </span>
                  </div>
                  <p className="mt-2 text-muted-foreground leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>

              {/* subtle hover wash (no strong colors) */}
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_top,rgba(2,6,23,0.06),transparent_60%)] dark:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_60%)] rounded-2xl" />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
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
