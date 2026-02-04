"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ScanSearch,
  Brain,
  Layers,
  LinkIcon,
  ArrowBigLeft,
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

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

const cardHover = {
  whileHover: { y: -10, scale: 1.04 },
  transition: { type: "spring", stiffness: 220, damping: 16 },
};

const glowHover = {
  whileHover: {
    boxShadow: "0px 0px 50px rgba(139,92,246,0.45)",
  },
};

const ticketSteps = [
  {
    title: "Continuous scanning",
    desc: "Continuous vulnerability and asset scanning to detect issues.",
  },
  {
    title: "Auto-ticket",
    desc: "Automatically create tickets from scan findings with context and severity.",
  },
  {
    title: "Prioritize",
    desc: "Risk-based prioritization using business impact and exposure.",
  },
  {
    title: "Assign",
    desc: "Ownership assignment to teams or individuals aligned with ITSM.",
  },
  {
    title: "SLA timers",
    desc: "Track SLAs per ticket aligned to business risk and compliance.",
  },
  {
    title: "Escalate",
    desc: "Automated escalation on SLA breaches with audit trail preserved.",
  },
];
const sectionVariants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.21, 1, 0.21, 1] },
  },
};

const gridVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 14, scale: 0.985 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.21, 1, 0.21, 1] },
  },
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.45, ease: [0.21, 1, 0.21, 1] },
  },
};
const Vaultix = () => {
  return (
    <div className="min-h-screen bg-background text-foreground py-16 mt-10 lg:mt-20 overflow-hidden">
      <motion.div
        className="container max-w-7xl mx-auto px-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        

        {/* Hero */}
        <motion.section
          variants={fadeUp}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-32"
        >
          <div className="space-y-6">
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight">
              <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                Vaultix 
              </span>{" "}
              – State of Art Next-Gen ITSM Platform
            </h1>

            <ul className="list-disc pl-5 text-lg md:text-xl space-y-1">
              <li>Unified asset management</li>
              <li>SBOM tracking</li>
              <li>Intelligent ticket resolution</li>
            </ul>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Vaultix helps organizations streamline IT service management with
              powerful asset tracking, ticketing, and compliance-driven
              workflows.
            </p>

            <div className="flex flex-wrap gap-6 pt-4">
              <a href="/contact?subject=product&subSubject=Vaultix">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-violet-500 to-blue-600 rounded-full px-10 shadow-lg hover:shadow-violet-500/40 transition-all hover:scale-105"
                >
                  Get a Demo
                </Button>
              </a>

              <a href="/docs/Vaultix-Brochure.pdf" download>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-violet-500 to-blue-600 rounded-full px-10 shadow-lg hover:shadow-violet-500/40 transition-all hover:scale-105"
                >
                  Download Brochure
                </Button>
              </a>

              {/* Learn More */}
              <a
                href="https://vaultix.in/"
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

          {/* 3D Floating Image (same as KloudRaksha) */}
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
              className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl w-full h-[350px] lg:h-[420px] will-change-transform"
            >
              <Image
                src="/assets/products/Vumas.png"
                alt="Vaultix Dashboard"
                fill
                className="object-contain md:object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 via-transparent to-cyan-500/20 pointer-events-none" />
            </motion.div>
          </div>
        </motion.section>

        {/* Why Section */}
        <motion.section
          variants={fadeUp}
          whileInView="show"
          initial="hidden"
          viewport={{ once: true }}
          className="py-24 bg-muted/40 border-y border-border mb-32"
        >
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-primary md:text-4xl font-extrabold leading-tight">
                Why Vaultix is Critical for{" "}
                <span className="text-primary">Modern Enterprises</span>
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
                Vaultix provides a unified platform to manage assets, risks, and
                workflows with automation and compliance at its core.
              </p>
            </div>

            <div className="space-y-6">
              {[
                [
                  "Unrestricted Access & Asset Sprawl",
                  "Disconnected tools create excessive access and hidden risks. Vaultix centralizes ownership and permissions.",
                ],
                [
                  "Lack of End-to-End Visibility",
                  "Track assets, dependencies and tickets in one platform with real-time intelligence.",
                ],
                [
                  "Manual & Reactive Operations",
                  "Automate discovery, SBOM generation, ticketing and remediation workflows.",
                ],
              ].map(([title, desc], i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  {...cardHover}
                  {...glowHover}
                  className="relative bg-background/70 backdrop-blur-xl border border-border rounded-xl p-6 shadow-sm overflow-hidden"
                >
                  <div className="absolute inset-0 opacity-0 hover:opacity-100 transition bg-gradient-to-r from-violet-500/10 to-cyan-500/10" />
                  <h3 className="relative text-lg font-semibold mb-2">
                    {title}
                  </h3>
                  <p className="relative text-muted-foreground leading-relaxed">
                    {desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Features */}
        <motion.section variants={fadeUp} className="py-20 mb-32">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
            Key Features of Vaultix
          </h2>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-8"
          >
            {[
              [
                Layers,
                "Curated Threat Feeds",
                "Tailored industry threat intelligence.",
              ],
              [
                Brain,
                "Dark Web Monitoring",
                "Monitor underground forums and leak sites.",
              ],
              [
                ScanSearch,
                "IOC Tracking & Alerts",
                "Track malicious infrastructure.",
              ],
              [
                LinkIcon,
                "Executive Threat Briefings",
                "Weekly leadership reports.",
              ],
            ].map(([Icon, title, desc], i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                {...cardHover}
                {...glowHover}
                className="bg-card p-6 rounded-2xl border border-border shadow-sm relative overflow-hidden backdrop-blur-xl"
              >
                <div className="absolute inset-0 opacity-0 hover:opacity-100 transition bg-gradient-to-br from-violet-500/10 to-cyan-500/10" />
                <div className="relative flex items-center mb-4">
                  <Icon className="w-6 h-6 text-primary mr-3" />
                  <h3 className="font-semibold">{title}</h3>
                </div>
                <p className="relative text-muted-foreground text-sm">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Ticket Flow */}
      <motion.section
  variants={sectionVariants}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.25 }}
  className="
    relative overflow-hidden
    py-20 sm:py-24 lg:py-28
    border-y border-border
    bg-background
  "
>
  {/* Subtle enterprise background (no extra coloring) */}
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(2,6,23,0.06),transparent_55%)] dark:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_55%)]" />
    <div className="absolute -top-48 left-1/2 -translate-x-1/2 h-[520px] w-[520px] rounded-full bg-foreground/5 blur-3xl" />
  </div>

  <div className="relative max-w-7xl mx-auto px-6">
    {/* Header */}
    <div className="text-center mb-12 sm:mb-14 lg:mb-16">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.55, ease: [0.21, 1, 0.21, 1] }}
        className="
          inline-flex items-center gap-2
          rounded-full border border-border
          bg-muted/40 px-4 py-2 text-sm
          text-muted-foreground backdrop-blur
        "
      >
        <span className="h-1.5 w-1.5 rounded-full bg-foreground/60" />
        AI-assisted ITSM workflow
      </motion.div>

      <h2 className="mt-5 text-3xl md:text-4xl font-extrabold tracking-tight text-primary">
        Intelligent Ticket Management
      </h2>

      <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
        Automate triage, prioritization, and resolution using AI-powered workflows built for scale.
      </p>

      <div className="mt-6 h-px w-24 mx-auto bg-border" />
    </div>

    {/* Timeline / Cards */}
    <div className="relative">
      {/* vertical connector (desktop) */}
      <div className="hidden md:block pointer-events-none absolute left-1/2 top-2 bottom-2 w-px -translate-x-1/2 bg-border/70" />

      <motion.div
        variants={gridVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10"
      >
        {ticketSteps.map((step, idx) => {
          const n = idx + 1;
          const isLeft = idx % 2 === 0;

          return (
            <motion.div
              key={step.title}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className={[
                "group relative rounded-2xl",
                "border border-border",
                "bg-card/70 dark:bg-card/50",
                "backdrop-blur-xl",
                "shadow-sm hover:shadow-md transition-shadow",
                "p-6 sm:p-7",
                isLeft ? "md:pr-8" : "md:pl-8",
              ].join(" ")}
            >
              {/* timeline node dot (desktop) */}
              <div
                className={[
                  "hidden md:block pointer-events-none absolute top-9",
                  isLeft ? "right-0 translate-x-[14px]" : "left-0 -translate-x-[14px]",
                ].join(" ")}
              >
                <div className="h-3 w-3 rounded-full bg-foreground/60 shadow-[0_0_0_6px_rgba(0,0,0,0.04)] dark:shadow-[0_0_0_6px_rgba(255,255,255,0.06)]" />
              </div>

              <div className="flex items-start gap-5">
                {/* number badge (minimal) */}
                <motion.div variants={badgeVariants} className="shrink-0">
                  <div className="w-11 h-11 rounded-xl border border-border bg-muted/40 text-foreground flex items-center justify-center font-semibold">
                    {n}
                  </div>
                </motion.div>

                {/* content */}
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

              {/* subtle hover wash (no color) */}
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_top,rgba(2,6,23,0.06),transparent_60%)] dark:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_60%)] rounded-2xl" />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  </div>
</motion.section>


        {/* CTA */}
        <motion.section variants={fadeUp} className="text-center py-24">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Empower Your IT Operations
          </h2>
          <p className="text-muted-foreground mb-10">
            Discover how Vaultix modernizes enterprise IT management.
          </p>

          <motion.div whileHover={{ scale: 1.12, y: -6 }}>
            <Link href="/contact?subject=product&subSubject=Vaultix">
              <Button
                size="lg"
                className="bg-gradient-to-r from-violet-500 to-blue-600 rounded-full px-12 shadow-xl hover:shadow-violet-500/50 transition-all"
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

export default Vaultix;
